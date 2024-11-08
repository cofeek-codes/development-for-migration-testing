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
    function getUser(Request $request) {
        return ['code' => '200', 'message' => User::find($request->cookie('user_id'))->get(['name', 'surname', 'patronymic'])];
    }

    function getSubjects(Request $request) {
        return ['code' => '200', 'message' => User::find($request->cookie('user_id'))->subjects];
    }

    function getGroups($subject_id) {
        return ['code' => '200', 'message' => Subject::find($subject_id)->groups];
    }

    function getTopics($group_id, $subject_id) {
        return ['code' => '200', 'message' => Topic::where('group_id', '=', $group_id)->where('subject_id', '=', $subject_id)->get()];
    }

    function addTopic(Request $request) {
        return ['code' => '200', 'message' => Topic::create($request->all())];
    }

}
