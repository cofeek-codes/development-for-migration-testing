<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\LectureController;
use App\Http\Controllers\MarkController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\TopicController;
use Illuminate\Http\Request;
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

Route::controller(AnswerController::class)->group(function () {});
Route::controller(GroupController::class)->group(function () {});
Route::controller(LectureController::class)->group(function () {});
Route::controller(MarkController::class)->group(function () {});
Route::controller(ProjectController::class)->group(function () {});
Route::controller(QuestionController::class)->group(function () {});
Route::controller(SubjectController::class)->group(function () {});
Route::controller(TestController::class)->group(function () {});
Route::controller(TopicController::class)->group(function () {});
