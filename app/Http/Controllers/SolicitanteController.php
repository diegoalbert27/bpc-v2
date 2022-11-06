<?php

namespace App\Http\Controllers;

use App\Models\Solicitante;
use App\Models\Usuario;
use Illuminate\Http\Request;

class SolicitanteController extends Controller
{
    public function index()
    {
        $solicitante = new Solicitante();
        $solicitantes = $solicitante->all();

        foreach($solicitantes as $row) {
            $row->id_usuario = Usuario::where('id_usuario', '=', $row->id_usuario)->first();
            unset($row->id_usuario->clave);
        }

        return response()->json(['solicitantes' => $solicitantes], 200);
    }

    public function create(Request $request)
    {
        $carnet = $request->input('carnet');
        $id_usuario = $request->input('id_usuario');
        $edad = $request->input('edad');
        $direccion = $request->input('direccion');
        $sexo = $request->input('sexo');
        $ocupacion = $request->input('ocupacion');
        $nombre_institucion = $request->input('nombre_institucion');
        $direccion_institucion = $request->input('direccion_institucion');
        $telefono_institucion = $request->input('telefono_institucion');
        $enabled = 1;

        $solicitante = new Solicitante();

        $solicitante->carnet = $carnet;
        $solicitante->id_usuario = $id_usuario;
        $solicitante->edad = $edad;
        $solicitante->direccion = $direccion;
        $solicitante->sexo = $sexo;
        $solicitante->ocupacion = $ocupacion;
        $solicitante->nombre_institucion = $nombre_institucion;
        $solicitante->direccion_institucion = $direccion_institucion;
        $solicitante->telefono_institucion = $telefono_institucion;
        $solicitante->enabled = $enabled;

        $solicitante->save();

        return response()->json(['id_solicitante' => $solicitante->id], 201);
    }
}
