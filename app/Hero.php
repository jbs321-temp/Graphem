<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{
    protected $table = 'heroes';

    protected $fillable = [
        'name',
        'side',
        'hit-points',
        'attack',
        'special-ability',
    ];

    protected $hidden = [
        'id',
        'created_at',
        'updated_at'
    ];
}
