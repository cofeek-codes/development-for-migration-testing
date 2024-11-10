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
            [
            'name' => 'Иван',
            'surname' => 'Иванов',
            'patronymic' => 'Иванович',
            'login' => 'ivan',
            'password' => Hash::make('ivan'),
            'group_id' => null, 
            'role_id' => 2,
        ],
        [
            'name' => 'Алексей',
            'surname' => 'Емельянов',
            'patronymic' => 'Сергеевич',
            'login' => 'alex',
            'password' => Hash::make('alex'),
            'group_id' => 1, 
            'role_id' => 1,
        ],
        [
            'name' => 'admin',
            'surname' => 'admin',
            'patronymic' => 'admin',
            'login' => 'admin',
            'password' => Hash::make('admin'),
            'group_id' => null, 
            'role_id' => 3,
        ],
    ]);
    }
}
