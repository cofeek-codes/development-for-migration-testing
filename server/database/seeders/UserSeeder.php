<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => fake()->name,
            'surname' => fake()->name,
            'patronymic' => fake()->name,
            'login' => 'test',
            'password' => Hash::make('test'),
            'group_id' => 1, 
            'role_id' => 1,
        ]);
    }
}
