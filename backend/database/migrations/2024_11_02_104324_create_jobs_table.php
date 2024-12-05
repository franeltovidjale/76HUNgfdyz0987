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
        Schema::create('jobs', function (Blueprint $table) {
            $table->bigIncrements('id'); // Identifiant unique de l’offre d’emploi
            $table->foreignId('company_id')->constrained('companies')->onDelete('cascade')->comment('Référence à l’entreprise qui publie l’offre');
            $table->foreignId('category_id')->constrained('job_categories')->comment('Référence à la catégorie de l’offre');
            $table->string('title')->comment('Titre de l’offre d’emploi');
            $table->text('description')->comment('Description complète de l’offre d’emploi');
            $table->enum('job_type', ['remote', 'on-site'])->comment('Type de l’offre (remote ou présentiel)');
            $table->string('location')->nullable()->comment('Localisation du poste');
            $table->string('salary_range')->nullable()->comment('Plage salariale proposée');
            $table->foreignId('contract_id')->constrained('job_contracts')->comment('Type de contrat (CDD, CDI, STAGE)');
            $table->enum('experience_level', ['junior', 'intermediate', 'senior'])->nullable()->comment('Niveau d’expérience requis');
            $table->date('application_deadline')->nullable()->comment('Date limite de candidature');
            $table->timestamps(); // created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('job_listings', function (Blueprint $table) {
            //
        });
    }
};
