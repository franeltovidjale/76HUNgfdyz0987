<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Http\Resources\JobResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class JobController extends Controller
{
    public function index()
    {
        return response()->json(JobResource::collection(Job::all()));
    }

    public function store(Request $request)
    {
        // Définir les règles de validation
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'company_id' => 'required|exists:companies,id',
            'category_id' => 'required|exists:job_categories,id',
            'type' => 'required|string|in:CDD,CDI',
            'location' => 'required|string|max:255',
        ], [
            'title.required' => 'Le titre est obligatoire.',
            'description.required' => 'La description est obligatoire.',
            'company_id.exists' => 'L\'entreprise spécifiée n\'existe pas.',
            'category_id.exists' => 'La catégorie spécifiée n\'existe pas.',
            'type.in' => 'Le type doit être CDD ou CDI.',
            'location.required' => 'Le lieu est obligatoire.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction();
        try {
            $job = Job::create($request->all());
            DB::commit();
            return response()->json(new JobResource($job), 201);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la création d\'un job', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la création du job'], 500);
        }
    }

    public function show(Job $job)
    {
        return response()->json(new JobResource($job));
    }

    public function update(Request $request, Job $job)
    {
        // Définir les règles de validation
        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'company_id' => 'sometimes|exists:companies,id',
            'category_id' => 'sometimes|exists:job_categories,id',
            'type' => 'sometimes|string|in:CDD,CDI',
            'location' => 'sometimes|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction();
        try {
            $job->update($request->all());
            DB::commit();
            return response()->json(new JobResource($job));
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la mise à jour du job', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la mise à jour du job'], 500);
        }
    }

    public function destroy(Job $job)
    {
        DB::beginTransaction();
        try {
            $job->delete();
            DB::commit();
            return response()->json(['message' => 'Job supprimé avec succès']);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la suppression du job', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la suppression du job'], 500);
        }
    }
}