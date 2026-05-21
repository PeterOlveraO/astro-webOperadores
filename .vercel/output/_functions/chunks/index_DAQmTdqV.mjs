import { c as createComponent } from './astro-component_BfP70hli.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, n as defineScriptVars, h as addAttribute, m as maybeRenderHead } from './entrypoint_Di8hritT.mjs';
import { r as renderScript } from './script_C4eAVIqH.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout__BO0mkrC.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const API_URL = "http://localhost:5145";
  const operadorId = Astro2.cookies.get("id_operador")?.value ?? Astro2.cookies.get("operador_id")?.value;
  if (!operadorId || operadorId === "undefined" || operadorId === "null") {
    return Astro2.redirect("/");
  }
  async function safeFetch(url) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      if (!res.ok || !text || text.trim() === "")
        return { success: false, data: null, pagination: null };
      return JSON.parse(text);
    } catch (e) {
      return { success: false, data: null, pagination: null };
    }
  }
  const pedidosData = await safeFetch(`${API_URL}/api/pedidos-raw?pageSize=200`);
  const allPedidos = pedidosData.data ?? [];
  allPedidos.filter(
    (p) => p.estado?.toLowerCase() === "pendiente"
  );
  const solicitudesData = await safeFetch(
    `${API_URL}/api/solicitudes-cotizacion?pageSize=200`
  );
  const allSolicitudes = solicitudesData.data ?? [];
  const productosData = await safeFetch(
    `${API_URL}/api/catalogo-productos?pageSize=300`
  );
  const allProducts = (productosData.data ?? []).map((p) => {
    const ratings = p.ratings_productos || [];
    const avgRating = ratings.length > 0 ? ratings.reduce((sum, r) => sum + r.calificacion, 0) / ratings.length : 0;
    return {
      ...p,
      _avgRating: Math.round(avgRating * 10) / 10,
      _totalReviews: ratings.length
    };
  });
  allPedidos.length;
  const pendientes = allPedidos.filter(
    (p) => p.estado?.toLowerCase() === "pendiente"
  ).length;
  const enProceso = allPedidos.filter(
    (p) => p.estado?.toLowerCase() === "procesando"
  ).length;
  const completados = allPedidos.filter(
    (p) => p.estado?.toLowerCase() === "completado"
  ).length;
  function formatDate(dateStr) {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("es-MX", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  const catIcons = {
    periféricos: "keyboard",
    monitores: "monitor",
    audio: "headphones",
    mobiliario: "chair",
    accesorios: "cable",
    computadoras: "computer",
    redes: "router",
    almacenamiento: "storage",
    impresoras: "print"
  };
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Pedidos · Operadores", "data-astro-cid-jx6b4dn6": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="p-6 h-[calc(100vh-64px)] flex flex-col overflow-hidden" data-astro-cid-jx6b4dn6> <!-- Header --> <div class="mb-4 flex-shrink-0" data-astro-cid-jx6b4dn6> <nav class="flex items-center gap-2 text-sm text-outline mb-2" data-astro-cid-jx6b4dn6> <a href="/dashboard" class="hover:text-primary transition-colors" data-astro-cid-jx6b4dn6>Dashboard</a> <span class="material-symbols-outlined text-xs" data-astro-cid-jx6b4dn6>chevron_right</span> <span class="text-primary font-medium" data-astro-cid-jx6b4dn6>Pedidos Entrantes</span> </nav> <div class="flex items-center justify-between" data-astro-cid-jx6b4dn6> <div data-astro-cid-jx6b4dn6> <h1 class="font-headline text-2xl font-extrabold text-on-surface tracking-tight" data-astro-cid-jx6b4dn6>\nPedidos Entrantes\n</h1> <p class="text-on-surface-variant text-sm mt-0.5" data-astro-cid-jx6b4dn6>\nSelecciona un pedido, agrega productos y genera la\n                        cotización hacia los mayoristas.\n</p> </div> <div class="flex gap-3" data-astro-cid-jx6b4dn6> <div class="flex items-center gap-2 bg-error/10 text-error px-3 py-1.5 rounded-full text-xs font-bold" data-astro-cid-jx6b4dn6> <span class="material-symbols-outlined text-sm" data-astro-cid-jx6b4dn6>pending</span> <span id="stat-pendientes" data-astro-cid-jx6b4dn6>', '</span> pendientes\n</div> <div class="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1.5 rounded-full text-xs font-bold" data-astro-cid-jx6b4dn6> <span class="material-symbols-outlined text-sm" data-astro-cid-jx6b4dn6>autorenew</span> <span id="stat-proceso" data-astro-cid-jx6b4dn6>', '</span> en proceso\n</div> <div class="flex items-center gap-2 bg-outline/10 text-outline px-3 py-1.5 rounded-full text-xs font-bold" data-astro-cid-jx6b4dn6> <span class="material-symbols-outlined text-sm" data-astro-cid-jx6b4dn6>check_circle</span> <span id="stat-completados" data-astro-cid-jx6b4dn6>', '</span> completados\n</div> </div> </div> </div> <!-- Split Panel --> <div class="flex-1 flex gap-4 min-h-0 overflow-hidden" data-astro-cid-jx6b4dn6> <!-- LEFT: Pedidos Raw List --> <div class="w-[360px] flex-shrink-0 flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden" data-astro-cid-jx6b4dn6> <div class="px-4 py-3 border-b border-outline-variant/10 flex items-center gap-2" data-astro-cid-jx6b4dn6> <span class="material-symbols-outlined text-primary text-sm" data-astro-cid-jx6b4dn6>inbox</span> <span class="text-sm font-bold text-on-surface" data-astro-cid-jx6b4dn6>Pedidos Pendientes</span> </div> <div class="flex-1 overflow-y-auto divide-y divide-outline-variant/5" id="pedidos-list" data-astro-cid-jx6b4dn6> ', ' </div> </div> <!-- RIGHT --> <div class="flex-1 flex flex-col min-h-0 overflow-hidden gap-4" data-astro-cid-jx6b4dn6> <div id="empty-state" class="flex-1 bg-surface-container-lowest rounded-xl flex items-center justify-center" data-astro-cid-jx6b4dn6> <div class="text-center text-outline" data-astro-cid-jx6b4dn6> <span class="material-symbols-outlined text-6xl block mb-3 opacity-15" data-astro-cid-jx6b4dn6>touch_app</span> <p class="text-lg font-semibold" data-astro-cid-jx6b4dn6>\nSelecciona un pedido\n</p> <p class="text-sm mt-1" data-astro-cid-jx6b4dn6>\nHaz clic en un pedido para revisar su contenido y\n                            armar la cotización.\n</p> </div> </div> <div id="detail-panel" class="flex-1 flex flex-col min-h-0 overflow-hidden gap-4" style="display: none;" data-astro-cid-jx6b4dn6> <!-- TOP: Pedido Detail --> <div class="bg-surface-container-lowest rounded-xl p-5 flex-shrink-0" data-astro-cid-jx6b4dn6> <div class="flex items-start justify-between mb-3" data-astro-cid-jx6b4dn6> <div class="flex items-center gap-3" data-astro-cid-jx6b4dn6> <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-primary-fixed text-on-primary-fixed" data-astro-cid-jx6b4dn6> <span class="material-symbols-outlined text-base" data-astro-cid-jx6b4dn6>receipt</span> </div> <div data-astro-cid-jx6b4dn6> <h3 class="font-bold text-on-surface text-lg" id="detail-pedido-id" data-astro-cid-jx6b4dn6>\n—\n</h3> <p class="text-xs text-outline" id="detail-cliente-id" data-astro-cid-jx6b4dn6>\n—\n</p> </div> </div> <div class="flex items-center gap-2" data-astro-cid-jx6b4dn6> <span id="detail-urgency-badge" class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" data-astro-cid-jx6b4dn6>—</span> <span id="detail-status-badge" class="px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1" data-astro-cid-jx6b4dn6>—</span> <!-- Indicador de solicitud generada --> <div id="solicitud-badge" class="hidden items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-secondary/10 text-secondary" data-astro-cid-jx6b4dn6> <span class="material-symbols-outlined text-sm" data-astro-cid-jx6b4dn6>receipt_long</span> <span id="solicitud-badge-label" data-astro-cid-jx6b4dn6>Solicitud generada</span> </div> </div> </div> <div class="bg-surface-container-low rounded-xl p-4" data-astro-cid-jx6b4dn6> <div class="flex items-center gap-2 mb-2" data-astro-cid-jx6b4dn6> <span class="material-symbols-outlined text-primary text-sm" data-astro-cid-jx6b4dn6>description</span> <span class="text-xs font-bold uppercase tracking-wider text-outline" data-astro-cid-jx6b4dn6>Contenido del pedido</span> </div> <p class="text-sm text-on-surface font-medium leading-relaxed" id="detail-desc" data-astro-cid-jx6b4dn6>\n—\n</p> <div id="detail-specs-container" class="mt-3 pt-3 border-t border-outline-variant/10" style="display: none;" data-astro-cid-jx6b4dn6> <span class="text-[10px] font-bold uppercase tracking-wider text-outline block mb-2" data-astro-cid-jx6b4dn6>Especificaciones técnicas</span> <div id="detail-specs" class="flex flex-wrap gap-2" data-astro-cid-jx6b4dn6></div> </div> </div> </div> <!-- BOTTOM: Products + Cart --> <div class="flex-1 flex gap-4 min-h-0 overflow-hidden" data-astro-cid-jx6b4dn6> <!-- Products --> <div class="flex-1 bg-surface-container-lowest rounded-xl flex flex-col min-h-0 overflow-hidden" data-astro-cid-jx6b4dn6> <div class="px-4 py-3 border-b border-outline-variant/10 flex items-center justify-between flex-shrink-0 flex-wrap gap-2" data-astro-cid-jx6b4dn6> <div class="flex items-center gap-2" data-astro-cid-jx6b4dn6> <span class="text-sm font-bold text-on-surface" id="products-title" data-astro-cid-jx6b4dn6>Productos Sugeridos</span> </div> <div class="flex items-center gap-1.5" data-astro-cid-jx6b4dn6> <button id="btn-show-suggested" class="mode-btn text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg bg-secondary/20 text-secondary" data-astro-cid-jx6b4dn6>Sugeridos</button> <button id="btn-show-all" class="mode-btn text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg bg-outline/10 text-outline hover:bg-outline/20 transition-colors" data-astro-cid-jx6b4dn6>Todos</button> <span class="w-px h-4 bg-outline-variant/20 mx-1" data-astro-cid-jx6b4dn6></span> <button id="btn-sort-rating" class="sort-btn text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg bg-outline/10 text-outline hover:bg-outline/20 transition-colors" data-astro-cid-jx6b4dn6>⭐ Rating</button> <button id="btn-sort-price" class="sort-btn text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg bg-outline/10 text-outline hover:bg-outline/20 transition-colors" data-astro-cid-jx6b4dn6>💲 Precio</button> </div> </div> <div class="px-4 py-2 flex-shrink-0" data-astro-cid-jx6b4dn6> <div class="relative" data-astro-cid-jx6b4dn6> <input type="text" id="product-search" placeholder="Buscar producto por nombre, categoría, material..." class="w-full bg-surface-container-low border-none py-2.5 px-4 pl-9 rounded-xl text-sm text-on-surface placeholder-outline focus:ring-2 focus:ring-primary/20 focus:outline-none" data-astro-cid-jx6b4dn6> <span class="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-base" data-astro-cid-jx6b4dn6>search</span> </div> </div> <div class="flex-1 overflow-y-auto px-4 pb-3 space-y-2" id="products-container" data-astro-cid-jx6b4dn6></div> </div> <!-- Cart --> <div class="w-[340px] flex-shrink-0 bg-surface-container-lowest rounded-xl flex flex-col min-h-0 overflow-hidden" data-astro-cid-jx6b4dn6> <div class="px-4 py-3 border-b border-outline-variant/10 flex items-center justify-between flex-shrink-0" data-astro-cid-jx6b4dn6> <div class="flex items-center gap-2" data-astro-cid-jx6b4dn6> <span class="material-symbols-outlined text-primary text-sm" data-astro-cid-jx6b4dn6>shopping_cart</span> <span class="text-sm font-bold text-on-surface" data-astro-cid-jx6b4dn6>Cotización</span> </div> <span id="cart-count" class="text-xs font-bold text-outline bg-outline/10 px-2 py-0.5 rounded-full" data-astro-cid-jx6b4dn6>0</span> </div> <div class="flex-1 overflow-y-auto px-3 py-3 space-y-2" id="cart-container" data-astro-cid-jx6b4dn6> <div id="cart-empty" class="text-center text-outline py-8" data-astro-cid-jx6b4dn6> <span class="material-symbols-outlined text-3xl block mb-2 opacity-20" data-astro-cid-jx6b4dn6>add_shopping_cart</span> <p class="text-xs" data-astro-cid-jx6b4dn6>\nAgrega productos del catálogo\n</p> </div> </div> <div class="px-4 py-3 border-t border-outline-variant/10 flex-shrink-0 bg-surface-container-low space-y-3" data-astro-cid-jx6b4dn6> <div class="flex justify-between items-center" data-astro-cid-jx6b4dn6> <span class="text-xs text-outline font-bold uppercase tracking-wider" data-astro-cid-jx6b4dn6>Total estimado</span> <p class="font-headline text-xl font-extrabold text-primary" id="cart-total" data-astro-cid-jx6b4dn6>\n$0.00\n</p> </div> <div id="cart-finalize-section" style="display: none;" data-astro-cid-jx6b4dn6> <button id="btn-finalize" class="w-full py-3 rounded-xl text-sm font-bold bg-gradient-to-br from-secondary to-secondary-container text-white hover:opacity-95 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-secondary/20" data-astro-cid-jx6b4dn6> <span class="material-symbols-outlined text-base" data-astro-cid-jx6b4dn6>send</span>\nGenerar Solicitud a Mayoristas\n</button> <p class="text-[10px] text-outline mt-1.5 text-center leading-relaxed" data-astro-cid-jx6b4dn6>\nSe generarán solicitudes individuales\n                                        por cada mayorista involucrado.\n</p> </div> </div> </div> </div> </div> </div> </div> </div>  <script>(function(){', "\n        window.__PRODUCTS__ = JSON.parse(allProducts);\n        window.__CAT_ICONS__ = JSON.parse(catIcons);\n        window.__OPERADOR_ID__ = operadorId;\n        window.__API_URL__ = API_URL;\n    })();</script> ", " "])), maybeRenderHead(), pendientes, enProceso, completados, allPedidos.filter(
    (p) => p.estado?.toLowerCase() === "pendiente"
  ).length === 0 ? renderTemplate`<div class="px-6 py-12 text-center text-outline" data-astro-cid-jx6b4dn6> <span class="material-symbols-outlined text-4xl block mb-2 opacity-30" data-astro-cid-jx6b4dn6>
done_all
</span> <p class="text-sm font-medium" data-astro-cid-jx6b4dn6>
No hay pedidos pendientes
</p> <p class="text-xs mt-1" data-astro-cid-jx6b4dn6>
Has procesado todas las solicitudes.
</p> </div>` : allPedidos.filter(
    (p) => p.estado?.toLowerCase() === "pendiente"
  ).map((ped, idx) => {
    const urgencyColor = ped.urgencia?.toLowerCase() === "alta" ? "bg-error" : ped.urgencia?.toLowerCase() === "media" ? "bg-tertiary" : "bg-outline";
    const statusColor = ped.estado?.toLowerCase() === "pendiente" ? "text-error" : ped.estado?.toLowerCase() === "completado" ? "text-outline" : "text-secondary";
    const solicitudExistente = allSolicitudes.find(
      (s) => s.id_pedido === ped.id_pedido
    );
    return renderTemplate`<button class="pedido-item w-full text-left px-4 py-4 hover:bg-surface-container-low/70 transition-all cursor-pointer relative"${addAttribute(idx, "data-index")}${addAttribute(ped.id_pedido, "data-id")}${addAttribute(
      ped.contenido_raw || "",
      "data-contenido"
    )}${addAttribute(
      ped.urgencia || "media",
      "data-urgencia"
    )}${addAttribute(
      ped.estado || "pendiente",
      "data-estado"
    )}${addAttribute(formatDate(
      ped.created_at
    ), "data-date")}${addAttribute(JSON.stringify(
      ped.especificaciones_tecnicas || {}
    ), "data-specs")}${addAttribute(
      ped.id_cliente || "",
      "data-id-cliente"
    )}${addAttribute(
      solicitudExistente?.id_solicitud_cotizacion || "",
      "data-solicitud-id"
    )}${addAttribute(
      solicitudExistente?.estado_solicitud || "",
      "data-solicitud-estado"
    )} data-astro-cid-jx6b4dn6> <div${addAttribute(`absolute left-0 top-0 bottom-0 w-1 ${urgencyColor} rounded-r opacity-60`, "class")} data-astro-cid-jx6b4dn6></div> <div class="pl-2" data-astro-cid-jx6b4dn6> <div class="flex items-center justify-between mb-1" data-astro-cid-jx6b4dn6> <div class="flex items-center gap-2" data-astro-cid-jx6b4dn6> <div class="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] bg-primary-fixed text-on-primary-fixed" data-astro-cid-jx6b4dn6> ${String(
      ped.id_pedido || "?"
    )[0].toUpperCase()} </div> <span class="text-sm font-bold text-on-surface" data-astro-cid-jx6b4dn6>
Pedido${" "} ${String(
      ped.id_pedido || ""
    ).slice(0, 8)} </span> </div> <span${addAttribute(`text-[10px] font-bold uppercase ${statusColor}`, "class")} data-astro-cid-jx6b4dn6> ${ped.estado} </span> </div> <p class="text-xs text-on-surface-variant line-clamp-2 mb-1.5 leading-relaxed" data-astro-cid-jx6b4dn6> ${ped.contenido_raw || "—"} </p> <div class="flex items-center justify-between" data-astro-cid-jx6b4dn6> <span${addAttribute(`text-[10px] font-bold uppercase tracking-wider ${ped.urgencia?.toLowerCase() === "alta" ? "text-error" : ped.urgencia?.toLowerCase() === "media" ? "text-tertiary" : "text-outline"}`, "class")} data-astro-cid-jx6b4dn6>
● ${ped.urgencia || "—"} </span> <span class="text-[10px] text-outline" data-astro-cid-jx6b4dn6> ${formatDate(
      ped.created_at
    )} </span> </div> ${solicitudExistente && renderTemplate`<div class="mt-1.5 flex items-center gap-1 text-[10px] text-secondary font-semibold" data-astro-cid-jx6b4dn6> <span class="material-symbols-outlined text-xs" data-astro-cid-jx6b4dn6>
receipt_long
</span>
Solicitud generada
</div>`} </div> </button>`;
  }), defineScriptVars({
    allProducts: JSON.stringify(allProducts),
    catIcons: JSON.stringify(catIcons),
    operadorId,
    API_URL
  }), renderScript($$result2, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/solicitudes/index.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/solicitudes/index.astro", void 0);
const $$file = "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/solicitudes/index.astro";
const $$url = "/dashboard/solicitudes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
