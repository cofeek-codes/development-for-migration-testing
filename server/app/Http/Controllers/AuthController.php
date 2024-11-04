<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function login(Request $request) {
        if (!Auth::attempt($request->only('login', 'password'))) {
            return ['code'=>401, 'message' => 'Неправильный пароль'];
        } else {
            return ['code'=>200, 'message' => 'Правильно'];
        }
    }

    function logout() {
        Auth::logout();
        return ['code' => 206, 'message' => 'Успешно'];
    }
}
