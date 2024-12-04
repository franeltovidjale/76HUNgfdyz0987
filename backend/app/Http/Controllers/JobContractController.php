<?php

namespace App\Http\Controllers;

use App\Models\JobContract;
use App\Http\Resources\JobContractResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class JobContractController extends Controller
{
    public function index()
    {
        return response()->json(JobContractResource::collection(JobContract::all()));
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required|string|max:50',
        ], [
            'type.required' => 'Le type de contrat est obligatoire.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction();
        try {
            $jobContract = JobContract::create($request->all());
            DB::commit();
            return response()->json(new JobContractResource($jobContract), 201);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la création du contrat', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la création du contrat'], 500);
        }
    }

    public function show(JobContract $jobContract)
    {
        return response()->json(new JobContractResource($jobContract));
    }

    public function update(Request $request, JobContract $jobContract)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'sometimes|string|max:50',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction();
        try {
            $jobContract->update($request->all());
            DB::commit();
            return response()->json(new JobContractResource($jobContract));
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la mise à jour du contrat', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la mise à jour du contrat'], 500);
        }
    }

    public function destroy(JobContract $jobContract)
    {
        DB::beginTransaction();
        try {
            $jobContract->delete();
            DB::commit();
            return response()->json(['message' => 'Contrat supprimé avec succès']);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la suppression du contrat', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la suppression du contrat'], 500);
        }
    }
}