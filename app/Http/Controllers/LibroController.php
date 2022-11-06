<?php

namespace App\Http\Controllers;

use App\Models\Libro;
use Illuminate\Http\Request;

class LibroController extends Controller
{
    public function index ()
    {
        $libro = new Libro();
        $libros = $libro->all();

        return response()->json(['libros' => $libros], 200);
    }

    public function getById($id)
    {

    }

    public function create(Request $request)
    {
        $cota = $request->input('cota');
        $titulo = $request->input('titulo');
        $autor = $request->input('autor');
        $id_categoria = $request->input('id_categoria');
        $id_estado_libro = $request->input('id_estado_libro');
        $sinopsis = $request->input('sinopsis');

        $libro = new Libro();

        $libro->cota = $cota;
        $libro->titulo = $titulo;
        $libro->autor = $autor;
        $libro->id_categoria = $id_categoria;
        $libro->id_estado_libro = $id_estado_libro;
        $libro->sinopsis = $sinopsis;

        $libro->save();

        return response()->json(['id_libro' => $libro->id], 201);
    }

    public function edit(Request $request)
    {

    }

    public function remove($id)
    {

    }
}
