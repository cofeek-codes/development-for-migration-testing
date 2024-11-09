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
        return ['code' => '206', 'message' => User::find($request->header('user_id'))->get(['name', 'surname', 'patronymic'])];
        // return ['code' => '200', 'message' => User::find($user_id)->get(['name', 'surname', 'patronymic'])];
    }

    function getGroups(Request $request) {
        return ['code' => '200', 'message' => Group::where('user_id', $request->cookie('user_id'))->get()];
    }

    function getSubjects($group_id) {
        return ['code' => '200', 'message' => Subject::where('group_id', $group_id)->get];
    }


    function getTopics($subject_id) {
        return ['code' => '200', 'message' => Topic::where('subject_id', '=', $subject_id)->get()];
    }

    function addTopic(Request $request) {
        return ['code' => '200', 'message' => Topic::create($request->all())];
    }

    function getNews() {
        return ['code' => 200, 'message' => News::all()];
    }
}
