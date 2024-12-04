<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('email')->unique()->comment('Adresse e-mail de l’utilisateur pour l’authentification');
            $table->string('password')->comment('Mot de passe crypté de l’utilisateur');
            $table->enum('role', ['admin', 'company', 'candidate'])->comment('Rôle de l’utilisateur dans le système');
            $table->enum('status', ['active', 'suspended'])->default('active')->comment('État du compte de l’utilisateur');
            $table->timestamp('email_verified_at')->nullable()->comment('Date de vérification de l’e-mail');
            $table->string('verification_token')->nullable()->comment('Jeton de vérification d’e-mail');
            $table->rememberToken()->comment('Jeton de persistance de session');
            $table->timestamps();
    
            $table->index('role');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
