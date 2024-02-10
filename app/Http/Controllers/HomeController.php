<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends ParentController
{
    public function index()
    {
        return Inertia::render('Home/index');
    }
}
