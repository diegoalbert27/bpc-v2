<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $table = 'usuarios';

    protected $fillable = [
        'id_usuario',
        'nombre',
        'apellido',
        'cedula',
        'id_role',
        'nickname',
        'email',
        'clave',
        'telefono',
        'enabled',
        'fecha_creado'
    ];

    public $timestamps = false;
}
