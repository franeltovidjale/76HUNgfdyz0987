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
        Schema::create('applications', function (Blueprint $table) {
            $table->bigIncrements('id'); // Identifiant unique de la candidature
            $table->foreignId('job_id')->constrained('jobs')->onDelete('cascade')->comment('Référence à l’offre d’emploi pour laquelle la candidature est envoyée');
            $table->foreignId('candidate_id')->constrained('candidates')->onDelete('cascade')->comment('Référence au profil candidat');
            $table->enum('status', ['submitted', 'reviewed', 'interview', 'hired', 'rejected'])->default('submitted')->comment('Statut de la candidature');
            $table->timestamps(); // created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('applications', function (Blueprint $table) {
            //
        });
    }
};
