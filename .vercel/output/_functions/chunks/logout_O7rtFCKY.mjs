import { c as createComponent } from './astro-component_BfP70hli.mjs';
import 'piccolore';
import './entrypoint_Di8hritT.mjs';
import 'clsx';

const $$Logout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Logout;
  Astro2.cookies.delete("id_operador", { path: "/" });
  Astro2.cookies.delete("operador_id", { path: "/" });
  Astro2.cookies.delete("operador_email", { path: "/" });
  Astro2.cookies.delete("operador_rol", { path: "/" });
  Astro2.cookies.delete("operador_is_admin", { path: "/" });
  Astro2.cookies.delete("access_token", { path: "/" });
  return Astro2.redirect("/");
}, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/logout.astro", void 0);

const $$file = "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/logout.astro";
const $$url = "/logout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Logout,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
