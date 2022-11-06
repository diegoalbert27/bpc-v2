<?php

namespace App\Http\Controllers;

use App\Models\DetallePrestamo;
use App\Models\Inventario;
use App\Models\Libro;
use App\Models\Prestamo;
use App\Models\Solicitante;
use Illuminate\Http\Request;

class PrestamoController extends Controller
{
    public function create(Request $request)
    {
        $detalle_prestamo = new DetallePrestamo();
        $prestamo = new Prestamo();

        $id_solicitante = $request->input('id_solicitante');
        $fecha_entrega = date('Y-m-d');
        $fecha_devolucion = $request->input('fecha_devolucion');
        $observaciones = $request->input('observaciones') ?? '';

        $estado = "Pendiente";

        $libros = $request->input('libros');

        $solicitante = Solicitante::where('id_solicitante', '=', $id_solicitante)->first();

        if (is_null($solicitante)) {
            return response()->json(['mensaje' => 'solicitante no existe'], 404);
        }

        if (!is_array($libros)) {
            return response()->json(['mensaje' => 'Libros debe ser una lista'], 400);
        }

        $invetario_de_libros = [];

        foreach ($libros as $libro) {
            $libro_finded = Libro::where('id_libro', '=', $libro['id_libro'])->first();

            if (is_null($libro_finded)) {
                return response()->json(['mensaje' => 'Libro no existe'], 404);
            }

            $libro_inventario = Inventario::where('id_libro', '=', $libro_finded->id_libro)->first();

            if ($libro_inventario->cantidad_disponible <= $libro_inventario->minimo) {
                return response()->json(['mensaje' => "{$libro_finded->titulo} ha llegado a su minimo de existencia"], 400);
            }

            $invetario_de_libros[$libro_finded->id_libro] = $libro_inventario;
        }

        $prestamo->id_solicitante = $solicitante->id_solicitante;
        $prestamo->fecha_entrega = $fecha_entrega;
        $prestamo->fecha_devolucion = $fecha_devolucion;
        $prestamo->observaciones = $observaciones;
        $prestamo->estado = $estado;

        $prestamo->save();

        foreach ($libros as $libro) {
            $detalle_prestamo->id_prestamo = $prestamo->id;
            $detalle_prestamo->id_libro = $libro['id_libro'];
            $detalle_prestamo->cantidad = 1;

            $detalle_prestamo->save();

            $new_cantidad_disponible = $invetario_de_libros[$libro['id_libro']]->cantidad_disponible - $detalle_prestamo->cantidad;

            Inventario::where('id_libro', '=', $libro['id_libro'])
                ->update(['cantidad_disponible' => $new_cantidad_disponible]);
        }

        return response()->json(['id_prestamo' => $prestamo->id], 201);
    }

    public function devolucion($id_prestamo)
    {
        $estado = 'Devuelto';

        $prestamo = Prestamo::where('id_prestamo', '=', $id_prestamo)
            ->where('estado', '=', 'Pendiente')->first();

        if (is_null($prestamo)) {
            return response()->json(['mensaje' => 'Prestamo no existe'], 404);
        }

        Prestamo::where('id_prestamo', '=', $prestamo->id_prestamo)
            ->update([
                'fecha_devuelto' => date('Y-m-d'),
                'estado' => $estado
            ]);

        $detalles_prestamo = DetallePrestamo::where('id_prestamo', '=', $prestamo->id_prestamo)->get();

        foreach ($detalles_prestamo as $detalle) {
            $libro_inventario = Inventario::where('id_libro', '=', $detalle->id_libro)->first();

            Inventario::where('id_libro', '=', $libro_inventario->id_libro)
                ->update(['cantidad_disponible' => $libro_inventario->cantidad_disponible + $detalle->cantidad]);
        }

        return response()->json([], 204);
    }
}
