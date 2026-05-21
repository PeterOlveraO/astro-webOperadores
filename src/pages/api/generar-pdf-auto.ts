import type { APIRoute } from 'astro';
import { generarYSubirPDF } from '../../lib/generarPdfCotizacion';

function json(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { id_cotizacion, productos } = body;

    if (!id_cotizacion || !productos || !Array.isArray(productos)) {
      return json({ 
        success: false, 
        error: 'Faltan datos: id_cotizacion y productos son requeridos' 
      }, 400);
    }

    const formattedProducts = productos.map((p: any) => ({
      idproducto: p.id_producto || p.idproducto || '',
      nombre: p.nombre || p.nombre_articulo || 'Producto',
      cantidad: Number(p.cantidad) || 1,
      precio: Number(p.precio) || Number(p.precio_mayorista) || 0
    }));

    const pdfUrl = await generarYSubirPDF(id_cotizacion, formattedProducts);

    if (!pdfUrl) {
      return json({ 
        success: false, 
        error: 'Error al generar o subir el PDF' 
      }, 500);
    }

    return json({
      success: true,
      pdf_url: pdfUrl
    });

  } catch (error: any) {
    console.error('Error en generar-pdf-auto:', error);
    return json({ 
      success: false, 
      error: error.message || 'Error desconocido' 
    }, 500);
  }
};