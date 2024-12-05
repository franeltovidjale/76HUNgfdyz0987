<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Auth\Middleware\Authenticate as BaseAuthenticate;

class Authenticate extends BaseAuthenticate
{

    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @param string|null ...$guards
     * @return mixed
     */
    public function handle($request, Closure $next, ...$guards)
    {
        try {
            // Appel à la méthode parent pour gérer l'authentification
            return parent::handle($request, $next, ...$guards);
        } catch (TokenExpiredException $e) {
            return response()->json(['error' => 'Le token a expiré.'], 401);
        } catch (TokenInvalidException $e) {
            return response()->json(['error' => 'Le token est invalide.'], 401);
        } catch (JWTException $e) {
            return response()->json(['error' => 'Token non fourni.'], 401);
        }
    }
}
