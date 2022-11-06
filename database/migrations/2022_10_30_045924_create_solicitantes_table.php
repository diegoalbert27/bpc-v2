<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSolicitantesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('solicitantes', function (Blueprint $table) {
            $table->integer('id_solicitante', true);
            $table->integer('carnet');
            $table->integer('id_usuario');
            $table->integer('edad');
            $table->string('direccion', 128);
            $table->string('sexo', 64);
            $table->string('ocupacion', 64)->nullable();
            $table->string('nombre_institucion', 64)->nullable();
            $table->string('direccion_institucion', 64)->nullable();
            $table->string('telefono_institucion', 12)->nullable();
            $table->integer('enabled');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('solicitantes');
    }
}
