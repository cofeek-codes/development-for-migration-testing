<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('answers')->insert([[
            'title' => fake()->title,
            'correct' => true,
            'question_id' => 1
        ],
        [
            'title' => fake()->title,
            'correct' => false,
            'question_id' => 1
        ],
    ]);
    }
}
