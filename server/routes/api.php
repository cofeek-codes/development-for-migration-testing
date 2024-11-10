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
    Route::get('/getSubjects/', 'getSubjects');
    Route::get('/getSubject/{subject_id}', 'getSubject');
    Route::get('/getUser/', 'getUser');
    Route::get('/getGroup/', 'getGroup');
    Route::get('/getTopics/{subject_id}', 'getTopics');
    Route::get('/getNews/', 'getNews');
});
Route::controller(ProjectController::class)->prefix('/project')->group(function () {
    Route::get('/getAll/', 'getAll');
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

Route::controller(AdminController::class)->prefix('/admin')->group(function () {
    Route::get('/getUsers', 'getUsers');
    Route::get('/getUser/{id_user}', 'getUser');
    Route::get('/getGroups', 'getGroups');
    Route::get('/getGroup/{id_group}', 'getGroup');
    Route::get('/getSubjects', 'getSubjects');
    Route::get('/getSubject/{id_subject}', 'getSubject');
    Route::put('/updateUser', 'updateUser');
    Route::put('/updateGroup', 'updateGroup');
    Route::put('/updateSubject', 'updateSubject');
    Route::post('/addUser', 'addUser');
    Route::post('/addGroup', 'addGroup');
    Route::post('/addSubject', 'addSubject');
    Route::delete('/deleteUser', 'deleteUser');
    Route::delete('/deleteGroup', 'deleteGroup');
    Route::delete('/deleteSubject', 'deleteSubject');

    Route::get('/getNews', 'getNews');
    Route::get('/getNews/{id_news}', 'getNewsId');
    Route::post('/addNews', 'addNews');
    Route::put('/updateNews', 'updateNews');
    Route::delete('/deleteNews', 'deleteNews');
});
