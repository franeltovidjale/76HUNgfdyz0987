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
        Schema::create('favorites', function (Blueprint $table) {
            $table->bigIncrements('id'); // Identifiant unique pour chaque favori
            $table->foreignId('candidate_id')->constrained('candidates')->onDelete('cascade')->comment('Référence au profil candidat');
            $table->foreignId('job_id')->constrained('jobs')->onDelete('cascade')->comment('Référence à l’offre d’emploi');
            $table->timestamps(); // created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('favorites', function (Blueprint $table) {
            //
        });
    }
};
