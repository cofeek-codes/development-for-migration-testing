<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Test extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'topic_id',
    ];

    public function marks() : HasMany {
        return $this->hasMany(Mark::class);
    }

    public function question() : HasMany {
        return $this->hasMany(Question::class);
    }
}
