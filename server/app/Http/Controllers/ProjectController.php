<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    function getAll() {
        return User::findOrFail(Auth::id())->projects;
    }

    function addProject(Request $request) {
        $project = Project::insert($request->all());
        if ($project) {
            return ['code' => 201, 'message' => 'Успешно создано'];
        } else {
            return ['code' => 204, 'message' => 'Несоздано'];
        }
    }

    function getOne($id) {
        return User::findOrFail($id);
    }

    function updateProject(Request $request, $id) {
        $project = Project::find($id)->update($request->all());
        if ($project) {
            return ['code' => 201, 'message' => 'Успешно изменено'];
        } else {
            return ['code' => 205, 'message' => 'Неизменено'];
        }
    }

    function deleteProject($id) {
        $project = Project::find($id)->delete();
        if ($project) {
            return ['code' => 410, 'message' => 'Удаленно'];
        } else {
            return ['code' => 205, 'message' => 'Неудалено'];
        }
    }
}
