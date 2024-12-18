<?php

namespace Database\Factories;

use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
    protected $model = Company::class;

    public function definition()
    {
        $industries = ['Tech', 'Finance', 'Healthcare', 'Education', 'Marketing', 'Design', 'Retail'];
        
        return [
            'user_id' => User::factory(), // Crée un nouvel utilisateur pour chaque entreprise
            'name' => $this->faker->company(),
            'industry' => $this->faker->randomElement($industries),
            'website' => $this->faker->url(),
            'logo' => $this->faker->imageUrl(200, 200, 'business'), // Image aléatoire
            'about' => $this->faker->paragraphs(2, true),
            'phone' => $this->faker->phoneNumber(),
        ];
    }
}