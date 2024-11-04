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
});
Route::controller(UserController::class)->prefix('/user')->group(function () {
	Route::get('/getSubjects', 'getSubjects');
	Route::get('/getUser', 'getUser');
	Route::get('/getGroups/{subject_id}', 'getGroups');
	Route::get('/getTopics/{subject_id}/{group_id}', 'getToipcs');
	Route::post('/addTopic/{subject_id}/{group_id}', 'addTopic');
});
Route::controller(ProjectController::class)->prefix('/project')->group(function () {
	Route::get('/getAll', 'getAll');
	Route::get('/getOne/{id}', 'getOne');
	Route::post('/addProject', 'addProject');
	Route::put('/updateProject/{id}', 'updateProject');
	Route::delete('/deleteProject', 'deleteProject');
});
Route::controller(TopicController::class)->prefix('/topic')->group(function () {
	Route::get('/getMaterials/{topic_id}', 'getMaterials');
	Route::post('/addLection/{topic_id}', 'addLection');
	Route::post('/addTest/{topic_id}', 'addTest');
	Route::put('/updateTest/{test_id}', 'updateTest');
	Route::put('/updateLection/{lection_id}', 'updateLection');
	Route::delete('/deleteTest/{test_id}', 'deleteTest');
	Route::delete('/deleteLection/{lection_id}', 'deleteTest');
	Route::get('/getMarks/{test_id}', 'getMarks');
});

Route::controller(AdminController::class)->prefix('/admin')->group(function () {
	Route::get('/getUsers', 'getUsers');
	Route::get('/getUser/{id}', 'getUser');
	Route::get('/getGroups', 'getGroup');
	Route::get('/getGroup', 'getGroup');
	Route::get('/getSubjects', 'getSubject');
	Route::get('/getUsers', 'getUsers');
	Route::put('/updateUser', 'updateUser');
	Route::put('/updateGroup', 'updateGroup');
	Route::put('/updateSubject', 'updateSubject');
	Route::post('/addUser', 'addUser');
	Route::post('/addGroup', 'addGroup');
	Route::post('/addSubject', 'addSubject');
	Route::delete('/deleteUser', 'deleteUser');
	Route::delete('/deleteGroup', 'deleteGroup');
	Route::delete('/deleteSubject', 'deleteSubject');
});
