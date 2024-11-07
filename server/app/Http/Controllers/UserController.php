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
    function getUser($user_id)
    {
        // return ['code' => '206', 'message' => User::find(Auth::id())->get(['name', 'surname', 'patronymic'])];
        return ['code' => '200', 'message' => User::find($user_id)->get(['name', 'surname', 'patronymic'])];
    }

    function getSubjects($user_id)
    {
        // return ['code' => '206', 'message' => User::find(Auth::id())->subjects];
        return ['code' => '200', 'message' => User::find($user_id)->subjects];
    }

    function getTopics($subject_id)
    {
        // return ['code' => 200, 'message' => Subject::find(Auth::id())->topics];
        return ['code' => 200, 'message' => Subject::find($subject_id)->topics];
    }

    function getGroups($subject_id)
    {
        return ['code' => '200', 'message' => Subject::find($subject_id)->groups];
        // return ['code' => '206', 'message' => Subject::find($subject_id)->groupSubjects->pluck('group_id')];
    }
}
