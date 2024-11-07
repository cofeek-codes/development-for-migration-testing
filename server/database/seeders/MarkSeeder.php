<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MarkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('marks')->insert([
            'mark' => '5',
            'date' => '01.02.2024',
            'test_id' => 1,
            'user_id' => 1,
            'time' => fake()->time,
        ]);
    }
}
