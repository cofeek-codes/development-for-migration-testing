<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('projects')->insert([
            [
            'title' => 'Проект 1',
            'description' => 'Описание проекта',
            'url' => 'google.com',
            'user_id' => 1,
            ],
            [
                'title' => 'Проект 2',
                'description' => 'Описание проекта',
                'url' => 'a.ya.ru',
                'user_id' => 1,
            ],
            [
                'title' => 'Проект 1',
                'description' => 'Описание проекта',
                'url' => 'a.ya.ru',
                'user_id' => 2,
            ],
    ]);
    }
}
