<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuario = new Usuario();
        $usuarios = $usuario->all();

        return response()->json(['usuarios' => $usuarios]);
    }

    public function getById($id)
    {

    }

    public function create(Request $request)
    {
        $nombre = $request->input('nombre');
        $apellido = $request->input('apellido');
        $cedula = $request->input('cedula');
        $id_role = $request->input('id_role');
        $nickname = $request->input('nickname');
        $email = $request->input('email');
        $clave = $request->input('clave');
        $telefono = $request->input('telefono');
        $enabled = 1;

        $usuario = new Usuario();

        $usuario->nombre = $nombre;
        $usuario->apellido = $apellido;
        $usuario->cedula = $cedula;
        $usuario->id_role = $id_role;
        $usuario->nickname = $nickname;
        $usuario->email = $email;
        $usuario->clave = Hash::make($clave);
        $usuario->telefono = $telefono;
        $usuario->enabled = $enabled;

        $usuario->save();

        return response()->json(['id_usuario' => $usuario->id]);
    }

    public function edit(Request $request)
    {

    }

    public function remove($id)
    {

    }
}
