<?php

namespace App\Http\Controllers;

use App\Models\UserProfile;
use App\Http\Resources\UserProfileResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class UserProfileController extends Controller
{
    public function index()
    {
        return response()->json(UserProfileResource::collection(UserProfile::all()));
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'bio' => 'nullable|string',
        ], [
            'user_id.required' => 'L\'utilisateur est obligatoire.',
            'user_id.exists' => 'L\'utilisateur spécifié n\'existe pas.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction();
        try {
            $userProfile = UserProfile::create($request->all());
            DB::commit();
            return response()->json(new UserProfileResource($userProfile), 201);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la création du profil utilisateur', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la création du profil utilisateur'], 500);
        }
    }

    public function show(UserProfile $userProfile)
    {
        return response()->json(new UserProfileResource($userProfile));
    }

    public function update(Request $request, UserProfile $userProfile)
    {
        $validator = Validator::make($request->all(), [
            'bio' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction();
        try {
            $userProfile->update($request->all());
            DB::commit();
            return response()->json(new UserProfileResource($userProfile));
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la mise à jour du profil utilisateur', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la mise à jour du profil utilisateur'], 500);
        }
    }

    public function destroy(UserProfile $userProfile)
    {
        DB::beginTransaction();
        try {
            $userProfile->delete();
            DB::commit();
            return response()->json(['message' => 'Profil utilisateur supprimé avec succès']);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la suppression du profil utilisateur', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la suppression du profil utilisateur'], 500);
        }
    }
}