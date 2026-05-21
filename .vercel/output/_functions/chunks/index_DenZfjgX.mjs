import { c as createComponent } from './astro-component_BfP70hli.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_Di8hritT.mjs';
import { r as renderScript } from './script_C4eAVIqH.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout__BO0mkrC.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const operadorId = Astro2.cookies.get("id_operador")?.value;
  if (!operadorId || operadorId === "undefined" || operadorId === "null") {
    return Astro2.redirect("/");
  }
  const isAdmin = Astro2.cookies.get("operador_is_admin")?.value === "true";
  if (!isAdmin) {
    return Astro2.redirect("/dashboard");
  }
  decodeURIComponent(
    Astro2.cookies.get("operador_email")?.value ?? ""
  );
  const API_URL = "http://localhost:5145";
  async function safeFetch(url) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      if (!res.ok || !text || text.trim() === "") {
        return { success: false, data: null };
      }
      return JSON.parse(text);
    } catch (e) {
      return { success: false, data: null };
    }
  }
  const operadoresData = await safeFetch(`${API_URL}/api/operadores`);
  const operadores = operadoresData.data ?? [];
  function formatDate(dateStr) {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("es-MX", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Configuración · Operadores", "data-astro-cid-empm35dy": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-8 space-y-8" data-astro-cid-empm35dy> <!-- Header --> <div class="flex justify-between items-start" data-astro-cid-empm35dy> <div data-astro-cid-empm35dy> <nav class="flex items-center gap-2 text-sm text-outline mb-4" data-astro-cid-empm35dy> <a href="/dashboard" class="hover:text-primary transition-colors" data-astro-cid-empm35dy>Dashboard</a> <span class="material-symbols-outlined text-xs" data-astro-cid-empm35dy>chevron_right</span> <span class="text-primary font-medium" data-astro-cid-empm35dy>Configuración</span> </nav> <h1 class="font-headline text-4xl font-extrabold text-on-surface tracking-tight" data-astro-cid-empm35dy>
Gestión de Operadores
</h1> <p class="text-on-surface-variant mt-1" data-astro-cid-empm35dy>
Administra las cuentas de operadores del sistema.
</p> </div> <button id="btn-nuevo-operador" class="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20" data-astro-cid-empm35dy> <span class="material-symbols-outlined text-xl" data-astro-cid-empm35dy>person_add</span>
Nuevo Operador
</button> </div> <!-- Search --> <div class="relative max-w-md" data-astro-cid-empm35dy> <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-astro-cid-empm35dy>search</span> <input type="text" id="input-buscar" placeholder="Buscar operador por nombre o email..." class="w-full pl-12 pr-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" data-astro-cid-empm35dy> </div> <!-- Stats --> <div class="grid grid-cols-3 gap-6" data-astro-cid-empm35dy> <div class="bg-surface-container-lowest rounded-xl p-5" data-astro-cid-empm35dy> <div class="flex items-center gap-3" data-astro-cid-empm35dy> <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center" data-astro-cid-empm35dy> <span class="material-symbols-outlined text-primary" data-astro-cid-empm35dy>group</span> </div> <div data-astro-cid-empm35dy> <p class="text-outline text-xs font-semibold uppercase tracking-widest" data-astro-cid-empm35dy>
Total
</p> <p class="font-headline text-2xl font-extrabold text-on-surface" data-astro-cid-empm35dy> ${operadores.length} </p> </div> </div> </div> <div class="bg-surface-container-lowest rounded-xl p-5" data-astro-cid-empm35dy> <div class="flex items-center gap-3" data-astro-cid-empm35dy> <div class="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center" data-astro-cid-empm35dy> <span class="material-symbols-outlined text-emerald-600" data-astro-cid-empm35dy>check_circle</span> </div> <div data-astro-cid-empm35dy> <p class="text-outline text-xs font-semibold uppercase tracking-widest" data-astro-cid-empm35dy>
Activos
</p> <p class="font-headline text-2xl font-extrabold text-on-surface" data-astro-cid-empm35dy> ${operadores.filter((o) => o.activo).length} </p> </div> </div> </div> <div class="bg-surface-container-lowest rounded-xl p-5" data-astro-cid-empm35dy> <div class="flex items-center gap-3" data-astro-cid-empm35dy> <div class="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center" data-astro-cid-empm35dy> <span class="material-symbols-outlined text-red-600" data-astro-cid-empm35dy>cancel</span> </div> <div data-astro-cid-empm35dy> <p class="text-outline text-xs font-semibold uppercase tracking-widest" data-astro-cid-empm35dy>
Inactivos
</p> <p class="font-headline text-2xl font-extrabold text-on-surface" data-astro-cid-empm35dy> ${operadores.filter((o) => !o.activo).length} </p> </div> </div> </div> </div> <!-- Filters --> <div class="flex gap-4 items-center" data-astro-cid-empm35dy> <span class="text-sm text-outline font-semibold" data-astro-cid-empm35dy>Filtrar:</span> <div class="flex gap-2" data-astro-cid-empm35dy> <button class="filter-op-btn px-4 py-2 rounded-lg text-sm font-medium bg-primary text-white" data-filter="all" data-astro-cid-empm35dy>
Todos (${operadores.length})
</button> <button class="filter-op-btn px-4 py-2 rounded-lg text-sm font-medium bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-colors" data-filter="true" data-astro-cid-empm35dy>
Activos (${operadores.filter((o) => o.activo).length})
</button> <button class="filter-op-btn px-4 py-2 rounded-lg text-sm font-medium bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-colors" data-filter="false" data-astro-cid-empm35dy>
Inactivos (${operadores.filter((o) => !o.activo).length})
</button> </div> </div> <!-- Operators Table --> <div class="bg-surface-container-lowest rounded-xl overflow-hidden" data-astro-cid-empm35dy> <div class="px-6 py-5 border-b border-outline-variant/10 flex justify-between items-center" data-astro-cid-empm35dy> <h2 class="font-headline text-lg font-bold text-on-surface" data-astro-cid-empm35dy>
Lista de Operadores
</h2> <span class="text-sm text-outline" id="count-display" data-astro-cid-empm35dy>${operadores.length} operadores</span> </div> ${operadores.length === 0 ? renderTemplate`<div class="px-6 py-16 text-center text-outline" data-astro-cid-empm35dy> <span class="material-symbols-outlined text-6xl block mb-4 opacity-20" data-astro-cid-empm35dy>
group_off
</span> <p class="text-lg font-semibold" data-astro-cid-empm35dy>
No hay operadores registrados
</p> <p class="text-sm mt-1" data-astro-cid-empm35dy>
Crea el primer operador usando el botón "Nuevo
                            Operador"
</p> </div>` : renderTemplate`<div class="overflow-x-auto" data-astro-cid-empm35dy> <table class="w-full text-left" data-astro-cid-empm35dy> <thead data-astro-cid-empm35dy> <tr class="bg-surface-container-low text-outline text-xs font-bold uppercase tracking-widest" data-astro-cid-empm35dy> <th class="px-6 py-4" data-astro-cid-empm35dy>Operador</th> <th class="px-6 py-4" data-astro-cid-empm35dy>Email</th> <th class="px-6 py-4 text-center" data-astro-cid-empm35dy>Admin</th> <th class="px-6 py-4 text-center" data-astro-cid-empm35dy>
Estado
</th> <th class="px-6 py-4 text-center" data-astro-cid-empm35dy>
Fecha Creación
</th> <th class="px-6 py-4 text-right" data-astro-cid-empm35dy>
Acciones
</th> </tr> </thead> <tbody class="divide-y divide-outline-variant/10" data-astro-cid-empm35dy> ${operadores.map((op) => renderTemplate`<tr class="operador-row hover:bg-surface-container-low/50 transition-colors"${addAttribute(op.activo, "data-activo")} data-astro-cid-empm35dy> <td class="px-6 py-5" data-astro-cid-empm35dy> <div class="flex items-center gap-3" data-astro-cid-empm35dy> <div${addAttribute(`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${op.activo ? "bg-primary text-white" : "bg-surface-container-highest text-outline"}`, "class")} data-astro-cid-empm35dy> ${op.nombre?.charAt(0) || op.email?.charAt(0) || "?"} </div> <div data-astro-cid-empm35dy> <p class="font-semibold text-on-surface" data-astro-cid-empm35dy> ${op.nombre}${" "} ${op.apellido || ""} </p> <p class="text-xs text-outline font-mono" data-astro-cid-empm35dy> ${op.id_operadores?.slice(
    0,
    8
  ) || "—"}
...
</p> </div> </div> </td> <td class="px-6 py-5" data-astro-cid-empm35dy> <p class="text-sm text-on-surface" data-astro-cid-empm35dy> ${op.email || "—"} </p> </td> <td class="px-6 py-5 text-center" data-astro-cid-empm35dy> ${op.is_admin ? renderTemplate`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700" data-astro-cid-empm35dy> <span class="material-symbols-outlined text-xs" data-astro-cid-empm35dy>
verified
</span>
Sí
</span>` : renderTemplate`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-surface-container-highest text-outline" data-astro-cid-empm35dy>
No
</span>`} </td> <td class="px-6 py-5 text-center" data-astro-cid-empm35dy> ${op.activo ? renderTemplate`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700" data-astro-cid-empm35dy> <span class="material-symbols-outlined text-xs" data-astro-cid-empm35dy>
check_circle
</span>
Activo
</span>` : renderTemplate`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700" data-astro-cid-empm35dy> <span class="material-symbols-outlined text-xs" data-astro-cid-empm35dy>
cancel
</span>
Inactivo
</span>`} </td> <td class="px-6 py-5 text-center" data-astro-cid-empm35dy> <p class="text-sm text-outline" data-astro-cid-empm35dy> ${formatDate(op.created_at)} </p> </td> <td class="px-6 py-5 text-right" data-astro-cid-empm35dy> <div class="flex items-center justify-end gap-2" data-astro-cid-empm35dy> <button class="btn-toggle-estado p-2 rounded-lg hover:bg-surface-container-low transition-colors"${addAttribute(op.id_operadores, "data-id")}${addAttribute(op.activo, "data-activo")}${addAttribute(
    op.activo ? "Desactivar operador" : "Activar operador",
    "title"
  )} data-astro-cid-empm35dy> ${op.activo ? renderTemplate`<span class="material-symbols-outlined text-error" data-astro-cid-empm35dy>
person_off
</span>` : renderTemplate`<span class="material-symbols-outlined text-emerald-600" data-astro-cid-empm35dy>
person_pin
</span>`} </button> </div> </td> </tr>`)} </tbody> </table> </div>`} </div> </div>  <dialog id="modal-nuevo-operador" class="modal" data-astro-cid-empm35dy> <div class="modal-content" data-astro-cid-empm35dy> <div class="modal-header" data-astro-cid-empm35dy> <div class="modal-title-group" data-astro-cid-empm35dy> <div class="modal-icon" data-astro-cid-empm35dy> <span class="material-symbols-outlined text-2xl" data-astro-cid-empm35dy>person_add</span> </div> <div data-astro-cid-empm35dy> <h3 class="font-headline text-lg font-bold" data-astro-cid-empm35dy>
Nuevo Operador
</h3> </div> </div> <button id="btn-cerrar-modal" class="modal-close" data-astro-cid-empm35dy> <span class="material-symbols-outlined" data-astro-cid-empm35dy>close</span> </button> </div> <div class="modal-body" data-astro-cid-empm35dy> <form id="form-nuevo-operador" class="space-y-4" data-astro-cid-empm35dy> <div data-astro-cid-empm35dy> <label class="block text-sm font-semibold text-on-surface mb-2" data-astro-cid-empm35dy>Nombre</label> <input type="text" id="input-nombre" required class="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Nombre del operador" data-astro-cid-empm35dy> </div> <div data-astro-cid-empm35dy> <label class="block text-sm font-semibold text-on-surface mb-2" data-astro-cid-empm35dy>Apellido</label> <input type="text" id="input-apellido" class="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Apellido (opcional)" data-astro-cid-empm35dy> </div> <div data-astro-cid-empm35dy> <label class="block text-sm font-semibold text-on-surface mb-2" data-astro-cid-empm35dy>Email</label> <input type="email" id="input-email" required class="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" placeholder="email@ejemplo.com" data-astro-cid-empm35dy> </div> <div data-astro-cid-empm35dy> <label class="block text-sm font-semibold text-on-surface mb-2" data-astro-cid-empm35dy>Contraseña</label> <input type="password" id="input-password" required minlength="6" class="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Mínimo 6 caracteres" data-astro-cid-empm35dy> </div> <div data-astro-cid-empm35dy> <label class="block text-sm font-semibold text-on-surface mb-2" data-astro-cid-empm35dy>Teléfono</label> <input type="tel" id="input-telefono" class="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" placeholder="55 1234 5678" data-astro-cid-empm35dy> </div> <div class="flex items-center gap-3" data-astro-cid-empm35dy> <input type="checkbox" id="input-is-admin" class="w-5 h-5 rounded border-outline-variant" data-astro-cid-empm35dy> <label for="input-is-admin" class="text-sm font-medium text-on-surface" data-astro-cid-empm35dy>
¿Es administrador?
</label> </div> <div class="pt-4" data-astro-cid-empm35dy> <button type="submit" id="btn-crear-operador" class="w-full py-3 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 transition-colors flex items-center justify-center gap-2" data-astro-cid-empm35dy> <span class="material-symbols-outlined" data-astro-cid-empm35dy>save</span>
Crear Operador
</button> </div> </form> </div> </div> </dialog> ${renderScript($$result2, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/config/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/config/index.astro", void 0);
const $$file = "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/config/index.astro";
const $$url = "/dashboard/config";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
