import { c as createComponent } from './astro-component_BfP70hli.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_Di8hritT.mjs';
import { r as renderScript } from './script_C4eAVIqH.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout__BO0mkrC.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const API_URL = "http://localhost:5145";
  async function safeFetch(url) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      if (!res.ok || !text || text.trim() === "") return { success: false, data: null };
      return JSON.parse(text);
    } catch (e) {
      return { success: false, data: null };
    }
  }
  const cotizacionesData = await safeFetch(`${API_URL}/api/cotizaciones?pageSize=500`);
  console.log("cotizaciones:", cotizacionesData);
  const allCotizaciones = cotizacionesData.data ?? [];
  const enrichedCotizaciones = allCotizaciones.map((cot) => {
    const totalPrice = cot.precio_final_cliente || 0;
    const costoEnvio = cot.costo_envio || 0;
    return {
      ...cot,
      _id: cot.id_cotizaciondwnlabs || cot.id_cotizacion,
      _totalPrice: totalPrice,
      _costoEnvio: costoEnvio
    };
  });
  const grandTotal = enrichedCotizaciones.reduce((s, c) => s + (c._totalPrice || 0), 0);
  function formatMoney(n) {
    return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2 });
  }
  function formatDate(d) {
    if (!d) return "—";
    return new Date(d).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" });
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Carrito · Operadores", "data-astro-cid-tw4gjgbw": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6 md:p-8 max-w-6xl mx-auto" data-astro-cid-tw4gjgbw> <!-- Header --> <div class="mb-8" data-astro-cid-tw4gjgbw> <nav class="flex items-center gap-2 text-sm text-outline mb-3" data-astro-cid-tw4gjgbw> <a href="/dashboard" class="hover:text-primary transition-colors" data-astro-cid-tw4gjgbw>Dashboard</a> <span class="material-symbols-outlined text-xs" data-astro-cid-tw4gjgbw>chevron_right</span> <span class="text-primary font-medium" data-astro-cid-tw4gjgbw>Cotizaciones DownLabs</span> </nav> <div class="flex items-end justify-between gap-4" data-astro-cid-tw4gjgbw> <div data-astro-cid-tw4gjgbw> <h1 class="font-headline text-3xl font-extrabold text-on-surface tracking-tight" data-astro-cid-tw4gjgbw>Cotizaciones DownLabs</h1> <p class="text-on-surface-variant mt-1" data-astro-cid-tw4gjgbw>${enrichedCotizaciones.length} cotización(es) · Total: ${formatMoney(grandTotal)}</p> </div> </div> </div> <!-- Stats --> <div class="grid grid-cols-2 gap-4 mb-8" data-astro-cid-tw4gjgbw> <div class="bg-surface-container-lowest rounded-xl p-5 flex items-center gap-4" data-astro-cid-tw4gjgbw> <div class="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center" data-astro-cid-tw4gjgbw> <span class="material-symbols-outlined text-secondary" data-astro-cid-tw4gjgbw>description</span> </div> <div data-astro-cid-tw4gjgbw> <p class="text-[10px] text-outline font-bold uppercase tracking-widest" data-astro-cid-tw4gjgbw>Total Cotizaciones</p> <p class="font-headline text-2xl font-extrabold text-on-surface" data-astro-cid-tw4gjgbw>${enrichedCotizaciones.length}</p> </div> </div> <div class="bg-surface-container-lowest rounded-xl p-5 flex items-center gap-4" data-astro-cid-tw4gjgbw> <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center" data-astro-cid-tw4gjgbw> <span class="material-symbols-outlined text-primary" data-astro-cid-tw4gjgbw>payments</span> </div> <div data-astro-cid-tw4gjgbw> <p class="text-[10px] text-outline font-bold uppercase tracking-widest" data-astro-cid-tw4gjgbw>Valor Total</p> <p class="font-headline text-2xl font-extrabold text-primary" data-astro-cid-tw4gjgbw>${formatMoney(grandTotal)}</p> </div> </div> </div> ${enrichedCotizaciones.length === 0 ? renderTemplate`<div class="bg-surface-container-lowest rounded-xl px-6 py-16 text-center" data-astro-cid-tw4gjgbw> <span class="material-symbols-outlined text-6xl block mb-4 text-outline/15" data-astro-cid-tw4gjgbw>receipt_long</span> <p class="text-lg font-semibold text-on-surface" data-astro-cid-tw4gjgbw>No hay cotizaciones DownLabs</p> <p class="text-sm text-outline mt-1" data-astro-cid-tw4gjgbw>Las cotizaciones generadas aparecerán aquí.</p> </div>` : renderTemplate`<div class="space-y-4" data-astro-cid-tw4gjgbw> ${enrichedCotizaciones.map((cot) => renderTemplate`<div class="cotizacion-card cursor-pointer bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/10 hover:border-primary/30 transition-all"${addAttribute(JSON.stringify(cot), "data-cot")} data-astro-cid-tw4gjgbw> <div class="flex items-start justify-between gap-4 mb-3" data-astro-cid-tw4gjgbw> <div data-astro-cid-tw4gjgbw> <p class="font-bold text-on-surface" data-astro-cid-tw4gjgbw>Cotización DownLabs</p> <p class="text-xs font-mono text-outline" data-astro-cid-tw4gjgbw>ID: ${String(cot._id || "").slice(0, 8)}</p> ${cot.id_solicitud && renderTemplate`<p class="text-xs text-outline" data-astro-cid-tw4gjgbw>Solicitud: ${String(cot.id_solicitud).slice(0, 8)}</p>`} </div> <span class="px-3 py-1.5 rounded-full text-xs font-bold bg-secondary/10 text-secondary" data-astro-cid-tw4gjgbw> ${cot.estado || "Sin estado"} </span> </div> <div class="flex gap-6 text-sm" data-astro-cid-tw4gjgbw> <span class="text-outline" data-astro-cid-tw4gjgbw>Fecha: ${formatDate(cot.created_at)}</span> <span data-astro-cid-tw4gjgbw>Costo envío: ${formatMoney(cot._costoEnvio)}</span> <span class="text-primary font-bold" data-astro-cid-tw4gjgbw>Total cliente: ${formatMoney(cot._totalPrice)}</span> </div> </div>`)} </div>`} </div>  <dialog id="modal-detalle" class="modal" data-astro-cid-tw4gjgbw> <div class="modal-content" data-astro-cid-tw4gjgbw> <div class="modal-header" data-astro-cid-tw4gjgbw> <div class="modal-title-group" data-astro-cid-tw4gjgbw> <div class="modal-icon" data-astro-cid-tw4gjgbw> <span class="material-symbols-outlined text-2xl" data-astro-cid-tw4gjgbw>description</span> </div> <div data-astro-cid-tw4gjgbw> <h3 class="font-headline text-lg font-bold" data-astro-cid-tw4gjgbw>Detalle de Cotización</h3> </div> </div> <button id="btn-cerrar-modal" class="modal-close" data-astro-cid-tw4gjgbw> <span class="material-symbols-outlined" data-astro-cid-tw4gjgbw>close</span> </button> </div> <div class="modal-body" data-astro-cid-tw4gjgbw> <div id="modal-contenido" class="space-y-4" data-astro-cid-tw4gjgbw> <!-- Se llena dinámicamente --> </div> </div> </div> </dialog>  ${renderScript($$result2, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/carrito/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/carrito/index.astro", void 0);
const $$file = "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/carrito/index.astro";
const $$url = "/dashboard/carrito";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
