<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//TODO:: requires authentication
Route::get('/heroes', 'HeroController@getList');
Route::post('/hero', 'HeroController@create');
Route::post('/team', 'HeroController@create');
Route::get('/team', 'HeroController@getList');
