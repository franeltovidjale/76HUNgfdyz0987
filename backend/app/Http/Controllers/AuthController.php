<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Mail\VerificationEmail;
use App\Mail\ResetPasswordEmail;
use App\Mail\ForgotPasswordEmail;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\ForgotPasswordRequest;

class AuthController extends Controller
{
    // Enregistrement de l'utilisateur

    public function register(Request $request)
    {
        // Définir les règles de validation
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
            'role' => 'required|in:admin,company,candidate',
        ], [
            'email.required' => 'L\'adresse email est obligatoire.',
            'password.required' => 'Le mot de passe est obligatoire.',
            'password.min' => 'Le mot de passe doit contenir au moins 8 caractères.',
            //'password.confirmed' => 'Les mots de passe ne correspondent pas.',
            'role.in' => 'Le rôle doit être admin, company, ou candidate.',
        ]);

        // Vérifier si la validation échoue
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        DB::beginTransaction(); // Démarrer la transaction

        try {
            // Hasher le mot de passe
            $data = $request->only('email', 'password', 'role');
            $data['password'] = Hash::make($data['password']);

            // Générer un jeton de vérification unique
            $data['verification_token'] = Str::random(60);

            // Créer un nouvel utilisateur
            $user = User::create($data);

            // Générer le token JWT
            $token = JWTAuth::fromUser($user);
            // Envoyer l'e-mail de vérification
            Mail::to($user->email)->send(new VerificationEmail(
                $user,
            ));

            DB::commit(); // Valider la transaction

            // Retourner la réponse de succès avec le token
            return response()->json([
                'user' => $user,
                'access_token' => $token,
                'token_type' => 'Bearer',
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack(); // Annuler la transaction

            // Retourner une réponse d'erreur générique
            return response()->json([
                'message' => 'Une erreur est survenue lors de l\'inscription.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    // Connexion de l'utilisateur

    public function login(Request $request)
    {
        // Définir les règles de validation
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:8',
        ], [
            'email.required' => 'L\'adresse email est obligatoire.',
            'password.required' => 'Le mot de passe est obligatoire.',
            'password.min' => 'Le mot de passe doit contenir au moins 8 caractères.',
        ]);

        // Vérifier si la validation échoue
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Données invalides.',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            // Récupérer les informations d'identification
            $credentials = $request->only('email', 'password');

            // Tentative de connexion
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'message' => 'Identifiant ou mot de passe incorrecte.',
                    'errors' => [
                        'credentials' => ['Les identifiants fournis ne correspondent à aucun utilisateur.']
                    ]
                ], 401);
            }

            // Récupérer l'utilisateur authentifié
            $user = JWTAuth::user();


            // Retourner les infos tout en vérifiant que l'email est vérifié
            return response()->json([
                'user' => $user,
                'access_token' => $token,
                'token_type' => 'Bearer',
                'email_verified' => is_null($user->email_verified_at) ?  false : true,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Une erreur est survenue lors de la tentative de connexion.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    // Déconnexion de l'utilisateur
    public function logout(Request $request)
    {
        try {
            // Invalide le token de l'utilisateur pour le déconnecter
            JWTAuth::invalidate(JWTAuth::getToken());

            return response()->json([
                'message' => 'Utilisateur bien déconnecté'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Quelques choses s est mal passé'
            ], 500);
        }
    }

    //Vérification de l'email lors de l"inscription
    public function verifyEmail($token)
    {
        $user = User::where('verification_token', $token)->first();

        if (!$user) {
            return response()->json([
                'message' => 'Lien de vérification invalide.',
            ], 404);
        }

        $user->email_verified_at = now();
        $user->verification_token = null; // Supprime le token après vérification
        $user->save();

        return response()->json([
            'message' => 'Email vérifié avec succès.',
        ], 201);
    }


    // Demande de réinitialisation du mot de passe
    /**
     * Permet à un utilisateur de demander la réinitialisation de son mot de passe.
     * Un email avec un lien de réinitialisation sera envoyé à l'utilisateur.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function forgotPassword(Request $request)
    {
        // Validation de l'email
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Adresse e-mail invalide ou non trouvée.'], 401);
        }

        // Début de la transaction de base de données
        DB::beginTransaction();

        try {
            // Recherche de l'utilisateur
            $user = User::where('email', $request->email)->first();

            if (!$user) {
                return response()->json(['message' => 'Utilisateur non trouvé.'], 401);
            }

            // Recherche du token qui n'a pas été utilisé dans la table de réinitialisation des mots de passe
            $resetRecord = DB::table('password_reset_tokens')
                ->where('email', $request->email)
                ->where('used', false)
                ->first();

            // Vérifier si un enregistrement a été trouvé avant de tenter de supprimer
            if ($resetRecord) {
                // Supprimer ce token afin d'en générer un nouveau
                DB::table('password_reset_tokens')->where('id', $resetRecord->id)->delete();
            }

            // Génération d'un token unique pour la réinitialisation
            $token = Str::random(60);

            // Hachage du token pour la sécurité
            $hashedToken = Hash::make($token);

            // Sauvegarde du token dans la table de réinitialisation
            DB::table('password_reset_tokens')->insert([
                'email' => $user->email,
                'token' => $hashedToken,
                'created_at' => now(),
            ]);

            // Envoi de l'email avec le lien de réinitialisation
           Mail::to($user->email)->send(new ForgotPasswordEmail($user, $token));

            DB::commit(); // Valider la transaction

            // Retourner la réponse de succès avec le token
            return response()->json([
                'message' => "Un lien de réinitialisation a été envoyé à votre adresse e-mail.",
                
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack(); // Annuler la transaction

            // Retourner une réponse d'erreur générique
            return response()->json([
                'message' => 'Une erreur est survenue .',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    /* -------------------------------------------------------------------------- */
    /*                    Vérifier le token de réinitialisation                   */
    /* -------------------------------------------------------------------------- */
    /**
     * Vérifie la validité du token de réinitialisation et renvoie l'email de l'utilisateur.
     * Cette méthode est appelée lorsqu'un utilisateur clique sur le lien de réinitialisation dans l'email.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $token
     * @return \Illuminate\Http\JsonResponse
     */

    public function verifyResetToken(Request $request)
    {
        // Validation de l'email dans la requête
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
            'token' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Adresse e-mail invalide ou non trouvée.'], 401);
        }

        // Début de la transaction de base de données
        DB::beginTransaction();

        try {
            // Recherche de l'utilisateur à partir de l'email
            $user = User::where('email', $request->email)->first();

            if (!$user) {
                return response()->json(['message' => 'Utilisateur non trouvé.'], 401);
            }

            // Recherche du token qui n'a pas été utilisé dans la table de réinitialisation des mots de passe
            $resetRecord = DB::table('password_reset_tokens')->where('email', $request->email)->where('used', false)->first();

            if (!$resetRecord) {
                return response()->json(['message' => 'Aucune demande de réinitialisation trouvée pour cet email.'], 401);
            }

            // Vérification si le lien a expiré ( 60 minutes utilisés comme délai)
            $expirationTime = 60; // Durée d'expiration en minutes  
            $createdAt = \Carbon\Carbon::parse($resetRecord->created_at);
            $currentTime = \Carbon\Carbon::now();

            if ($currentTime->diffInMinutes($createdAt) > $expirationTime) {
                return response()->json(['message' => 'Le lien de réinitialisation a expiré.'], 400);
            }

            // Comparaison du token haché dans la base avec le token envoyé
            if (!Hash::check($request->token, $resetRecord->token)) {
                return response()->json(['message' => 'Le lien de réinitialisation est invalide ou a expiré.'], 401);
            }

            // Commit de la transaction
            DB::commit();

            return response()->json([
                'valid' => true,
                'email' => $request->email,
                'message' => 'Token valide, vous pouvez réinitialiser votre mot de passe.'
            ], 200);
        } catch (\Exception $e) {
            // En cas d'erreur, rollback de la transaction
            DB::rollBack();

            return response()->json(['message' => 'Une erreur est survenue. Veuillez réessayer plus tard.'], 500);
        }
    }


    // Réinitialisation du mot de passe
    /**
     * Permet à un utilisateur de réinitialiser son mot de passe via le lien envoyé.
     * Cette fonction vérifie la validité du token et du mot de passe.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function resetPassword(Request $request)
    {
        // Validation des données de la demande
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:password_reset_tokens,email',
            'token' => 'required',
            'password' => 'required|min:8', // Mot de passe confirmé
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'Données invalides.'], 401);
        }

        // Début de la transaction de base de données
        DB::beginTransaction();

        try {
            // Vérification de la présence du token
            $resetRecord = DB::table('password_reset_tokens')->where('email', $request->email)->where("used", false)->first();

            if (!$resetRecord || !Hash::check($request->token, $resetRecord->token)) {
                return response()->json(['message' => 'Le lien de réinitialisation est invalide ou a expiré. Reprenez le processus'], 401);
            }


            // Mise à jour du mot de passe
            $user = User::where('email', $request->email)->first();
            $user->password = Hash::make($request->password); // Hachage du nouveau mot de passe
            $user->save();

            // Marquer le token comme utilisé après la réinitialisation
            DB::table('password_reset_tokens')->where('email', $request->email)->update(['used' => true]);

            // Commit de la transaction
            DB::commit();

            return response()->json(['message' => 'Votre mot de passe a été réinitialisé avec succès.'], 201);
        } catch (\Exception $e) {
            // En cas d'erreur, rollback de la transaction
            DB::rollBack();

            return response()->json([
                'message' => 'Une erreur est survenue. Veuillez réessayer plus tard.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
