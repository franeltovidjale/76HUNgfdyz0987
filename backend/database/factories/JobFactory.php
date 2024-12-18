<?php
namespace Database\Factories;

use App\Models\Job;
use App\Models\Company;
use App\Models\JobCategory;
use App\Models\JobContract;
use Illuminate\Database\Eloquent\Factories\Factory;

class JobFactory extends Factory
{
    /**
     * Le modèle associé à cette factory.
     */
    protected $model = Job::class;

    /**
     * Définir les valeurs par défaut pour les attributs du modèle.
     */
    public function definition(): array
    {
        return [
            'company_id' => Company::factory(), // Crée une entreprise liée
            'category_id' => JobCategory::factory(), // Crée une catégorie liée
            'title' => $this->faker->jobTitle(),
            'description' => $this->faker->paragraph(5),
            'job_type' => $this->faker->randomElement(['remote', 'on-site']),
            'location' => $this->faker->city(),
            'salary_range' => $this->faker->randomElement(['30000-40000', '40000-50000', '50000-60000']),
            'contract_id' => JobContract::factory(), // Crée un contrat lié
            'experience_level' => $this->faker->randomElement(['junior', 'intermediate', 'senior']),
            'application_deadline' => $this->faker->dateTimeBetween('+1 week', '+1 month'),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
