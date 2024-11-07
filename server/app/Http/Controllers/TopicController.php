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
use Database\Seeders\AnswerSeeder;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;

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
            array_push($result, ['id' => $question->id, 'title' => $question->title, 'answers' => Answer::where('question_id', $question->id)->get()->setHidden(['correct'])]);
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

    function sendTest(Request $request)
    {

        foreach ($request->questions as $question) {
            Student_answer::create([
                'user_id' => 1,
                'question_id' => $question['id'],
                'answer_id' => $question['answer_id']
            ]);
        }


        // @TODO: count mark

        $correctAnswersCount = 0;
        $questionsCount = Question::where('test_id', $request->test_id)->count();


        foreach ($request->questions as $q) {
            $correctAnswerId = Answer::where('question_id', $q['id'])->where('correct', true)->get()[0]->id;
            if ($q['answer_id'] == $correctAnswerId) {
                $correctAnswersCount += 1;
            }
        }

        $correctionPercent = $correctAnswersCount / $questionsCount * 100;

        $mark = 0;

        if ($correctionPercent >= 85) {
            $mark = 5;
        } else if ($correctionPercent >= 70 && $correctionPercent < 85) {
            $mark = 4;
        } else if ($correctionPercent >= 55 && $correctionPercent < 70) {
            $mark = 3;
        } else {
            $mark = 2;
        }

        Mark::create([
            'mark' => $mark,
            'date' => (new DateTime())->format('d.m.Y'),
            'test_id' => $request->test_id,
            'user_id' => 1,
            'time' => $request->time

        ]);

        return ['code' => 201, 'message' => 'Успешно'];
    }

    function getMark($test_id)
    {
        $mark = Mark::where('test_id', $test_id)->where('user_id', 1)->get()[0]->mark;
        return ['code' => 201, 'message' => $mark];
    }
}
