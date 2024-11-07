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
    function getUser(Request $request)
    {
        return ['code' => '206', 'message' => User::find($request->cookie('user_id'))->get(['name', 'surname', 'patronymic'])];
        // return ['code' => '200', 'message' => User::find($user_id)->get(['name', 'surname', 'patronymic'])];
    }

    function getSubjects(Request $request)
    {
        return ['code' => '206', 'message' => User::find($request->cookie('user_id'))->subjects];
        // return ['code' => '200', 'message' => User::find($user_id)->subjects];
    }

    function getTopics($subject_id, Request $request)
    {
        // return ['code' => 200, 'message' => Subject::find(Auth::id())->topics];
        $user_group_id = User::find($request->cookie('user_id'))->group_id;
        return ['code' => 200, 'message' => Subject::find($subject_id)->topics->where('group_id', $user_group_id)];
    }

    function getGroups($subject_id)
    {
        return ['code' => '200', 'message' => Subject::find($subject_id)->groups];
        // return ['code' => '206', 'message' => Subject::find($subject_id)->groupSubjects->pluck('group_id')];
    }
}
