<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Libro extends Model
{
    use HasFactory;

    protected $table = 'libros';

    protected $fillable = [
        'id_libro',
        'cota',
        'titulo',
        'autor',
        'id_categoria',
        'id_estado_libro',
        'sinopsis'
    ];

    public $timestamps = false;
}
