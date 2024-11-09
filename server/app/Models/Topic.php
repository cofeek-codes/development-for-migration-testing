<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Topic extends Model
{
    use HasFactory;


    protected $fillable = [
        'title',
        'subject_id',
    ];

    public function lectures() : HasMany {
        return $this->hasMany(Lecture::class);
    }

    public function tests() : HasMany {
        return $this->hasMany(Test::class);
    }
}
