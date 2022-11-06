<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->integer('id_usuario', true);
            $table->string('nombre', 64);
            $table->string('apellido', 64);
            $table->string('cedula', 64);
            $table->integer('id_role');
            $table->string('nickname', 11);
            $table->string('email', 64);
            $table->text('clave');
            $table->string('telefono', 12);
            $table->integer('enabled');
            $table->dateTime('fecha_creado')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}
