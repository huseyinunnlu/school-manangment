<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\StudentController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('branch', [BranchController::class, 'get']);
Route::post('branch/create', [BranchController::class, 'create']);
Route::post('branch/{id}/edit', [BranchController::class, 'update']);
Route::get('branch/{id}', [BranchController::class, 'edit']);
Route::delete('branch/{id}/delete', [BranchController::class, 'delete']);
//Teachers
Route::get('branches', [BranchController::class, 'getActiveBranches']);
Route::get('teachers', [TeacherController::class, 'get']);
Route::get('teacher/{id}', [TeacherController::class, 'edit']);
Route::post('teacher/create', [TeacherController::class, 'create']);
Route::post('teacher/{id}/update', [TeacherController::class, 'update']);
Route::delete('teacher/{id}/delete', [TeacherController::class, 'delete']);
//Students
Route::get('students', [StudentController::class, 'get']);
Route::post('student/create', [StudentController::class, 'create']);
Route::delete('student/{id}/delete', [StudentController::class, 'delete']);
Route::get('student/{id}', [StudentController::class, 'edit']);
Route::post('student/{id}/update', [StudentController::class, 'update']);
