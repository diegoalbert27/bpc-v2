<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index ()
    {
        $role = new Role();
        $roles = $role->all();

        return response()->json(['roles' => $roles], 200);
    }

    public function getById($id)
    {

    }

    public function create(Request $request)
    {
        $nombre = $request->input('nombre');
        $enabled = 1;

        $role = new Role();
        $role->nombre = $nombre;
        $role->enabled = $enabled;

        $role->save();

        return response()->json(['id_role' => $role->id], 201);
    }

    public function edit(Request $request)
    {

    }

    public function remove($id)
    {

    }
}
