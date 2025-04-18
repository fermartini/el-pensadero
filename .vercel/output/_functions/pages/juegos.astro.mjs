/* empty css                                 */
import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_3HEhe0y4.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Footer } from '../chunks/Footer_Opsi4B3Z.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Juegos - El Pensadero", "description": "Juegos y preguntas sobre el universo de Harry Potter", "url": "/juegos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-[100vh] w-full flex items-center justify-center"> <h1 class="opacity-0 animate-fadeIn font-cinzel font-semibold text-5xl xl:text-9xl text-center text-[#928952] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
PROXIMAMENTE....
</h1> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/src/pages/juegos/index.astro", void 0);

const $$file = "E:/Desarrollo-Web/Proyectos/el-pensadero/src/pages/juegos/index.astro";
const $$url = "/juegos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
