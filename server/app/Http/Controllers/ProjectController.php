<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    function getAll($user_id) {
        // return User::find(Auth::id())->projects;
        return User::find($user_id)->projects;
    }

    function addProject(Request $request) {
        $project = Project::create($request->all());
        if ($project) {
            return ['code' => 201, 'message' => 'Успешно создано'];
        } else {
            return ['code' => 204, 'message' => 'Несоздано'];
        }
    }

    function getOne($project_id) {
        return Project::findOrFail($project_id);
    }

    function updateProject(Request $request, $project_id) {
        $project = Project::find($project_id)->update($request->all());
        if ($project) {
            return ['code' => 201, 'message' => 'Успешно изменено'];
        } else {
            return ['code' => 205, 'message' => 'Неизменено'];
        }
    }

    function deleteProject($project_id) {
        $project = Project::find($project_id)->delete();
        if ($project) {
            return ['code' => 410, 'message' => 'Удаленно'];
        } else {
            return ['code' => 205, 'message' => 'Неудалено'];
        }
    }
}
