<?php

namespace App\Http\Controllers;

use App\Models\JobCategory;
use App\Http\Resources\JobCategoryResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class JobCategoryController extends Controller
{
    public function index()
    {
        return response()->json(JobCategoryResource::collection(JobCategory::all()));
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
        ], [
            'name.required' => 'Le nom de la catégorie est obligatoire.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction();
        try {
            $jobCategory = JobCategory::create($request->all());
            DB::commit();
            return response()->json(new JobCategoryResource($jobCategory), 201);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la création de la catégorie', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la création de la catégorie'], 500);
        }
    }

    public function show(JobCategory $jobCategory)
    {
        return response()->json(new JobCategoryResource($jobCategory));
    }

    public function update(Request $request, JobCategory $jobCategory)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction();
        try {
            $jobCategory->update($request->all());
            DB::commit();
            return response()->json(new JobCategoryResource($jobCategory));
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la mise à jour de la catégorie', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la mise à jour de la catégorie'], 500);
        }
    }

    public function destroy(JobCategory $jobCategory)
    {
        DB::beginTransaction();
        try {
            $jobCategory->delete();
            DB::commit();
            return response()->json(['message' => 'Catégorie supprimée avec succès']);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la suppression de la catégorie', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la suppression de la catégorie'], 500);
        }
    }
}