<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prestamo extends Model
{
    use HasFactory;

    protected $table = 'prestamos';

    protected $fillable = [
        'id_prestamo',
        'id_solicitante',
        'fecha_entrega',
        'fecha_devolucion',
        'fecha_devuelto',
        'observaciones',
        'id_pendiente_prestamo'
    ];

    public $timestamps = false;
}
