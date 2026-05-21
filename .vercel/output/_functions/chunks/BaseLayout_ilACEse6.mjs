import { c as createComponent } from './astro-component_BfP70hli.mjs';
import 'piccolore';
import { q as renderHead, p as renderSlot, r as renderTemplate } from './entrypoint_Di8hritT.mjs';
import 'clsx';

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Operadores" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
