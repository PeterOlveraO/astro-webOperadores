import jsPDF from 'jspdf';
import { createClient } from '@supabase/supabase-js';

function getSupabaseClient() {
  const supabaseUrl = "https://gsxzuzkibrdzkmlhnykv.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdzenh1emtpYnJkem1rbGhueWt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NDA5NTgsImV4cCI6MjA4ODIxNjk1OH0.9IeQR8XEdwKXPvVlxXL5kuAd1_MWXTLBNkoK9HLpegs";
  return createClient(supabaseUrl, supabaseKey);
}
async function generarYSubirPDF(idCotizacion, productos, onProgress) {
  const log = (msg) => {
    console.log("[PDF]", msg);
  };
  try {
    log("Generando diseño del PDF...");
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const W = 210;
    const margin = 20;
    let y = margin;
    const colorPrimario = [1, 105, 111];
    const grisOscuro = [60, 60, 60];
    doc.setFillColor(...colorPrimario);
    doc.rect(0, 0, W, 30, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255);
    doc.text("DownLabs", margin, 20);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`COTIZACIÓN B2B`, W - margin, 15, { align: "right" });
    doc.text(`ID: ${idCotizacion.slice(0, 8).toUpperCase()}`, W - margin, 22, { align: "right" });
    y = 50;
    doc.setFontSize(14);
    doc.setTextColor(...colorPrimario);
    doc.setFont("helvetica", "bold");
    doc.text("Detalle de Productos", margin, y);
    y += 10;
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, y - 5, W - margin * 2, 8, "F");
    doc.setFontSize(10);
    doc.setTextColor(...grisOscuro);
    doc.text("Producto", margin + 2, y);
    doc.text("Cant.", W - margin - 60, y);
    doc.text("Precio U.", W - margin - 40, y);
    doc.text("Subtotal", W - margin - 5, y, { align: "right" });
    y += 10;
    let total = 0;
    doc.setFont("helvetica", "normal");
    productos.forEach((item) => {
      const subtotal = item.precio * item.cantidad;
      total += subtotal;
      const nombreTrunc = item.nombre.length > 40 ? item.nombre.slice(0, 37) + "..." : item.nombre;
      doc.text(nombreTrunc, margin + 2, y);
      doc.text(String(item.cantidad), W - margin - 60, y);
      doc.text(`$${item.precio.toFixed(2)}`, W - margin - 40, y);
      doc.text(`$${subtotal.toFixed(2)}`, W - margin - 5, y, { align: "right" });
      y += 8;
    });
    y += 10;
    doc.setDrawColor(...colorPrimario);
    doc.line(margin, y, W - margin, y);
    y += 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("TOTAL:", W - margin - 40, y);
    doc.setTextColor(...colorPrimario);
    doc.text(`$${total.toFixed(2)}`, W - margin - 5, y, { align: "right" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Generado automáticamente el ${(/* @__PURE__ */ new Date()).toLocaleDateString("es-MX")}`, W / 2, 280, { align: "center" });
    const pdfBlob = doc.output("blob");
    const fileName = `cotizacion-${idCotizacion}-${Date.now()}.pdf`;
    log("Subiendo a Supabase Storage...");
    const supabase = getSupabaseClient();
    const { error: uploadError } = await supabase.storage.from("cotizaciones-pdf").upload(fileName, pdfBlob, {
      contentType: "application/pdf",
      upsert: true
    });
    if (uploadError) throw new Error("Error al subir el PDF: " + uploadError.message);
    log("Obteniendo URL...");
    const { data: urlData } = supabase.storage.from("cotizaciones-pdf").getPublicUrl(fileName);
    const pdfUrl = urlData.publicUrl;
    log("Actualizando base de datos...");
    const { error: dbError } = await supabase.from("cotizaciones_downlabs").update({ pdf_cotizacion_url: pdfUrl }).eq("id_cotizaciondwnlabs", idCotizacion);
    if (dbError) throw new Error("Error al guardar en DB: " + dbError.message);
    log("¡PDF Listo!");
    return pdfUrl;
  } catch (error) {
    console.error("[PDF Error]", error);
    return null;
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { id_cotizacion, productos } = body;
    if (!id_cotizacion || !productos || !Array.isArray(productos)) {
      return json({
        success: false,
        error: "Faltan datos: id_cotizacion y productos son requeridos"
      }, 400);
    }
    const formattedProducts = productos.map((p) => ({
      idproducto: p.id_producto || p.idproducto || "",
      nombre: p.nombre || p.nombre_articulo || "Producto",
      cantidad: Number(p.cantidad) || 1,
      precio: Number(p.precio) || Number(p.precio_mayorista) || 0
    }));
    const pdfUrl = await generarYSubirPDF(id_cotizacion, formattedProducts);
    if (!pdfUrl) {
      return json({
        success: false,
        error: "Error al generar o subir el PDF"
      }, 500);
    }
    return json({
      success: true,
      pdf_url: pdfUrl
    });
  } catch (error) {
    console.error("Error en generar-pdf-auto:", error);
    return json({
      success: false,
      error: error.message || "Error desconocido"
    }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
