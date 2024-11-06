<?php

namespace App\Http\Controllers;

use App\Models\Lecture;
use App\Models\Mark;
use App\Models\Test;
use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    function getMaterials($topic_id) {
        return ['code' => 200, 'message' => ['lectures' => Topic::find($topic_id)->lectures, 'tests' => Topic::find($topic_id)->tests]];
    }

    function getLecture($lecture_id) {
        return ['code' => 200, 'message' => Lecture::find($lecture_id)];
    }

    function getTest($test_id) {
        return ['code' => 200, 'message' => Test::find($test_id)];
    }

    function getMarks($test_id) {
        return ['code' => 200, 'message' => Test::find($test_id)->marks];
    }

    function getMark($mark_id) {
        return ['code' => 200, 'message' => Mark::find($mark_id)];
    }

    function addLecture(Request $request) {
        return ['code' => 201, 'message' => Lecture::create($request->all())];
    }

    function addTest(Request $request) {
        return ['code' => 201, 'message' => Test::create($request->all())];
    }

    function deleteLecture($lecture_id) {
        return ['code' => 410, 'message' => Lecture::find($lecture_id)->delete()];
    }

    function deleteTest($test_id) {
        return ['code' => 410, 'message' => Test::find($test_id)->delete()];
    }

    function updateLecture(Request $request, $lecture_id) {
        return ['code' => 200, 'message' => Lecture::find($lecture_id)->update(['title' => $request->input('title'), 'content' => $request->input('content')])];
    }

    function updateMark(Request $request, $mark_id) {
        return ['code' => 200, 'message' => Mark::find($mark_id)->update(['mark' => $request->input('mark')])];
    }
    
}
