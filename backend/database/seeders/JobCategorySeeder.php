<?php

namespace Database\Seeders;

use App\Models\JobCategory;
use Illuminate\Database\Seeder;

class JobCategorySeeder extends Seeder
{
    public function run()
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

        foreach ($categories as $category) {
            JobCategory::create($category);
        }
    }
}