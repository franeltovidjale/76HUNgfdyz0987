<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Http\Resources\ApplicationResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ApplicationController extends Controller
{
    public function index()
    {
        return response()->json(ApplicationResource::collection(Application::all()));
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'job_id' => 'required|exists:jobs,id',
            'candidate_id' => 'required|exists:candidates,id',
            'status' => 'required|string|in:pending,accepted,rejected',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction();
        try {
            $application = Application::create($request->all());
            DB::commit();
            return response()->json(new ApplicationResource($application), 201);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la création de la candidature', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la création de la candidature'], 500);
        }
    }

    public function show(Application $application)
    {
        return response()->json(new ApplicationResource($application));
    }

    public function update(Request $request, Application $application)
    {
        $validator = Validator::make($request->all(), [
            'status' => 'required|string|in:pending,accepted,rejected',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction();
        try {
            $application->update($request->all());
            DB::commit();
            return response()->json(new ApplicationResource($application));
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la mise à jour de la candidature', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la mise à jour de la candidature'], 500);
        }
    }

    public function destroy(Application $application)
    {
        DB::beginTransaction();
        try {
            $application->delete();
            DB::commit();
            return response()->json(['message' => 'Candidature supprimée avec succès']);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la suppression de la candidature', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la suppression de la candidature'], 500);
        }
    }
}