<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TestController extends Controller
{
    public function index(Request $request) {
        dd(1234);
        dd(base64_decode($request->key));
    }
}
