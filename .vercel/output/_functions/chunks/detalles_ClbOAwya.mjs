import { c as createComponent } from './astro-component_BfP70hli.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_Di8hritT.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout__BO0mkrC.mjs';

const $$Detalles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Detalles;
  const API_URL = "http://localhost:5145";
  const operadorId = Astro2.cookies.get("id_operador")?.value ?? Astro2.cookies.get("operador_id")?.value;
  if (!operadorId || operadorId === "undefined" || operadorId === "null") {
    return Astro2.redirect("/");
  }
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
  const cotizacionesData = await safeFetch(`${API_URL}/api/cotizaciones?pageSize=200`);
  const allCotizaciones = cotizacionesData.data ?? [];
  const totalItems = allCotizaciones.length;
  const totalEstimado = allCotizaciones.reduce((sum, c) => sum + (c.precio_final_cliente || 0) + (c.costo_envio || 0), 0);
  function formatMoney(amount) {
    if (amount == null) return "$0.00";
    return "$" + amount.toLocaleString("en-US", { minimumFractionDigits: 2 });
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Detalles del Pedido · Operadores" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 md:p-10 max-w-4xl mx-auto"> <!-- Header --> <div class="mb-10"> <nav class="flex items-center gap-2 text-sm text-outline mb-4"> <a href="/dashboard/marketplace" class="hover:text-primary transition-colors">Marketplace</a> <span class="material-symbols-outlined text-xs">chevron_right</span> <a href="/dashboard/carrito" class="hover:text-primary transition-colors">Cotizaciones</a> <span class="material-symbols-outlined text-xs">chevron_right</span> <span class="text-primary font-medium">Detalles del Pedido</span> </nav> <h1 class="font-headline text-4xl font-extrabold text-on-surface tracking-tight">Detalles del Pedido</h1> <p class="text-on-surface-variant mt-2">Completa la información para enviar la solicitud de cotización al proveedor.</p> </div> <div class="space-y-6"> <!-- Order Summary Card --> <div class="bg-surface-container-low rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"> <div class="flex items-center gap-4"> <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"> <span class="material-symbols-outlined text-primary">shopping_cart</span> </div> <div> <p class="text-xs text-outline uppercase font-bold tracking-wider">Pedido en revisión</p> <p class="font-headline font-bold text-on-surface text-lg">${totalItems} cotización(es)</p> </div> </div> <div class="text-right"> <p class="text-xs text-outline uppercase font-bold tracking-wider">Total estimado</p> <p class="font-headline text-2xl font-extrabold text-primary">${formatMoney(totalEstimado)}</p> </div> </div> <!-- Client Details Form --> <div class="bg-surface-container-lowest rounded-2xl p-6 md:p-8 border border-outline-variant/15"> <h2 class="font-headline text-xl font-bold text-on-surface mb-6 flex items-center gap-2"> <span class="material-symbols-outlined text-primary">business</span>
Información de la Empresa
</h2> <form id="pedido-form" class="grid grid-cols-1 md:grid-cols-2 gap-5"> <div class="flex flex-col gap-2"> <label class="text-sm font-semibold text-on-surface-variant">Nombre de la empresa</label> <input type="text" name="nombre_empresa" placeholder="Ej. Distribuidora López S.A." class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm text-on-surface placeholder-outline focus:ring-2 focus:ring-primary/20 focus:outline-none" required> </div> <div class="flex flex-col gap-2"> <label class="text-sm font-semibold text-on-surface-variant">RFC / ID Fiscal</label> <input type="text" name="rfc" placeholder="Ej. XAXX010101000" class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm text-on-surface placeholder-outline focus:ring-2 focus:ring-primary/20 focus:outline-none"> </div> <div class="flex flex-col gap-2"> <label class="text-sm font-semibold text-on-surface-variant">Nombre del contacto</label> <input type="text" name="nombre_contacto" placeholder="Ej. Juan Pérez" class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm text-on-surface placeholder-outline focus:ring-2 focus:ring-primary/20 focus:outline-none" required> </div> <div class="flex flex-col gap-2"> <label class="text-sm font-semibold text-on-surface-variant">Teléfono</label> <input type="tel" name="telefono" placeholder="Ej. +52 55 1234 5678" class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm text-on-surface placeholder-outline focus:ring-2 focus:ring-primary/20 focus:outline-none"> </div> <div class="flex flex-col gap-2 md:col-span-2"> <label class="text-sm font-semibold text-on-surface-variant">Correo electrónico</label> <input type="email" name="correo" placeholder="contacto@empresa.com" class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm text-on-surface placeholder-outline focus:ring-2 focus:ring-primary/20 focus:outline-none"> </div> <div class="flex flex-col gap-2 md:col-span-2"> <label class="text-sm font-semibold text-on-surface-variant">Notas adicionales <span class="text-outline font-normal">(opcional)</span></label> <textarea rows="3" name="notas" placeholder="Instrucciones especiales, referencias, etc." class="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm text-on-surface placeholder-outline focus:ring-2 focus:ring-primary/20 focus:outline-none resize-none"></textarea> </div> </form> </div> <!-- Actions --> <div class="flex flex-col md:flex-row gap-4 items-center justify-between pt-2"> <a href="/dashboard/carrito" class="flex items-center gap-2 text-sm font-semibold text-outline hover:text-on-surface transition-colors"> <span class="material-symbols-outlined text-sm">arrow_back</span>
Volver a cotizaciones
</a> <button type="submit" form="pedido-form" class="px-10 py-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-extrabold text-base shadow-lg shadow-primary/20 flex items-center gap-3 group hover:opacity-95 transition-opacity" onclick="alert('Función de envío pendiente de Backend en C')"> <span class="material-symbols-outlined">send</span>
Enviar Solicitud al Proveedor
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span> </button> </div> </div> </div> ` })}`;
}, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/carrito/detalles.astro", void 0);
const $$file = "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/carrito/detalles.astro";
const $$url = "/dashboard/carrito/detalles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Detalles,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
