<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeamRequest;
use App\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function create(TeamRequest $request)
    {
        $team = new Team();
        $team->fill($request->all());
        $team->save();
    }
}
