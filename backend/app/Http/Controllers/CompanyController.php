<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Http\Resources\CompanyResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class CompanyController extends Controller
{
    public function index()
    {
        return response()->json(CompanyResource::collection(Company::all()));
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'name' => 'required|string|max:255',
            'industry' => 'required|string|max:255',
            'website' => 'nullable|url',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ], [
            'user_id.required' => 'L\'identifiant de l\'utilisateur est requis.',
            'user_id.exists' => 'L\'utilisateur spécifié n\'existe pas.',
            'name.required' => 'Le nom de la société est obligatoire.',
            'name.max' => 'Le nom de la société ne doit pas dépasser 255 caractères.',
            'industry.required' => 'Le secteur d\'activité est obligatoire.',
            'industry.max' => 'Le secteur d\'activité ne doit pas dépasser 255 caractères.',
            'website.url' => 'Le site web doit être une URL valide.',
            'logo.image' => 'Le logo doit être une image.',
            'logo.mimes' => 'Le logo doit être au format jpeg, png, jpg, gif ou svg.',
            'logo.max' => 'La taille du logo ne doit pas dépasser 2 Mo.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction();

        try {
            $company = Company::create($request->only(['user_id', 'name', 'industry', 'website']));

            // Ajoute le logo si un fichier a été téléchargé
            if ($request->hasFile('logo')) {
                $company->addMedia($request->file('logo'))->toMediaCollection('logo');
            }

            DB::commit();

            return response()->json([
                'message' => 'Société créée avec succès.',
                'company' => $company,
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Erreur lors de la création de la société.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }





    public function show(Company $company)
    {
        return response()->json(new CompanyResource($company));
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'string|max:255',
            'industry' => 'string|max:255',
            'website' => 'nullable|url',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ], [
            'name.max' => 'Le nom de la société ne doit pas dépasser 255 caractères.',
            'industry.max' => 'Le secteur d\'activité ne doit pas dépasser 255 caractères.',
            'website.url' => 'Le site web doit être une URL valide.',
            'logo.image' => 'Le logo doit être une image.',
            'logo.mimes' => 'Le logo doit être au format jpeg, png, jpg, gif ou svg.',
            'logo.max' => 'La taille du logo ne doit pas dépasser 2 Mo.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $company = Company::find($id);

        if (!$company) {
            return response()->json(['message' => 'Société non trouvée.'], 404);
        }

        DB::beginTransaction();

        try {
            $company->update($request->only(['name', 'industry', 'website']));

            // Remplace le logo si un nouveau fichier a été téléchargé
            if ($request->hasFile('logo')) {
                $company->clearMediaCollection('logo');
                $company->addMedia($request->file('logo'))->toMediaCollection('logo');
            }

            DB::commit();

            return response()->json([
                'message' => 'Société mise à jour avec succès.',
                'company' => $company,
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Erreur lors de la mise à jour de la société.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function destroy($id)
    {
        $company = Company::find($id);

        if (!$company) {
            return response()->json(['message' => 'Société non trouvée.'], 404);
        }

        DB::beginTransaction();

        try {
            $company->clearMediaCollection('logo'); // Supprime le logo associé
            $company->delete();

            DB::commit();

            return response()->json(['message' => 'Société supprimée avec succès.']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Erreur lors de la suppression de la société.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
