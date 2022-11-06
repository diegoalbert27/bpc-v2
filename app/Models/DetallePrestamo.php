<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetallePrestamo extends Model
{
    use HasFactory;

    protected $table = 'detalle_prestamos';

    protected $fillable = [
        'id_detalle_prestamo',
        'id_prestamo',
        'id_libro',
        'cantidad'
    ];

    public $timestamps = false;
}
