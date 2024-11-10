<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Lecture;
use App\Models\Mark;
use App\Models\Question;
use App\Models\Student_answer;
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

    function getTopic($topic_id) {
        return ['code' => 200, 'message' => Topic::find($topic_id)];
    }

    function getTest($test_id) {
        $test = Test::find($test_id)->only(['id', 'title']);
        $questions = Question::where('test_id', $test_id)->get();
        $result = [];
        foreach($questions as $question) {
            array_push( $result, ['id' => $question->id,'title' => $question->title, 'answers' => Answer::where('question_id', $question->id)->get()]);
        }
        return ['code' => 200, 'message' => ['test' => $test, 'questions' => $result]];
    }

    function getMarks($test_id) {
        $marks = Test::find($test_id)->marks;
        $marksUser = [];
        foreach ($marks as $mark) {
            $user = Mark::find($mark->user_id)->user;
            array_push($marksUser, ['mark' => $mark, 'user' => $user->only(['id', 'name', 'surname', 'patronymic'])]);
        }
        return ['code' => 200, 'message' => $marksUser];
    }

    function getAnswers($test_id) {
        $questions = Question::where('test_id', $test_id)->get();
        $questionsAnswers = [];
        foreach ($questions as $question) {
            $answer = Student_answer::where('question_id', $question->id)->get();
            array_push($questionsAnswers, ['question' => ['title' => $question->title, 'answer' => Answer::find($answer[0]->answer_id)->only(['title', 'correct'])]]);
        }
        return ['code' => 200, 'message' => $questionsAnswers];
    }

    function addLecture(Request $request) {
        return ['code' => 201, 'message' => Lecture::create($request->all())];
    }

    function addTest(Request $request) {
        $test = Test::create(['title' => $request->title, 'topic_id' => $request->topic_id]);
        foreach ($request->questions as $question) {
            $questionCreate = Question::create(['title' => $question['title'], 'test_id' => $test->id]);
            foreach ($question['answers'] as $answer) {
                Answer::create(['title' => $answer['title'], 'correct' => $answer['isCorrect'], 'question_id' => $questionCreate->id]);
            }
        }
        return ['code' => 201, 'message' => 'Создано'];
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
