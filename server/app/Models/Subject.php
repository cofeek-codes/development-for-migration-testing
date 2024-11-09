<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id',
        'group_id',
    ];

    public function groups() : BelongsToMany {
        return $this->belongsToMany(Group::class);
    }

    public function topics(): HasMany
    {
        return $this->hasMany(Topic::class);
    }
}
