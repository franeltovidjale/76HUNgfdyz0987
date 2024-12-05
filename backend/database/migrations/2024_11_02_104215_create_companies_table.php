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
        Schema::create('companies', function (Blueprint $table) {
            $table->bigIncrements('id');  // Identifiant unique de l’entreprise
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade')->comment('Référence à l’utilisateur qui possède l’entreprise');
            $table->string('name')->comment('Nom de l’entreprise');
            $table->string('industry')->nullable()->comment('Secteur d’activité de l’entreprise');
            $table->string('website')->nullable()->comment('Site web de l’entreprise');
            $table->string('logo')->nullable()->comment('Lien vers le logo de l’entreprise');
            $table->text('about')->nullable()->comment('Description de l’entreprise');
            $table->string('phone')->nullable()->comment('Numéro de téléphone de l’entreprise');
            $table->timestamps(); // created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('companies', function (Blueprint $table) {
            //
        });
    }
};
