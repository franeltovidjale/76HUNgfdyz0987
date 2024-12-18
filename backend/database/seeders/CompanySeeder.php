<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()
            ->count(10)
            ->create([
                'role' => 'company'
            ])
            ->each(function ($user) {
                // Pour chaque utilisateur, créer une entreprise
                Company::factory()->create([
                    'user_id' => $user->id
                ]);
            });
    }
}
