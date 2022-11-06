<?php

namespace App\Http\Controllers;

use App\Models\EstadoLibro;
use Illuminate\Http\Request;

class EstadoLibroController extends Controller
{
    public function index ()
    {
        $estado_libro = new EstadoLibro();
        $estados_libros = $estado_libro->all();

        return response()->json(['estados_libros' => $estados_libros], 200);
    }

    public function getById($id)
    {

    }

    public function create(Request $request)
    {
        $nombre = $request->input('nombre');

        $estado_libro = new EstadoLibro();

        $estado_libro->nombre = $nombre;

        $estado_libro->save();

        return response()->json(['id_estado_libro' => $estado_libro->id], 201);
    }

    public function edit(Request $request)
    {

    }

    public function remove($id)
    {

    }
}
