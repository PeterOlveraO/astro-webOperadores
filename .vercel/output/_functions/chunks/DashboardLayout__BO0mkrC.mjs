import { c as createComponent } from './astro-component_BfP70hli.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent, p as renderSlot } from './entrypoint_Di8hritT.mjs';
import { $ as $$BaseLayout } from './BaseLayout_ilACEse6.mjs';
import 'clsx';

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Sidebar;
  const currentPath = Astro2.url.pathname;
  const isAdmin = Astro2.cookies.get("operador_is_admin")?.value === "true";
  const navItems = [
    { icon: "dashboard", label: "Dashboard", href: "/dashboard" },
    { icon: "assignment", label: "Solicitudes", href: "/dashboard/solicitudes" },
    { icon: "storefront", label: "Marketplace", href: "/dashboard/marketplace" },
    { icon: "inventory_2", label: "Pedidos", href: "/dashboard/pedidos" },
    { icon: "shopping_cart", label: "Carrito", href: "/dashboard/carrito" },
    ...isAdmin ? [{ icon: "admin_panel_settings", label: "Configuración", href: "/dashboard/config" }] : [],
    { icon: "logout", label: "Cerrar Sesión", href: "/logout" }
  ];
  return renderTemplate`${maybeRenderHead()}<aside class="h-screen w-64 fixed left-0 top-0 flex flex-col bg-[#f3f3f6] py-6 pl-4 z-50"> <div class="mb-10 px-4"> <h1 class="font-headline font-extrabold text-[#004d75] text-2xl tracking-tight">Coperativa</h1> <p class="text-xs font-medium text-[#44474e] uppercase tracking-widest mt-1">Operator Portal</p> </div> <nav class="flex-1 space-y-1 pr-4"> ${navItems.map((item) => {
    const isActive = currentPath === item.href || item.href !== "/dashboard" && currentPath.startsWith(item.href);
    return isActive ? renderTemplate`<a${addAttribute(item.href, "href")} class="flex items-center gap-3 px-4 py-3 bg-white text-[#004d75] rounded-l-xl font-semibold transition-all duration-200 ease-in-out"> <span class="material-symbols-outlined">${item.icon}</span> <span class="font-body text-sm">${item.label}</span> </a>` : renderTemplate`<a${addAttribute(item.href, "href")} class="flex items-center gap-3 px-4 py-3 text-[#44474e] hover:text-[#004d75] hover:bg-white/50 transition-all duration-200 ease-in-out"> <span class="material-symbols-outlined">${item.icon}</span> <span class="font-body text-sm">${item.label}</span> </a>`;
  })} </nav> </aside>`;
}, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/components/Sidebar.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Navbar;
  const navLinks = [
    { label: "Marketplace", href: "/dashboard/marketplace" },
    { label: "Carrito", href: "/dashboard/carrito" },
    { label: "Pedidos", href: "/dashboard/pedidos" }
  ];
  const operadorEmail = decodeURIComponent(
    Astro2.cookies.get("operador_email")?.value ?? ""
  );
  const nombreDisplay = operadorEmail ? operadorEmail.split("@")[0] : "Operador";
  const iniciales = nombreDisplay.split(".").map((w) => w[0]?.toUpperCase() ?? "").join("").slice(0, 2) || "OP";
  const isAdmin = Astro2.cookies.get("operador_is_admin")?.value === "true";
  return renderTemplate`${maybeRenderHead()}<header class="w-full sticky top-0 z-40 flex justify-between items-center px-8 h-16 bg-white shadow-sm border-b border-[#c0c7d0]/15"> <div class="flex items-center gap-8 flex-1"> <nav class="flex items-center gap-6"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-sm font-semibold text-on-surface hover:text-primary transition-colors"> ${link.label} </a>`)} </nav> </div> <div class="flex items-center gap-4"> <!-- 
    <button class="p-2 rounded-full hover:bg-[#f3f3f6] transition-colors relative">
      <span class="material-symbols-outlined text-[#44474e]">notifications</span>
      <span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
    </button>

    <button class="p-2 rounded-full hover:bg-[#f3f3f6] transition-colors">
      <span class="material-symbols-outlined text-[#44474e]">help_outline</span>
    </button>
--> <div class="h-8 w-[1px] bg-outline-variant/30 mx-2"></div> <div class="flex items-center gap-3 pl-2"> <div class="text-right"> <p class="text-xs font-semibold text-on-surface">${nombreDisplay}</p> <p${addAttribute(`text-[10px] uppercase tracking-wider ${isAdmin ? "text-primary font-bold" : "text-outline"}`, "class")}> ${isAdmin ? "ADMIN" : "OPERADOR"} </p> </div> <div${addAttribute(`w-9 h-9 rounded-full flex items-center justify-center ring-2 ${isAdmin ? "bg-primary text-white ring-primary" : "bg-primary-container text-on-primary-container ring-primary/10"}`, "class")}> <span class="text-sm font-bold">${iniciales}</span> </div> </div> </div> </header>`;
}, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/components/Navbar.astro", void 0);

const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const { title = "Dashboard · Operadores" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-background text-on-background font-body selection:bg-primary/20"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <main class="ml-64 min-h-screen"> ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderSlot($$result2, $$slots["default"])} </main> </div> ` })}`;
}, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/layouts/DashboardLayout.astro", void 0);

export { $$DashboardLayout as $ };
