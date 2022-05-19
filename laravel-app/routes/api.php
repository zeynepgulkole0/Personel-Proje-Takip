<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProjectController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('employee')->group(function () {
    Route::get('/index', [EmployeeController::class, 'index']);
    Route::get('/listnext/{id}', [EmployeeController::class, 'list']);
    Route::post('/add', [EmployeeController::class, 'store']);
    Route::get('/{id}', [EmployeeController::class, 'show']);
    Route::post('/update/{id}', [EmployeeController::class, 'update']);
    Route::delete('/delete/{id}', [EmployeeController::class, 'destroy']);
});

Route::prefix('project')->group(function () {
    Route::get('/index', [ProjectController::class, 'index']);
    Route::get('/list/{id}', [ProjectController::class, 'list']);
    Route::post('/add', [ProjectController::class, 'store']);
    Route::get('/{id}', [ProjectController::class, 'show']);
    Route::post('/update/{id}', [ProjectController::class, 'update']);
    Route::delete('/delete/{id}', [ProjectController::class, 'destroy']);
});
