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
      if (!res.ok || !text || text.trim() === "") return { success: false, data: null };
      return JSON.parse(text);
    } catch (e) {
      return { success: false, data: null };
    }
  }
  const productosData = await safeFetch(`${API_URL}/api/catalogo-productos?pageSize=300`);
  const allProducts = (productosData.data ?? []).map((p) => {
    const ratings = p.ratings_productos || [];
    const avg = ratings.length > 0 ? ratings.reduce((s, r) => s + r.calificacion, 0) / ratings.length : 0;
    return {
      ...p,
      _avgRating: Math.round(avg * 10) / 10,
      _totalReviews: ratings.length
    };
  });
  const categories = {};
  for (const p of allProducts) {
    const cat = p.categoria || "Otros";
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(p);
  }
  const categoryEntries = Object.entries(categories).sort((a, b) => b[1].length - a[1].length);
  const catIcons = {
    "Periféricos": "keyboard",
    "Monitores": "monitor",
    "Audio": "headphones",
    "Mobiliario": "chair",
    "Accesorios": "cable",
    "Computadoras": "computer",
    "Redes": "router",
    "Almacenamiento": "storage",
    "Impresoras": "print"
  };
  const catColors = {
    "Periféricos": "from-blue-500/10 to-blue-600/5",
    "Monitores": "from-violet-500/10 to-violet-600/5",
    "Audio": "from-rose-500/10 to-rose-600/5",
    "Mobiliario": "from-emerald-500/10 to-emerald-600/5",
    "Accesorios": "from-amber-500/10 to-amber-600/5",
    "Computadoras": "from-cyan-500/10 to-cyan-600/5"
  };
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Catálogo · Operadores", "data-astro-cid-pjzliis7": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="p-6 md:p-8 max-w-7xl mx-auto relative" data-astro-cid-pjzliis7> <!-- Header --> <div class="mb-8" data-astro-cid-pjzliis7> <nav class="flex items-center gap-2 text-sm text-outline mb-3" data-astro-cid-pjzliis7> <a href="/dashboard" class="hover:text-primary transition-colors" data-astro-cid-pjzliis7>Dashboard</a> <span class="material-symbols-outlined text-xs" data-astro-cid-pjzliis7>chevron_right</span> <span class="text-primary font-medium" data-astro-cid-pjzliis7>Catálogo de Productos</span> </nav> <div class="flex items-end justify-between gap-4" data-astro-cid-pjzliis7> <div data-astro-cid-pjzliis7> <h1 class="font-headline text-3xl font-extrabold text-on-surface tracking-tight" data-astro-cid-pjzliis7>Catálogo de Proveedores</h1> <p class="text-on-surface-variant mt-1" data-astro-cid-pjzliis7>Explora todos los productos disponibles. ', " productos en ", ' categorías.</p> </div> <div class="relative flex-shrink-0 w-80" data-astro-cid-pjzliis7> <!-- Modificamos el placeholder para quitar "proveedor" --> <input type="text" id="catalog-search" placeholder="Buscar por ID, nombre, material..." class="w-full bg-surface-container-lowest border-none py-3 px-4 pl-10 rounded-xl text-sm text-on-surface placeholder-outline focus:ring-2 focus:ring-primary/20 focus:outline-none shadow-sm" data-astro-cid-pjzliis7> <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg" data-astro-cid-pjzliis7>search</span> </div> </div> </div> <!-- Category quick nav --> <div class="flex gap-2 mb-8 overflow-x-auto pb-2 flex-wrap" data-astro-cid-pjzliis7> ', ' </div> <!-- Category sections --> <div class="space-y-10" id="catalog-sections" data-astro-cid-pjzliis7> ', ' </div> <!-- Empty search state --> <div id="no-results" class="hidden text-center py-16 text-outline" data-astro-cid-pjzliis7> <span class="material-symbols-outlined text-5xl block mb-3 opacity-20" data-astro-cid-pjzliis7>search_off</span> <p class="text-lg font-semibold" data-astro-cid-pjzliis7>Sin resultados</p> <p class="text-sm mt-1" data-astro-cid-pjzliis7>Intenta con otro término de búsqueda o UUID.</p> </div> </div>  <dialog id="modal-producto" class="bg-transparent m-auto p-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm open:animate-in open:fade-in open:zoom-in-95" data-astro-cid-pjzliis7> <div class="bg-surface-container-lowest w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/20" data-astro-cid-pjzliis7> <!-- Modal Header --> <div class="px-6 py-4 border-b border-outline-variant/10 flex items-center justify-between bg-surface-container-low" data-astro-cid-pjzliis7> <div class="flex items-center gap-3" data-astro-cid-pjzliis7> <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary" data-astro-cid-pjzliis7> <span class="material-symbols-outlined" id="modal-icon" data-astro-cid-pjzliis7>inventory_2</span> </div> <div data-astro-cid-pjzliis7> <h3 class="font-bold text-on-surface text-lg" id="modal-title" data-astro-cid-pjzliis7>Detalle del Producto</h3> <p class="text-xs text-outline font-mono mt-0.5" id="modal-uuid" data-astro-cid-pjzliis7>---</p> </div> </div> <button id="btn-close-modal" class="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:bg-surface-container-highest hover:text-on-surface transition-colors" data-astro-cid-pjzliis7> <span class="material-symbols-outlined text-xl" data-astro-cid-pjzliis7>close</span> </button> </div> <!-- Modal Body --> <div class="p-6" data-astro-cid-pjzliis7> <div class="flex flex-col md:flex-row gap-6" data-astro-cid-pjzliis7> <!-- Imagen del producto (Izquierda) --> <div class="w-full md:w-5/12 h-64 bg-surface-container-high rounded-xl overflow-hidden flex items-center justify-center relative" data-astro-cid-pjzliis7> <img id="modal-img" src="" alt="Producto" class="w-full h-full object-cover hidden" data-astro-cid-pjzliis7> <span id="modal-no-img" class="material-symbols-outlined text-6xl text-outline/20" data-astro-cid-pjzliis7>image</span> </div> <!-- Datos principales (Derecha) --> <div class="w-full md:w-7/12 flex flex-col gap-4" data-astro-cid-pjzliis7> <div class="bg-surface-container-low p-4 rounded-xl" data-astro-cid-pjzliis7> <p class="text-[10px] font-bold uppercase tracking-wider text-outline mb-1" data-astro-cid-pjzliis7>Precio Mayorista</p> <p class="text-3xl font-extrabold text-primary" id="modal-precio" data-astro-cid-pjzliis7>$0.00</p> </div> <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant/10" data-astro-cid-pjzliis7> <p class="text-[10px] font-bold uppercase tracking-wider text-outline flex items-center gap-1 mb-1" data-astro-cid-pjzliis7> <span class="material-symbols-outlined text-[12px]" data-astro-cid-pjzliis7>category</span> Categoría\n</p> <p class="text-sm font-bold text-on-surface truncate" id="modal-cat" data-astro-cid-pjzliis7>---</p> </div> <div data-astro-cid-pjzliis7> <p class="text-[10px] font-bold uppercase tracking-wider text-outline mb-1" data-astro-cid-pjzliis7>Materiales / Composición</p> <p class="text-sm text-on-surface-variant bg-surface-container-low px-3 py-2 rounded-lg" id="modal-mat" data-astro-cid-pjzliis7>---</p> </div> </div> </div> <div class="mt-6" data-astro-cid-pjzliis7> <p class="text-[10px] font-bold uppercase tracking-wider text-outline mb-2" data-astro-cid-pjzliis7>Descripción Detallada</p> <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10" data-astro-cid-pjzliis7> <p class="text-sm text-on-surface-variant leading-relaxed whitespace-pre-line" id="modal-desc" data-astro-cid-pjzliis7>---</p> </div> </div> </div> <!-- Modal Footer --> <div class="px-6 py-4 bg-surface-container-low border-t border-outline-variant/10 flex justify-end" data-astro-cid-pjzliis7> <button id="btn-close-modal-footer" class="px-5 py-2.5 rounded-xl text-sm font-bold bg-surface-container-highest text-on-surface hover:bg-outline/10 transition-colors" data-astro-cid-pjzliis7>\nCerrar\n</button> </div> </div> </dialog>   <script>(function(){', "\n    window.__CATALOG_PRODUCTS__ = allProducts;\n    window.__CATALOG_ICONS__ = catIcons;\n  })();</script> ", " "])), maybeRenderHead(), allProducts.length, categoryEntries.length, categoryEntries.map(([cat, items]) => renderTemplate`<a${addAttribute(`#cat-${cat.toLowerCase().replace(/\s/g, "-")}`, "href")} class="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors text-sm font-medium text-on-surface-variant hover:text-on-surface whitespace-nowrap" data-astro-cid-pjzliis7> <span class="material-symbols-outlined text-base text-primary" data-astro-cid-pjzliis7>${catIcons[cat] || "category"}</span> ${cat} <span class="text-[10px] font-bold text-outline bg-outline/10 px-1.5 py-0.5 rounded-full" data-astro-cid-pjzliis7>${items.length}</span> </a>`), categoryEntries.map(([cat, items]) => renderTemplate`<section${addAttribute(`cat-${cat.toLowerCase().replace(/\s/g, "-")}`, "id")} class="catalog-section"${addAttribute(cat.toLowerCase(), "data-category")} data-astro-cid-pjzliis7> <!-- Section header --> <div${addAttribute(`rounded-2xl bg-gradient-to-r ${catColors[cat] || "from-primary/10 to-primary/5"} p-6 mb-5`, "class")} data-astro-cid-pjzliis7> <div class="flex items-center gap-3" data-astro-cid-pjzliis7> <div class="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center shadow-sm" data-astro-cid-pjzliis7> <span class="material-symbols-outlined text-primary text-2xl" data-astro-cid-pjzliis7>${catIcons[cat] || "category"}</span> </div> <div data-astro-cid-pjzliis7> <h2 class="font-headline text-xl font-extrabold text-on-surface" data-astro-cid-pjzliis7>${cat}</h2> <p class="text-sm text-on-surface-variant" data-astro-cid-pjzliis7>${items.length} producto${items.length > 1 ? "s" : ""} disponible${items.length > 1 ? "s" : ""}</p> </div> </div> </div> <!-- Products grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-astro-cid-pjzliis7> ${items.map((p) => {
    const imgUrl = p.imagen_url;
    const desc = p.descripcion || p.materiales || "";
    const avg = p._avgRating;
    const reviews = p._totalReviews;
    return renderTemplate`<div class="product-card-catalog bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all group cursor-pointer border border-outline-variant/10 hover:border-primary/20"${addAttribute(p.nombre_articulo?.toLowerCase(), "data-name")}${addAttribute(p.materiales?.toLowerCase(), "data-materials")}${addAttribute(p.descripcion?.toLowerCase(), "data-desc")}${addAttribute(p.id_producto?.toLowerCase(), "data-uuid")} data-astro-cid-pjzliis7> <!-- Image --> <div class="h-40 bg-surface-container-high overflow-hidden relative" data-astro-cid-pjzliis7> ${imgUrl ? renderTemplate`<img${addAttribute(imgUrl, "src")}${addAttribute(p.nombre_articulo, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" data-astro-cid-pjzliis7>` : renderTemplate`<div class="w-full h-full flex items-center justify-center" data-astro-cid-pjzliis7> <span class="material-symbols-outlined text-5xl text-outline/15" data-astro-cid-pjzliis7>${catIcons[cat] || "category"}</span> </div>`} ${reviews > 0 && renderTemplate`<div class="absolute top-2 right-2 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-[10px] font-bold" data-astro-cid-pjzliis7> <span class="text-amber-400" data-astro-cid-pjzliis7>★</span> ${avg} (${reviews})
</div>`} </div> <!-- Info --> <div class="p-4" data-astro-cid-pjzliis7> <h3 class="font-bold text-on-surface text-sm mb-1" data-astro-cid-pjzliis7>${p.nombre_articulo}</h3> <p class="text-[11px] text-on-surface-variant line-clamp-2 mb-3 leading-relaxed" data-astro-cid-pjzliis7>${desc || "Sin descripción"}</p> <div class="flex items-center justify-between" data-astro-cid-pjzliis7> <div data-astro-cid-pjzliis7> <!-- Se eliminó la línea del proveedor y estrellas aquí --> <p class="text-[10px] text-outline" data-astro-cid-pjzliis7>Material: ${p.materiales?.split(",")[0] || "No especificado"}</p> </div> <p class="font-headline text-xl font-extrabold text-primary" data-astro-cid-pjzliis7>$${p.precio_mayorista?.toFixed(2)}</p> </div> </div> </div>`;
  })} </div> </section>`), defineScriptVars({ allProducts, catIcons }), renderScript($$result2, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/marketplace/index.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/marketplace/index.astro", void 0);
const $$file = "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/marketplace/index.astro";
const $$url = "/dashboard/marketplace";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
