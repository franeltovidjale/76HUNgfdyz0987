<?php

namespace Database\Factories;

use App\Models\JobCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JobCategory>
 */
class JobCategoryFactory extends Factory
{
    protected $model = JobCategory::class;

    public function definition()
    {
        $categories = [
            [
                'name' => 'Développement Web',
                'description' => 'Développement de sites et applications web',
            ],
            [
                'name' => 'Design Graphique',
                'description' => 'Création graphique et design visuel',
            ],
            [
                'name' => 'Marketing Digital',
                'description' => 'Stratégies marketing en ligne et réseaux sociaux',
            ],
            [
                'name' => 'Development Mobile',
                'description' => 'Développement d\'applications mobiles iOS et Android',
            ],
            [
                'name' => 'Intelligence Artificielle',
                'description' => 'IA, Machine Learning et Data Science',
            ],
            [
                'name' => 'Gestion de Projet',
                'description' => 'Management et coordination de projets',
            ],
            [
                'name' => 'Support Technique',
                'description' => 'Assistance et support informatique',
            ],
            [
                'name' => 'Sécurité Informatique',
                'description' => 'Cybersécurité et protection des données',
            ]
        ];

        $category = fake()->unique()->randomElement($categories);
        return [
            'name' => $category['name'],
            'description' => $category['description']
        ];
    }
}
