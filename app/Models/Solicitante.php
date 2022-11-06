<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solicitante extends Model
{
    use HasFactory;

    protected $table = 'solicitantes';

    protected $fillable = [
        'id_solicitante',
        'carnet',
        'id_usuario',
        'edad',
        'direccion',
        'sexo',
        'ocupacion',
        'nombre_institucion',
        'direccion_institucion',
        'telefono_institucion',
        'enabled'
    ];

    public $timestamps = false;
}
