<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $table = 'teams';

    protected $hidden = [
        'id',
        'created_at',
        'updated_at'
    ];

    /**
     * Get the comments for the blog post.
     */
    public function teamMembers()
    {
        return $this->hasManyThrough(Hero::class, TeamMember::class, 'team_id', 'id', 'id', 'hero_id');
    }
}
