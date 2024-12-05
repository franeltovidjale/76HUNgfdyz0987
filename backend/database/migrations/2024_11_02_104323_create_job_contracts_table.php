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
        Schema::create('job_contracts', function (Blueprint $table) {
            $table->bigIncrements('id'); // Identifiant unique du type de contrat
            $table->string('type')->unique()->comment('Type de contrat, ex: CDD, CDI, Stage');
            $table->text('description')->nullable()->comment('Description du type de contrat');
            $table->timestamps(); // created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('job_contracts', function (Blueprint $table) {
            //
        });
    }
};
