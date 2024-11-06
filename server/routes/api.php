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
	Route::get('/getGroups/{subject_id}', 'getGroups');
	Route::get('/getTopics/{subject_id}/{group_id}', 'getTopics');
	Route::post('/addTopic', 'addTopic');
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
	Route::get('/getLecture/{lecture_id}', 'getLecture');
	Route::get('/getTest/{test_id}', 'getTest');
	Route::post('/addLecture', 'addLecture');
	Route::post('/addTest', 'addTest');
	// Route::put('/updateTest/{test_id}', 'updateTest');
	Route::put('/updateLecture/{lecture_id}', 'updateLecture');
	Route::delete('/deleteTest/{test_id}', 'deleteTest');
	Route::delete('/deleteLecture/{lecture_id}', 'deleteLecture');
	Route::get('/getMarks/{test_id}', 'getMarks');
	Route::get('/getAnswers/{test_id}/{user_id}', 'getAnswers');
	Route::put('/updateMark/{mark_id}', 'updateMark');
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

	Route::post('/addNews', 'addNews');
	Route::delete('/deleteNews', 'deleteNews');
});
