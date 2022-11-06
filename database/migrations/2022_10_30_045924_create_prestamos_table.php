<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrestamosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prestamos', function (Blueprint $table) {
            $table->integer('id_prestamo', true);
            $table->integer('id_solicitante');
            $table->date('fecha_entrega');
            $table->date('fecha_devolucion');
            $table->date('fecha_devuelto');
            $table->string('observaciones', 128);
            $table->string('estado', 64);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prestamos');
    }
}
