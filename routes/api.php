<?php

use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\InventarioController;
use App\Http\Controllers\LibroController;
use App\Http\Controllers\PrestamoController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SolicitanteController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function() {
    return response()->json(['mensaje' => 'api bpc_v2 trabajando']);
});

// Ruta Categoria
Route::get('/categorias', [CategoriaController::class, 'index']);
Route::post('/categorias', [CategoriaController::class, 'create']);

// Ruta Roles
Route::get('/roles', [RoleController::class, 'index']);
Route::post('/roles', [RoleController::class, 'create']);

// Ruta Usuarios
Route::get('/usuarios', [UsuarioController::class, 'index']);
Route::post('/usuarios', [UsuarioController::class, 'create']);

// Ruta Libros
Route::get('/libros', [LibroController::class, 'index']);
Route::post('/libros', [LibroController::class, 'create']);

// Ruta Inventario
Route::get('/inventario/{libro}', [InventarioController::class, 'getByLibro']);
Route::post('/inventario', [InventarioController::class, 'create']);

// Ruta Solicitante
Route::get('/solicitantes', [SolicitanteController::class, 'index']);
Route::post('/solicitantes', [SolicitanteController::class, 'create']);

// Ruta de Procesos
Route::post('/prestamo', [PrestamoController::class, 'create']);
Route::get('/devolucion/{id_prestamo}', [PrestamoController::class, 'devolucion']);

