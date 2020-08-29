<?php

namespace App\Http\Controllers;

use App\Hero;
use App\Http\Requests\HeroRequest;
use Illuminate\Http\JsonResponse;

class HeroController extends Controller
{
    public function create(HeroRequest $request)
    {
        $hero = new Hero();
        $hero->fill($request->all());
        $hero->save();

        return new JsonResponse($hero);
    }

    public function getList()
    {
        $heroes = Hero::all();

        return new JsonResponse($heroes);
    }
}
