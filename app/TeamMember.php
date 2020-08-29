<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    protected $table = 'team_members';

    protected $hidden = [
        'id',
        'created_at',
        'updated_at'
    ];

    public function team()
    {
        return $this->hasOne(Team::class, 'id', 'team_id');
    }

    public function hero()
    {
        return $this->hasOne(Hero::class, 'id', 'hero_id');
    }
}
