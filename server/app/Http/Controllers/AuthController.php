<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function login(Request $request) {
        if (!Auth::attempt($request->only('login', 'password'), $request->has('remember'))) {
            return ['code'=>401, 'message' => 'Неправильный пароль'];
        } else {
            return response(['code'=>200, 'message' => 'logged in'])->cookie(cookie('user_id', Auth::id(), 172800))->cookie(cookie('role', Auth::user()->role_id, 172800));
        }
    }

    function logout() {
        Auth::logout();
        return ['code' => 206, 'message' => 'Успешно'];
    }

    function id() {
        return ['code'=>200, 'message' => Auth::id()];
    }

    function add() {
        User::insert([
            'name'=>'test',
            'surname'=>'test',
            'patronymic'=>'test',
            'photo'=>'test',
            'login'=>'test',
            'password'=>bcrypt('test'),
            'group_id'=>1,
            'role_id'=>2,
        ]);
        return 'ya';
    }
}
