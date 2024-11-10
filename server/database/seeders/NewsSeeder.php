<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('news')->insert([
            [
            'title' => 'Новость 1',
            'description' => 'Описание новости',
            ],
            [
                'title' => 'Новость 2',
                'description' => 'Описание новости',
            ],
            [
                'title' => 'Новость 3',
                'description' => 'Описание новости',
            ],
    ]);
    }
}
