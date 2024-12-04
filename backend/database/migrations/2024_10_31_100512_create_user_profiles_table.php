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
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade')->comment('Référence à l’identifiant de l’utilisateur dans la table users');
            $table->string('first_name')->comment('Prénom de l’utilisateur');
            $table->string('last_name')->comment('Nom de famille de l’utilisateur');
            $table->string('phone')->nullable()->comment('Numéro de téléphone de l’utilisateur');
            $table->string('address')->nullable()->comment('Adresse de l’utilisateur');
            $table->text('country')->nullable()->comment('Pays de l’utilisateur');
            $table->string('profile_photo')->nullable()->comment('Lien vers la photo de profil');
            $table->text('bio')->nullable()->comment('Description ou biographie de l’utilisateur');
            $table->enum('gender', ['male', 'female', 'other'])->nullable()->comment('Genre de l’utilisateur');
            $table->date('date_of_birth')->nullable()->comment('Date de naissance de l’utilisateur');
            $table->timestamps(); // created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_profiles');
    }
};
