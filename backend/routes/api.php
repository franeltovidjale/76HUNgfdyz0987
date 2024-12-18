<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\JobCategoryController;
use App\Http\Controllers\JobContractController;
use App\Http\Controllers\UserProfileController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');
Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/verify-reset-token', [AuthController::class, 'verifyResetToken']);
Route::post('/reset-password', [AuthController::class, 'resetPassword'])->name('reset.password');
Route::get('/verify-email/{token}', [AuthController::class, 'verifyEmail']);


Route::post('/resend-verification-email', [AuthController::class, 'resendVerificationEmail']);

Route::middleware('auth:api')->get('/user', [AuthController::class, 'user']);



// Récupérer tous les emplois
Route::get('jobs', [JobController::class, 'index']);

// Récupérer un emploi spécifique
Route::get('jobs/{id}', [JobController::class, 'show']);

// Récupérer toutes les catégories de job
Route::get('job_categories', [JobCategoryController::class, 'index'])
        ->withoutMiddleware('auth:jwt');

// Récupérer une catégorie de job spécifique
Route::get('job_categories/{id}', [JobCategoryController::class, 'show']);

// Récupérer toutes les entreprises
Route::get('companies', [CompanyController::class, 'index']);

// Récupérer une entreprise spécifique
Route::get('companies/{id}', [CompanyController::class, 'show']);


// Récupérer tous les candidats
Route::get('candidates', [CandidateController::class, 'index']);


Route::middleware('auth:api')->group(function () {

    Route::apiResource('users', UserController::class);
    Route::apiResource('companies', CompanyController::class);
    Route::apiResource('candidates', CandidateController::class);
    Route::apiResource('applications', ApplicationController::class);

    Route::apiResource('jobs', JobController::class);
    Route::apiResource('job_contracts', JobContractController::class);
    Route::apiResource('job_categories', JobCategoryController::class);
    Route::apiResource('user_profiles', UserProfileController::class);
    Route::apiResource('favorites', FavoriteController::class);

});