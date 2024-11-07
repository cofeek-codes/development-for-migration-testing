<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::controller(AuthController::class)->prefix('/auth')->group(function () {
    Route::post('/login', 'login');
    Route::get('/logout', 'logout');
    // For tests
    Route::get('/add', 'add');
    Route::get('/id', 'id');
});
Route::controller(UserController::class)->prefix('/user')->group(function () {
    Route::get('/getSubjects/{user_id}', 'getSubjects');
    Route::get('/getUser/{user_id}', 'getUser');
    Route::get('/getTopics/{subject_id}', 'getTopics');
});
Route::controller(ProjectController::class)->prefix('/project')->group(function () {
    Route::get('/getAll/{user_id}', 'getAll');
    Route::get('/getOne/{id}', 'getOne');
    Route::post('/addProject', 'addProject');
    Route::put('/updateProject/{id}', 'updateProject');
    Route::delete('/deleteProject/{project_id}', 'deleteProject');
});
Route::controller(TopicController::class)->prefix('/topic')->group(function () {
    Route::get('/getMaterials/{topic_id}', 'getMaterials');
    Route::get('/getLecture/{lecture_id}', 'getLecture');
    Route::get('/getTest/{test_id}', 'getTest');
    Route::post('/sendTest/', 'sendTest');
    Route::get('/getMark/{test_id}', 'getMark');
});
