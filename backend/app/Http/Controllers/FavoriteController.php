<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Http\Resources\FavoriteResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class FavoriteController extends Controller
{
    public function index()
    {
        return response()->json(FavoriteResource::collection(Favorite::all()));
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'job_id' => 'required|exists:jobs,id',
        ], [
            'user_id.required' => 'L\'utilisateur est obligatoire.',
            'job_id.required' => 'Le job est obligatoire.',
            'user_id.exists' => 'L\'utilisateur spécifié n\'existe pas.',
            'job_id.exists' => 'Le job spécifié n\'existe pas.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction();
        try {
            $favorite = Favorite::create($request->all());
            DB::commit();
            return response()->json(new FavoriteResource($favorite), 201);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la création du favori', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la création du favori'], 500);
        }
    }

    public function show(Favorite $favorite)
    {
        return response()->json(new FavoriteResource($favorite));
    }

    public function destroy(Favorite $favorite)
    {
        DB::beginTransaction();
        try {
            $favorite->delete();
            DB::commit();
            return response()->json(['message' => 'Favori supprimé avec succès']);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Erreur lors de la suppression du favori', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Échec de la suppression du favori'], 500);
        }
    }
}