<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Group_Subject;
use App\Models\Subject;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Mockery\Matcher\Subset;

class UserController extends Controller
{
    function getUser($user_id) {
        // return ['code' => '206', 'message' => User::find(Auth::id())->get(['name', 'surname', 'patronymic'])];
        return ['code' => '200', 'message' => User::find($user_id)->get(['name', 'surname', 'patronymic'])];
    }

    function getSubjects($user_id) {
        // return ['code' => '206', 'message' => User::find(Auth::id())->subjects];
        return ['code' => '200', 'message' => User::find($user_id)->subjects];
    }

    function getGroups($subject_id) {
        return ['code' => '200', 'message' => Subject::find($subject_id)->groups];
        // return ['code' => '206', 'message' => Subject::find($subject_id)->groupSubjects->pluck('group_id')];
    }

    function getTopics($group_id, $subject_id) {
        return ['code' => '200', 'message' => Topic::where('group_id', '=', $group_id)->where('subject_id', '=', $subject_id)->get()];
    }

    function addTopic(Request $request) {
        return ['code' => '200', 'message' => Topic::insert($request->all())];
    }
    
}
