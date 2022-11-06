<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index ()
    {
        $categoria = new Categoria();
        $categorias = $categoria->all();

        return response()->json(['categorias' => $categorias], 200);
    }

    public function getById($id)
    {

    }

    public function create(Request $request)
    {
        $nombre = $request->input('nombre');
        $piso = $request->input('piso');

        $categoria = new Categoria();

        $categoria->nombre = $nombre;
        $categoria->piso = $piso;

        $categoria->save();

        return response()->json(['id_categoria' => $categoria->id], 201);
    }

    public function edit(Request $request)
    {

    }

    public function remove($id)
    {

    }
}
