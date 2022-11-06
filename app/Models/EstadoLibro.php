<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstadoLibro extends Model
{
    use HasFactory;

    protected $table = 'estados_libros';

    protected $fillable = [
        'id_estado_libro',
        'nombre'
    ];

    public $timestamps = false;
}
