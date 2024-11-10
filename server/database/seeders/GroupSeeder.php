<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('groups')->insert([
            [
            'name' => 'ТМ-301',
            ],
            [
            'name' => 'ИСиП-301',
            ],
            [
            'name' => 'М-202',
            ],
    ]);
    }
}
