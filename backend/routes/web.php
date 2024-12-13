<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/vuemail', function () {
    return view('emails.verification_email');
});

Route::get('/email-verification', function () {
    return view('emails.email_verification_feedback');
})->name('email-verification');

Route::get('/password-edit-link', function () {
    return view('emails.forgot_password_email');
})->name('password-link');



// Routes pour la réinitialisation du mot de passe
Route::get('/reset-password/{token}', function (string $token, Request $request) {
    // Valider le token avant d'afficher la vue
    $resetRecord = DB::table('password_reset_tokens')
        ->where('email', $request->email)
        ->where('used', false)
        ->first();

    // if (!$resetRecord || !Hash::check($token, $resetRecord->token)) {
    //     return redirect('/login')->with('error', 'Le lien de réinitialisation est invalide ou a expiré.');
    // }

    if (!$resetRecord || !Hash::check($token, $resetRecord->token)) {
        return redirect()->away('http://localhost:3000/login?error=invalid_token');
    }

    return view('emails.reset_password', [
        'token' => $token,
        'email' => $request->email
    ]);
})->middleware('guest')->name('password.reset');

// Route pour traiter le formulaire de réinitialisation
Route::post('/reset-password', [AuthController::class, 'resetPassword'])
    ->middleware('guest')
    ->name('reset.password');