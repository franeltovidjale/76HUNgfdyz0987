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
        Schema::create('candidates', function (Blueprint $table) {
            $table->bigIncrements('id'); // Identifiant unique du profil candidat
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade')->comment('Référence à l’utilisateur associé au profil candidat');
            $table->string('resume')->nullable()->comment('Lien vers le CV du candidat');
            $table->text('skills')->nullable()->comment('Compétences principales du candidat');
            $table->integer('experience_years')->unsigned()->nullable()->comment('Années d’expérience professionnelle');
            $table->decimal('desired_salary', 10, 2)->nullable()->comment('Salaire souhaité par le candidat');
            $table->enum('temp_salary', ['hourly', 'daily', 'monthly'])->nullable()->comment('Salaire en fonction du temps de travail');
            $table->timestamps(); // created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('candidates', function (Blueprint $table) {
            //
        });
    }
};
