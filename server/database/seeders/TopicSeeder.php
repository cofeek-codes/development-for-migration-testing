<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TopicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('topics')->insert([
        [
            'title' => 'Логарифмы', 
            'subject_id' => 1,
        ],
        [
            'title' => 'Логарифмы 2', 
            'subject_id' => 1,
        ],
        [
            'title' => 'Глаголы', 
            'subject_id' => 2,
        ],
        [
            'title' => 'Логарифмы', 
            'subject_id' => 3,
        ],
    ]);
    }
}
