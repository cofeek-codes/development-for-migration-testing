<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    function getUser() {
        return ['code' => '206', 'message' => User::find(Auth::id())->get(['name', 'surname', 'patronymic'])];
    }

    function getSubjects() {
        return ['code' => '206', 'message' => User::find(Auth::id())->subjects];
    }

    function getGroups($subject_id) {
        return ['code' => '206', 'message' => User::find(Auth::id())->get(['name', 'surname', 'patronymic'])];
    }

    function getTopics($subject_id, $group_id) {
        
    }

    function addTopic($subject_id, $group_id) {
        
    }
}
