/* empty css                                 */
import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_3HEhe0y4.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Footer } from '../chunks/Footer_Opsi4B3Z.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre mi - El Pensadero", "description": "Sobre mi - El Pensadero", "url": "/aboutme" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative h-[calc(100vh-100px)] xl:min-h-screen w-full flex flex-col items-center justify-center"> <section id="shorts" class="flex flex-col items-center justify-center border px-10 my-10 rounded-full"> <h1 class="text-3xl md:text-6xl font-cinzel text-center text-[#928952] mb-10 pt-20">
Quien es el Pensadero?
</h1> <div class="text-center w-full max-w-6xl text-2xl pb-20"> <p>
En El Pensadero desenterramos los secretos más oscuros del mundo
          mágico. Desde teorías que cambiarán tu visión de Harry Potter, hasta
          datos ocultos y escenas eliminadas que ni en Hogwarts conocían. Si sos
          fan de la saga, este es tu lugar.
</p> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/src/pages/aboutme/index.astro", void 0);

const $$file = "E:/Desarrollo-Web/Proyectos/el-pensadero/src/pages/aboutme/index.astro";
const $$url = "/aboutme";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
