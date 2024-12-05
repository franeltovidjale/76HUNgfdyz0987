<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject; // Ajoutez ceci

class User extends Authenticatable implements JWTSubject // Ajoutez l'interface ici
{
    use HasFactory, Notifiable;

    /**
     * Mass assignable attributes.
     *
     * @var array
     */
    protected $fillable = [
        'email',
        'password',
        'role',
        'status',
        'verification_token',
    ];

    /**
     * Hidden attributes for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Automatically casts attributes to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Define the relationship with UserProfile.
     */
    public function profile()
    {
        return $this->hasOne(UserProfile::class);
    }

    /**
     * Define the relationship with Company (for company users).
     */
    public function company()
    {
        return $this->hasOne(Company::class);
    }

    /**
     * Define the relationship with Candidate (for candidate users).
     */
    public function candidate()
    {
        return $this->hasOne(Candidate::class);
    }

    /**
     * Get the identifier that will be stored in the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey(); // Renvoie l'identifiant de l'utilisateur (ID)
    }

    /**
     * Return a key value array, containing custom claims.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return []; // Vous pouvez ajouter des revendications personnalisées ici si nécessaire
    }
}