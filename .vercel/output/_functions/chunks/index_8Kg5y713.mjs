import { c as createComponent } from './astro-component_BfP70hli.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_Di8hritT.mjs';
import { r as renderScript } from './script_C4eAVIqH.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout__BO0mkrC.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const API_URL = "http://localhost:5145";
  const operadorId = Astro2.cookies.get("id_operador")?.value;
  if (!operadorId || operadorId === "undefined" || operadorId === "null") {
    return Astro2.redirect("/");
  }
  async function safeFetch(url) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      if (!res.ok || !text || text.trim() === "")
        return { success: false, data: null };
      return JSON.parse(text);
    } catch (e) {
      return { success: false, data: null };
    }
  }
  const pedidosData = await safeFetch(
    `${API_URL}/api/solicitudes-cotizacion?id_operador=${operadorId}&pageSize=200`
  );
  const allPedidos = pedidosData.data ?? [];
  const productosData = await safeFetch(
    `${API_URL}/api/catalogo-productos?pageSize=1000&fields=id_producto,nombre_articulo`
  );
  const productosMap = new Map(
    (productosData.data || []).map((prod) => [
      prod.id_producto,
      prod.nombre_articulo
    ])
  );
  const mayoristasData = await safeFetch(
    `${API_URL}/api/mayoristas?pageSize=500&fields=id_mayorista,nombre_empresa`
  );
  const mayoristasMap = new Map(
    (mayoristasData.data || []).map((m) => [
      m.id_mayorista,
      m.nombre_empresa
    ])
  );
  const solicitudesMayoristasData = await safeFetch(
    `${API_URL}/api/solicitudes-mayorista?pageSize=500`
  );
  const solicitudesMayoristas = solicitudesMayoristasData.data ?? [];
  function getProductoNombre(productos) {
    if (!productos || !Array.isArray(productos) || productos.length === 0)
      return "—";
    const items = productos.map((prod) => {
      const prodId = prod.id ?? prod.id_producto ?? prod.codigo ?? prod;
      const cantidad = prod.cantidad ?? prod.cant ?? 1;
      const nombre = productosMap.get(prodId);
      return nombre ? `${nombre} x${cantidad}` : `ID: ${prodId} x${cantidad}`;
    });
    return items.length > 1 ? `${items[0]} (+${items.length - 1})` : items[0];
  }
  const total = allPedidos.length;
  const pendientesPago = allPedidos.filter(
    (p) => p.estado_solicitud?.toLowerCase() === "pendiente"
  ).length;
  allPedidos.filter(
    (p) => p.estado_solicitud?.toLowerCase() === "completada"
  ).length;
  const enProceso = allPedidos.filter(
    (p) => p.estado_solicitud?.toLowerCase() === "en_proceso"
  ).length;
  const aceptadas = allPedidos.filter(
    (p) => p.estado_solicitud?.toLowerCase() === "aceptada"
  ).length;
  const rechazadas = allPedidos.filter(
    (p) => p.estado_solicitud?.toLowerCase() === "rechazada"
  ).length;
  const reasignar = allPedidos.filter(
    (p) => p.estado_solicitud?.toLowerCase() === "requiere_reasignacion"
  ).length;
  const stats = [
    {
      label: "Pendientes",
      value: pendientesPago,
      icon: "pending",
      iconColor: "text-error",
      bg: "bg-error/5",
      filter: "pendiente"
    },
    {
      label: "En Proceso",
      value: enProceso,
      icon: "autorenew",
      iconColor: "text-secondary",
      bg: "bg-secondary/5",
      filter: "en_proceso"
    },
    {
      label: "Aceptadas",
      value: aceptadas,
      icon: "verified",
      iconColor: "text-tertiary",
      bg: "bg-tertiary/5",
      filter: "aceptada"
    },
    {
      label: "Rechazadas",
      value: rechazadas,
      icon: "cancel",
      iconColor: "text-error",
      bg: "bg-error/5",
      filter: "rechazada"
    },
    {
      label: "Reasignar",
      value: reasignar,
      icon: "swap_horiz",
      iconColor: "text-orange-600",
      bg: "bg-orange-100",
      filter: "requiere_reasignacion"
    }
  ];
  function getStatusStyle(status) {
    switch (status?.toLowerCase()) {
      case "pendiente":
        return { class: "bg-amber-100 text-amber-700", icon: "schedule" };
      case "en_proceso":
        return { class: "bg-blue-100 text-blue-700", icon: "autorenew" };
      case "aceptada":
        return { class: "bg-emerald-100 text-emerald-700", icon: "verified" };
      case "completada":
      case "completado":
        return { class: "bg-emerald-100 text-emerald-700", icon: "check_circle" };
      case "rechazada":
        return { class: "bg-red-100 text-red-700", icon: "cancel" };
      case "requiere_reasignacion":
        return { class: "bg-orange-100 text-orange-700", icon: "swap_horiz" };
      default:
        return { class: "bg-surface-container-highest text-on-surface-variant", icon: "help" };
    }
  }
  function formatDate(dateStr) {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("es-MX", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Mis Pedidos", "data-astro-cid-n2qaatxo": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="productos-map" class="hidden"${addAttribute(JSON.stringify(Array.from(productosMap.entries())), "data-productos")} data-astro-cid-n2qaatxo></div> <div id="mayoristas-map" class="hidden"${addAttribute(JSON.stringify(Array.from(mayoristasMap.entries())), "data-mayoristas")} data-astro-cid-n2qaatxo></div> <div id="mayoristas-data" class="hidden"${addAttribute(JSON.stringify(solicitudesMayoristas), "data-mayoristas")}${addAttribute(operadorId, "data-operador-id")} data-astro-cid-n2qaatxo></div> <div class="p-8 space-y-8" data-astro-cid-n2qaatxo> <div data-astro-cid-n2qaatxo> <nav class="flex items-center gap-2 text-sm text-outline mb-4" data-astro-cid-n2qaatxo> <a href="/dashboard" class="hover:text-primary transition-colors" data-astro-cid-n2qaatxo>Dashboard</a> <span class="material-symbols-outlined text-xs" data-astro-cid-n2qaatxo>chevron_right</span> <span class="text-primary font-medium" data-astro-cid-n2qaatxo>Mis Pedidos</span> </nav> <h1 class="font-headline text-4xl font-extrabold text-on-surface tracking-tight" data-astro-cid-n2qaatxo>Mis Pedidos</h1> <p class="text-on-surface-variant mt-1" data-astro-cid-n2qaatxo>Seguimiento de pedidos y estado.</p> </div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-astro-cid-n2qaatxo> <button class="filter-btn bg-surface-container-lowest rounded-xl p-5 flex flex-col gap-3 hover:bg-surface-container-low transition-all" data-filter="all" data-astro-cid-n2qaatxo> <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/5" data-astro-cid-n2qaatxo> <span class="material-symbols-outlined text-primary" data-astro-cid-n2qaatxo>list</span> </div> <div data-astro-cid-n2qaatxo> <p class="text-outline text-xs font-bold uppercase tracking-widest" data-astro-cid-n2qaatxo>Todos</p> <p class="font-headline text-3xl font-extrabold text-on-surface mt-0.5" data-astro-cid-n2qaatxo>${total}</p> </div> </button> ${stats.map((s) => renderTemplate`<button class="filter-btn bg-surface-container-lowest rounded-xl p-5 flex flex-col gap-3 hover:bg-surface-container-low transition-all"${addAttribute(s.filter, "data-filter")} data-astro-cid-n2qaatxo> <div${addAttribute(`w-10 h-10 rounded-lg flex items-center justify-center ${s.bg}`, "class")} data-astro-cid-n2qaatxo> <span${addAttribute(`material-symbols-outlined ${s.iconColor}`, "class")} data-astro-cid-n2qaatxo>${s.icon}</span> </div> <div data-astro-cid-n2qaatxo> <p class="text-outline text-xs font-bold uppercase tracking-widest" data-astro-cid-n2qaatxo>${s.label}</p> <p class="font-headline text-3xl font-extrabold text-on-surface mt-0.5" data-astro-cid-n2qaatxo>${s.value}</p> </div> </button>`)} </div> <div class="bg-surface-container-lowest rounded-xl overflow-hidden" data-astro-cid-n2qaatxo> <div class="px-6 py-5 border-b border-outline-variant/10" data-astro-cid-n2qaatxo> <h2 class="font-headline text-lg font-bold text-on-surface" data-astro-cid-n2qaatxo>Historial de Pedidos</h2> </div> ${allPedidos.length === 0 ? renderTemplate`<div class="px-6 py-16 text-center text-outline" data-astro-cid-n2qaatxo> <span class="material-symbols-outlined text-6xl block mb-4 opacity-20" data-astro-cid-n2qaatxo>inventory_2</span> <p class="text-lg font-semibold" data-astro-cid-n2qaatxo>No hay pedidos aún</p> <p class="text-sm mt-1" data-astro-cid-n2qaatxo>Cuando realices solicitudes, aparecerán aquí.</p> </div>` : renderTemplate`<div class="overflow-x-auto" data-astro-cid-n2qaatxo> <table class="w-full text-left" data-astro-cid-n2qaatxo> <thead data-astro-cid-n2qaatxo> <tr class="bg-surface-container-low text-outline text-xs font-bold uppercase tracking-widest" data-astro-cid-n2qaatxo> <th class="px-6 py-4" data-astro-cid-n2qaatxo>Pedido</th> <th class="px-6 py-4" data-astro-cid-n2qaatxo>Contenido</th> <th class="px-6 py-4 text-center" data-astro-cid-n2qaatxo>Estado</th> <th class="px-6 py-4 text-right" data-astro-cid-n2qaatxo>Fecha</th> </tr> </thead> <tbody class="divide-y divide-outline-variant/10" data-astro-cid-n2qaatxo> ${allPedidos.map((p) => {
    const statusStyle = getStatusStyle(p.estado_solicitud);
    return renderTemplate`<tr class="pedido-row hover:bg-surface-container-low/50 transition-colors cursor-pointer"${addAttribute(JSON.stringify(p), "data-pedido")}${addAttribute((p.estado_solicitud || "").toLowerCase(), "data-filter")} data-astro-cid-n2qaatxo> <td class="px-6 py-5" data-astro-cid-n2qaatxo> <p class="font-bold text-primary text-sm" data-astro-cid-n2qaatxo>${p.id_solicitud_cotizacion?.slice(0, 8) || "—"}</p> </td> <td class="px-6 py-5 max-w-xs" data-astro-cid-n2qaatxo> <p class="text-sm text-on-surface line-clamp-2" data-astro-cid-n2qaatxo>${getProductoNombre(p.productos)}</p> </td> <td class="px-6 py-5 text-center" data-astro-cid-n2qaatxo> <span${addAttribute(`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${statusStyle.class}`, "class")} data-astro-cid-n2qaatxo> <span class="material-symbols-outlined text-xs" data-astro-cid-n2qaatxo>${statusStyle.icon}</span> ${p.estado_solicitud || "—"} </span> </td> <td class="px-6 py-5 text-right" data-astro-cid-n2qaatxo> <p class="text-sm text-outline" data-astro-cid-n2qaatxo>${formatDate(p.created_at)}</p> </td> </tr>`;
  })} </tbody> </table> </div>`} </div> </div> <dialog id="modal-detalle" class="modal" data-astro-cid-n2qaatxo> <div class="modal-content" data-astro-cid-n2qaatxo> <div class="modal-header" data-astro-cid-n2qaatxo> <div class="modal-title-group" data-astro-cid-n2qaatxo> <div class="modal-icon" data-astro-cid-n2qaatxo> <span class="material-symbols-outlined text-2xl" data-astro-cid-n2qaatxo>receipt_long</span> </div> <div data-astro-cid-n2qaatxo> <h3 class="font-headline text-lg font-bold" data-astro-cid-n2qaatxo>Detalle del Pedido</h3> </div> </div> <button id="btn-cerrar-modal" class="modal-close" data-astro-cid-n2qaatxo> <span class="material-symbols-outlined" data-astro-cid-n2qaatxo>close</span> </button> </div> <div class="modal-body" data-astro-cid-n2qaatxo> <div class="grid grid-cols-2 gap-6" data-astro-cid-n2qaatxo> <div class="space-y-4" data-astro-cid-n2qaatxo> <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10" data-astro-cid-n2qaatxo> <p class="text-xs text-outline uppercase tracking-widest mb-2 flex items-center gap-1" data-astro-cid-n2qaatxo> <span class="material-symbols-outlined text-sm" data-astro-cid-n2qaatxo>info</span>Estado del Pedido
</p> <span id="modal-estado" class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold" data-astro-cid-n2qaatxo>---</span> </div> <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10" data-astro-cid-n2qaatxo> <p class="text-xs text-outline uppercase tracking-widest mb-2 flex items-center gap-1" data-astro-cid-n2qaatxo> <span class="material-symbols-outlined text-sm" data-astro-cid-n2qaatxo>tag</span>Identificadores
</p> <div class="space-y-2" data-astro-cid-n2qaatxo> <div class="bg-surface-container-lowest p-2 rounded" data-astro-cid-n2qaatxo> <p class="text-xs text-outline" data-astro-cid-n2qaatxo>ID Solicitud</p> <p id="modal-id-solicitud" class="text-xs font-mono text-on-surface break-all" data-astro-cid-n2qaatxo>---</p> </div> <div class="bg-surface-container-lowest p-2 rounded" data-astro-cid-n2qaatxo> <p class="text-xs text-outline" data-astro-cid-n2qaatxo>ID Pedido</p> <p id="modal-id-pedido" class="text-xs font-mono text-on-surface break-all" data-astro-cid-n2qaatxo>---</p> </div> </div> </div> <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10" data-astro-cid-n2qaatxo> <p class="text-xs text-outline uppercase tracking-widest mb-2 flex items-center gap-1" data-astro-cid-n2qaatxo> <span class="material-symbols-outlined text-sm" data-astro-cid-n2qaatxo>inventory_2</span>
Productos (<span id="modal-count-prods" data-astro-cid-n2qaatxo>0</span>)
</p> <div id="modal-productos" class="space-y-2" data-astro-cid-n2qaatxo></div> </div> <div id="seccion-aceptada" class="hidden space-y-3" data-astro-cid-n2qaatxo> <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10" data-astro-cid-n2qaatxo> <p class="text-xs text-outline uppercase tracking-widest mb-3 flex items-center gap-1" data-astro-cid-n2qaatxo> <span class="material-symbols-outlined text-sm" data-astro-cid-n2qaatxo>receipt_long</span>Resumen de Precios
</p> <div class="space-y-2" data-astro-cid-n2qaatxo> <div class="flex justify-between items-center" data-astro-cid-n2qaatxo> <span class="text-sm text-on-surface" data-astro-cid-n2qaatxo>Total Productos</span> <span id="modal-total-productos" class="text-sm font-bold text-on-surface" data-astro-cid-n2qaatxo>$0.00</span> </div> <div class="flex justify-between items-center" data-astro-cid-n2qaatxo> <span class="text-sm text-on-surface" data-astro-cid-n2qaatxo>Costo Envío</span> <span id="modal-costo-envio" class="text-sm font-bold text-on-surface" data-astro-cid-n2qaatxo>$0.00</span> </div> <div class="border-t border-outline-variant/30 pt-2 flex justify-between items-center" data-astro-cid-n2qaatxo> <span class="text-sm font-semibold text-on-surface" data-astro-cid-n2qaatxo>Subtotal</span> <span id="modal-subtotal" class="text-sm font-bold text-primary" data-astro-cid-n2qaatxo>$0.00</span> </div> </div> </div> <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10" data-astro-cid-n2qaatxo> <p class="text-xs text-outline uppercase tracking-widest mb-2 flex items-center gap-1" data-astro-cid-n2qaatxo> <span class="material-symbols-outlined text-sm" data-astro-cid-n2qaatxo>payments</span>Ganancia
</p> <input type="number" id="modal-ganancia" class="w-full px-3 py-2 rounded-lg border border-outline-variant/30 bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" placeholder="0.00" min="0" step="0.01" value="0" data-astro-cid-n2qaatxo> </div> <div class="bg-primary/10 p-4 rounded-xl border border-primary/20" data-astro-cid-n2qaatxo> <div class="flex justify-between items-center" data-astro-cid-n2qaatxo> <span class="text-sm font-semibold text-primary" data-astro-cid-n2qaatxo>Total Cotización</span> <span id="modal-total-final" class="text-lg font-bold text-primary" data-astro-cid-n2qaatxo>$0.00</span> </div> </div> <button id="btn-generar-cotizacion" class="w-full bg-primary text-white px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors" data-astro-cid-n2qaatxo> <span class="material-symbols-outlined" data-astro-cid-n2qaatxo>description</span>
Generar Cotización Downlabs
</button> <a id="btn-descargar-pdf" target="_blank" class="hidden w-full bg-secondary text-white px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors" data-astro-cid-n2qaatxo> <span class="material-symbols-outlined" data-astro-cid-n2qaatxo>download</span>
Descargar PDF
</a> </div> <div class="grid grid-cols-2 gap-3" data-astro-cid-n2qaatxo> <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10" data-astro-cid-n2qaatxo> <p class="text-xs text-outline uppercase tracking-widest mb-1 flex items-center gap-1" data-astro-cid-n2qaatxo> <span class="material-symbols-outlined text-sm" data-astro-cid-n2qaatxo>calendar_today</span>Creado
</p> <p id="modal-fecha" class="text-sm font-semibold text-on-surface" data-astro-cid-n2qaatxo>---</p> </div> <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10" data-astro-cid-n2qaatxo> <p class="text-xs text-outline uppercase tracking-widest mb-1 flex items-center gap-1" data-astro-cid-n2qaatxo> <span class="material-symbols-outlined text-sm" data-astro-cid-n2qaatxo>update</span>Actualizado
</p> <p id="modal-fecha-update" class="text-sm font-semibold text-on-surface" data-astro-cid-n2qaatxo>---</p> </div> </div> </div> <div class="space-y-4" data-astro-cid-n2qaatxo> <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10" data-astro-cid-n2qaatxo> <p class="text-xs text-outline uppercase tracking-widest mb-2 flex items-center gap-1" data-astro-cid-n2qaatxo> <span class="material-symbols-outlined text-sm" data-astro-cid-n2qaatxo>store</span>
Solicitudes a Mayoristas (<span id="modal-count-mayoristas" data-astro-cid-n2qaatxo>0</span>)
</p> <div id="modal-mayoristas" class="space-y-3" data-astro-cid-n2qaatxo></div> </div> </div> </div> </div>  ${renderScript($$result2, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/pedidos/index.astro?astro&type=script&index=0&lang.ts")} </div> </dialog> ` })}`;
}, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/pedidos/index.astro", void 0);
const $$file = "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/pedidos/index.astro";
const $$url = "/dashboard/pedidos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
