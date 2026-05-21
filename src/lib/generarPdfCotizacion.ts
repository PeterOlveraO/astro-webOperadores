import jsPDF from 'jspdf';
import { createClient } from '@supabase/supabase-js';

interface ProductoCarrito {
  idproducto: string;
  nombre: string;
  cantidad: number;
  precio: number;
}

function getSupabaseClient() {
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://gsxzuzkibrdzkmlhnykv.supabase.co';
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';
  return createClient(supabaseUrl, supabaseKey);
}

export async function generarYSubirPDF(
  idCotizacion: string,
  productos: ProductoCarrito[],
  onProgress?: (msg: string) => void
): Promise<string | null> {
  const log = (msg: string) => {
    console.log('[PDF]', msg);
    if (onProgress) onProgress(msg);
  };

  try {
    log('Generando diseño del PDF...');

    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const W = 210;
    const margin = 20;
    let y = margin;

    const colorPrimario: [number, number, number] = [1, 105, 111];
    const grisOscuro: [number, number, number] = [60, 60, 60];

    doc.setFillColor(...colorPrimario);
    doc.rect(0, 0, W, 30, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255);
    doc.text('DownLabs', margin, 20);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`COTIZACIÓN B2B`, W - margin, 15, { align: 'right' });
    doc.text(`ID: ${idCotizacion.slice(0, 8).toUpperCase()}`, W - margin, 22, { align: 'right' });

    y = 50;

    doc.setFontSize(14);
    doc.setTextColor(...colorPrimario);
    doc.setFont('helvetica', 'bold');
    doc.text('Detalle de Productos', margin, y);
    y += 10;

    doc.setFillColor(240, 240, 240);
    doc.rect(margin, y - 5, W - margin * 2, 8, 'F');
    doc.setFontSize(10);
    doc.setTextColor(...grisOscuro);
    doc.text('Producto', margin + 2, y);
    doc.text('Cant.', W - margin - 60, y);
    doc.text('Precio U.', W - margin - 40, y);
    doc.text('Subtotal', W - margin - 5, y, { align: 'right' });

    y += 10;

    let total = 0;
    doc.setFont('helvetica', 'normal');

    productos.forEach((item) => {
      const subtotal = item.precio * item.cantidad;
      total += subtotal;

      const nombreTrunc = item.nombre.length > 40 ? item.nombre.slice(0, 37) + '...' : item.nombre;

      doc.text(nombreTrunc, margin + 2, y);
      doc.text(String(item.cantidad), W - margin - 60, y);
      doc.text(`$${item.precio.toFixed(2)}`, W - margin - 40, y);
      doc.text(`$${subtotal.toFixed(2)}`, W - margin - 5, y, { align: 'right' });

      y += 8;
    });

    y += 10;
    doc.setDrawColor(...colorPrimario);
    doc.line(margin, y, W - margin, y);
    y += 10;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('TOTAL:', W - margin - 40, y);
    doc.setTextColor(...colorPrimario);
    doc.text(`$${total.toFixed(2)}`, W - margin - 5, y, { align: 'right' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Generado automáticamente el ${new Date().toLocaleDateString('es-MX')}`, W / 2, 280, { align: 'center' });

    const pdfBlob = doc.output('blob');
    const fileName = `cotizacion-${idCotizacion}-${Date.now()}.pdf`;

    log('Subiendo a Supabase Storage...');

    const supabase = getSupabaseClient();

    const { error: uploadError } = await supabase.storage
      .from('cotizaciones-pdf')
      .upload(fileName, pdfBlob, {
        contentType: 'application/pdf',
        upsert: true
      });

    if (uploadError) throw new Error('Error al subir el PDF: ' + uploadError.message);

    log('Obteniendo URL...');
    const { data: urlData } = supabase.storage
      .from('cotizaciones-pdf')
      .getPublicUrl(fileName);

    const pdfUrl = urlData.publicUrl;

    log('Actualizando base de datos...');
    const { error: dbError } = await supabase
      .from('cotizaciones_downlabs')
      .update({ pdf_cotizacion_url: pdfUrl })
      .eq('id_cotizaciondwnlabs', idCotizacion);

    if (dbError) throw new Error('Error al guardar en DB: ' + dbError.message);

    log('¡PDF Listo!');
    return pdfUrl;

  } catch (error: any) {
    console.error('[PDF Error]', error);
    if (onProgress) onProgress('Error: ' + error.message);
    return null;
  }
}