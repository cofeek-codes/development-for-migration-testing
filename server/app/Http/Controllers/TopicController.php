<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Lecture;
use App\Models\Mark;
use App\Models\Question;
use App\Models\Student_answer;
use App\Models\Subject;
use App\Models\Test;
use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{

    function getMaterials($topic_id)
    {
        return ['code' => 200, 'message' => ['lectures' => Topic::find($topic_id)->lectures, 'tests' => Topic::find($topic_id)->tests]];
    }

    function getLecture($lecture_id)
    {
        return ['code' => 200, 'message' => Lecture::find($lecture_id)];
    }

    function getTest($test_id)
    {
        $test = Test::find($test_id)->only(['id', 'title']);
        $questions = Question::where('test_id', $test_id)->get();
        $result = [];
        foreach ($questions as $question) {
            array_push($result, ['id' => $question->id, 'title' => $question->title, 'answers' => Answer::where('question_id', $question->id)->get()]);
        }
        return ['code' => 200, 'message' => ['test' => $test, 'questions' => $result]];

        // {
        //     "title": '',
        //     "questions": [{
        //         "title": '',
        //         "answers": [{
        //             "title": '',
        //             "correct": true
        //         }
        //         ]
        //     },]
        // }
    }

    // @TODO: sendTest and getMark

    function sendTest() {}

    function getMark() {}
}
