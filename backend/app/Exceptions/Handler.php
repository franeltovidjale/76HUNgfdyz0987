<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\JWTException;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }
    public function render($request, Throwable $exception)
    {
        // Gérer les exceptions d'authentification JWT
        if ($exception instanceof TokenExpiredException) {
            return response()->json([
                'message' => 'Le token a expiré. Veuillez en fournir un nouveau.'
            ], 422);
        }
    
        if ($exception instanceof TokenInvalidException) {
            return response()->json([
                'message' => 'Le token est invalide. Veuillez fournir un token valide.'
            ], 422);
        }
    
        if ($exception instanceof JWTException) {
            return response()->json([
                'message' => 'Token non fourni. Veuillez en inclure un dans votre requête.'
            ], 422);
        }
    
        // Gérer les autres exceptions d'authentification
        if ($exception instanceof \Illuminate\Auth\AuthenticationException) {
            return response()->json([
                'message' => 'Non authentifié. Veuillez fournir un token valide.'
            ], 422);
        }
    
        return parent::render($request, $exception);
    }
}
