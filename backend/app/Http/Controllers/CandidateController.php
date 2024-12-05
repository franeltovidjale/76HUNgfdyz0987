<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Http\Resources\CandidateResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class CandidateController extends Controller
{
    public function index()
    {
        return response()->json(CandidateResource::collection(Candidate::all()));
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'skills' => 'required|string',
            'experience_years' => 'required|integer',
            'desired_salary' => 'required|numeric',
            'temp_salary' => 'nullable|numeric',
            'resume' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
        ], [
            'user_id.required' => 'L\'utilisateur est requis.',
            'resume.mimes' => 'Le CV doit être un fichier de type pdf, doc ou docx.',
            'resume.max' => 'La taille du CV ne doit pas dépasser 2 Mo.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction();

        try {
            $candidate = Candidate::create($request->only([
                'user_id', 'skills', 'experience_years', 'desired_salary', 'temp_salary'
            ]));

            // Ajoute le CV si un fichier a été téléchargé
            if ($request->hasFile('resume')) {
                $candidate->addMedia($request->file('resume'))->toMediaCollection('resume');
            }

            DB::commit();

            return response()->json([
                'message' => 'Candidat créé avec succès.',
                'candidate' => $candidate,
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Erreur lors de la création du candidat.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    public function show(Candidate $candidate)
    {
        return response()->json(new CandidateResource($candidate));
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'skills' => 'string',
            'experience_years' => 'integer',
            'desired_salary' => 'numeric',
            'temp_salary' => 'nullable|numeric',
            'resume' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $candidate = Candidate::find($id);

        if (!$candidate) {
            return response()->json(['message' => 'Candidat non trouvé.'], 404);
        }

        DB::beginTransaction();

        try {
            $candidate->update($request->only([
                'skills', 'experience_years', 'desired_salary', 'temp_salary'
            ]));

            // Remplace le CV si un nouveau fichier a été téléchargé
            if ($request->hasFile('resume')) {
                $candidate->clearMediaCollection('resume');
                $candidate->addMedia($request->file('resume'))->toMediaCollection('resume');
            }

            DB::commit();

            return response()->json([
                'message' => 'Candidat mis à jour avec succès.',
                'candidate' => $candidate,
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Erreur lors de la mise à jour du candidat.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function destroy($id)
    {
        $candidate = Candidate::find($id);

        if (!$candidate) {
            return response()->json(['message' => 'Candidat non trouvé.'], 404);
        }

        DB::beginTransaction();

        try {
            $candidate->clearMediaCollection('resume'); // Supprime le CV associé
            $candidate->delete();

            DB::commit();

            return response()->json(['message' => 'Candidat supprimé avec succès.']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Erreur lors de la suppression du candidat.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}