<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function login(Request $request) {
        if (!Auth::attempt($request->only('login', 'password'))) {
            return ['code'=>401, 'message' => 'Неправильный пароль'];
        } else {
            // @TODO make hash
            return ['code'=>200, 'message' => Auth::id()];
        }
    }

    function logout() {
        Auth::logout();
        return ['code' => 206, 'message' => 'Успешно'];
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
