<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LectureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('lectures')->insert([
        [
            'title' => 'Логарифмы',
            'content' => 'Логарифмы',
            'topic_id' => 1
        ],
        [
            'title' => 'Логарифмы: использование',
            'content' => 'Использование',
            'topic_id' => 1
        ],
        [
            'title' => 'Логарифмы 2',
            'content' => '2',
            'topic_id' => 2
        ],
    ]);
    }
}
