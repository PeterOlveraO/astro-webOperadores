// ─────────────────────────────────────────────────────────────────────────────
// PASO 1: Agrega este import al inicio del <script> de tu index.astro,
//         justo después de las otras declaraciones de variables globales
// ─────────────────────────────────────────────────────────────────────────────
import { generarYSubirPDF } from '../../lib/generarPdfCotizacion'


// ─────────────────────────────────────────────────────────────────────────────
// PASO 2: Agrega este botón HTML en el cart, DEBAJO del btn-finalize existente.
//         Búscalo dentro de <div id="cart-finalize-section"> y ponlo después:
// ─────────────────────────────────────────────────────────────────────────────

/*
<button id="btn-generar-pdf"
  class="w-full py-3 rounded-xl text-sm font-bold bg-primary10 text-primary
         hover:bg-primary20 transition-all active:scale-[0.98] flex items-center
         justify-center gap-2 hidden"
  style="display:none">
  <span class="material-symbols-outlined text-base">picture_as_pdf</span>
  Generar PDF Cotización
</button>
*/


// ─────────────────────────────────────────────────────────────────────────────
// PASO 3: Agrega esta función completa en tu <script>, ANTES del bloque
//         de "Inicialización" (document.addEventListener('DOMContentLoaded'))
// ─────────────────────────────────────────────────────────────────────────────

async function generarPDF() {
  // Necesitamos el id de la solicitud-cotizacion activa
  if (!currentSolicitudId) {
    alert('Primero genera la solicitud a mayoristas antes de generar el PDF.')
    return
  }
  if (cart.size === 0) {
    alert('El carrito está vacío.')
    return
  }

  const btn = document.getElementById('btn-generar-pdf') as HTMLButtonElement
  btn.disabled = true

  // Convertir el carrito (Map) al formato que espera generarYSubirPDF
  const productosCarrito = Array.from(cart.values()).map(item => ({
    idproducto: item.idproducto,
    nombre: item.nombre,
    cantidad: item.cantidad,
    precio: item.precio
  }))

  const pdfUrl = await generarYSubirPDF(
    currentSolicitudId,       // id de la cotización → id_cotizaciondwnlabs
    productosCarrito,
    (msg) => {
      btn.textContent = msg   // muestra el progreso en el botón
    }
  )

  if (pdfUrl) {
    // Mostrar botón para abrir el PDF
    btn.innerHTML = '<span class="material-symbols-outlined text-base">open_in_new</span> Ver PDF generado'
    btn.onclick = () => window.open(pdfUrl, '_blank')
    btn.disabled = false
  } else {
    btn.innerHTML = '<span class="material-symbols-outlined text-base">picture_as_pdf</span> Generar PDF Cotización'
    btn.disabled = false
  }
}


// ─────────────────────────────────────────────────────────────────────────────
// PASO 4: Dentro de finalizarCotizacion(), al final del try{} exitoso,
//         REEMPLAZA las últimas líneas del try (desde "btn.innerHTML = ...
//         Solicitudes generadas!") por esto:
// ─────────────────────────────────────────────────────────────────────────────

/*
    btn.innerHTML = `<span class="material-symbols-outlined text-base">check_circle</span> ¡Solicitudes generadas!`
    btn.disabled = false

    // ── NUEVO: mostrar el botón de generar PDF ──
    const btnPdf = document.getElementById('btn-generar-pdf') as HTMLButtonElement
    btnPdf.style.display = 'flex'
*/


// ─────────────────────────────────────────────────────────────────────────────
// PASO 5: Dentro del bloque de "Inicialización", agrega el listener del botón
//         PDF, justo DESPUÉS del listener de btn-finalize:
// ─────────────────────────────────────────────────────────────────────────────

/*
  document.getElementById('btn-generar-pdf')?.addEventListener('click', generarPDF)
*/
