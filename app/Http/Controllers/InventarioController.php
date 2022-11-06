<?php

namespace App\Http\Controllers;

use App\Models\Inventario;
use Illuminate\Http\Request;

class InventarioController extends Controller
{
    public function index()
    {
        $inventario = new Inventario();
        $inventario_all = $inventario->all();

        return response()->json(['inventario' => $inventario_all], 200);
    }

    public function create(Request $request)
    {
        $id_libro = $request->input('id_libro');
        $cantidad = $request->input('cantidad');
        $cantidad_disponible = $cantidad;
        $minimo = $request->input('minimo');

        $inventario = new Inventario();

        $inventario->id_libro = $id_libro;
        $inventario->cantidad = $cantidad;
        $inventario->cantidad_disponible = $cantidad_disponible;
        $inventario->minimo = $minimo;

        $inventario->save();

        return response()->json(['id_inventario' => $inventario->id], 201);
    }

    public function getByLibro($libro)
    {
        $inventario_by_libro = Inventario::where('id_libro', '=', $libro)->first();

        if (isset($inventario_by_libro)) {
            return response()->json(['inventario' => $inventario_by_libro], 200);
        }

        return response()->json(['mensaje' => 'Libro no encontrado'], 404);
    }

    public function getById($id)
    {
    }

    public function edit(Request $request)
    {
    }

    public function remove($id)
    {
    }
}
