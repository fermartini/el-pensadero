import { a as createComponent, m as maybeRenderHead, d as renderTemplate, c as createAstro, g as addAttribute, b as renderScript, r as renderComponent, n as renderHead, h as renderSlot } from './astro/server_3HEhe0y4.mjs';
import 'kleur/colors';
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
/* empty css                         */
import { $ as $$Index } from './index_B5Bl0Hw7.mjs';

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="fixed w-full z-20 top-0 start-0 border-b border-gray-900 dark:border-gray-800"> <div class="max-w-screen-xl flex flex-wrap justify-end xl:items-center xl:justify-center mx-auto p-4 backdrop-blur-sm"> <div class="items-center justify-between flex md:w-auto md:order-1"> <ul class="flex md:p-0 rounded-lg md:gap-52 space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-bold"> <li> <a href="/#home" class="block py-2 px-3 text-gray-300 hover:text-[#928952] hover:scale-110 transition-all" aria-current="page">Home</a> </li> <li> <a href="/blog" class="block py-2 px-3 text-gray-300 hover:text-[#928952] hover:scale-110 transition-all">Blog</a> </li> <li> <a href="/#shorts" class="block py-2 px-3 text-gray-300 hover:text-[#928952] hover:scale-110 transition-all">Videos</a> </li> <li> <a href="/#juegos" class="block py-2 px-3 text-gray-300 hover:text-[#928952] hover:scale-110 transition-all">Juegos</a> </li> </ul> </div> </div> </nav>`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/src/components/NavBar.astro", void 0);

function ParticulasMagicas() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsx(
    Particles,
    {
      id: "tsparticles",
      init: particlesInit,
      options: {
        particles: {
          number: {
            value: 50,
            density: { enable: true, value_area: 800 }
          },
          color: { value: "#6b7280" },
          shape: { type: "circle" },
          opacity: {
            value: 0.5,
            random: true
          },
          size: {
            value: 3,
            random: true
          },
          move: {
            enable: true,
            speed: 1
          }
        },
        background: { color: "transparent" }
      }
    }
  ) });
}

const $$Astro$1 = createAstro("https://elpensadero.vercel.app");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "E:/Desarrollo-Web/Proyectos/el-pensadero/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro("https://elpensadero.vercel.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    url,
    img = "/assets/img/banner-el-pensadero.webp"
  } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="keywords" content="Harry Potter, teorías Harry Potter, datos curiosos, El Pensadero, diferencias libros películas, magia, Hogwarts, Dumbledore, Ron, What If Harry Potter"><meta name="author" content="El Pensadero - Harry Potter Teorías y Curiosidades"><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(`https://elpensadero.vercel.app${url}`, "content")}><meta property="og:image"${addAttribute(`https://elpensadero.vercel.app${img}`, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(`https://elpensadero.vercel.app${img}`, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}<meta name="google-site-verification" content="Lzz4GUNIS9wSvaAtClUBTWKVkKNR16FIRwcgBjMlLrM">${renderComponent($$result, "Analytics", $$Index, { "mode": "production", "server:defer": true, "server:component-directive": "defer", "server:component-path": "@vercel/analytics/astro", "server:component-export": "default", "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="font-spectral overflow-x-hidden min-h-screen relative" data-astro-cid-sckkx6r4> <div class="absolute inset-0 z-10 pointer-events-none" data-astro-cid-sckkx6r4> ${renderComponent($$result, "ParticulasMagicas", ParticulasMagicas, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/Desarrollo-Web/Proyectos/el-pensadero/src/components/ParticulasMagicas.jsx", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })} </div> <div id="scroll-magic" class="pointer-events-none fixed inset-0 z-50 hidden" data-astro-cid-sckkx6r4> <div class="absolute w-4 h-4 rounded-full bg-yellow-300 animate-ping" data-astro-cid-sckkx6r4></div> </div> <div class="relative h-fit bg-slate-950 z-0 overflow-hidden" data-astro-cid-sckkx6r4> <!-- ESTE DIV ES EL CIRCULO DEL BORDE IZQUIERDO --> <div class="absolute bottom-0 left-[-50%] top-[-5%] xl:left-[-20%] xl:right-0 xl:top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" data-astro-cid-sckkx6r4></div> <!-- ESTE DIV ES EL CIRCULO DEL BORDE DERECHO --> <div class="absolute bottom-0 left-[50%] md:left-[90%] top-[10%] xl:top-[12%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" data-astro-cid-sckkx6r4></div> ${renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/src/layouts/Layout.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#0f0f0f] py-10 text-center mt-10"> <h2 class="text-white text-2xl font-semibold mb-6">El Pensadero</h2> <div class="flex justify-center items-center space-x-8"> <!-- YouTube --> <a href="https://www.youtube.com/@elpensadero_HP?sub_confirmation=1" target="_blank" aria-label="YouTube" class="hover:scale-110 transition-transform"> <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 fill-white hover:fill-[#FF0000] transition-colors duration-300" viewBox="0 0 24 24"> <path d="M19.615 3.184C21.063 3.6 22.1 4.637 22.516 6.085 23.27 8.743 23.27 12 23.27 12s0 3.257-.754 5.915c-.416 1.448-1.453 2.485-2.901 2.901C17.958 21.57 12 21.57 12 21.57s-5.958 0-8.615-.754C1.937 20.7.9 19.663.484 18.215-.27 15.557-.27 12-.27 12s0-3.257.754-5.915C1.2 4.637 2.237 3.6 3.685 3.184 6.342 2.43 12 2.43 12 2.43s5.958 0 7.615.754zM9.545 15.568l6.182-3.568-6.182-3.568v7.136z"></path> </svg> </a> <!-- TikTok --> <a href="https://www.tiktok.com/@elpensadero_hp" target="_blank" aria-label="TikTok" class="hover:scale-110 transition-transform"> <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 fill-white hover:fill-[#25F4EE] transition-colors duration-300" viewBox="0 0 24 24"> <path d="M16 8.438c1.093.752 2.38 1.248 3.75 1.36v2.482c-1.708-.072-3.283-.59-4.615-1.458v5.738a6.75 6.75 0 1 1-6.75-6.75 6.667 6.667 0 0 1 1.5.175v2.617a3.938 3.938 0 0 0-1.5-.293 4.125 4.125 0 1 0 4.125 4.125V2.25H16v6.188z"></path> </svg> </a> <!-- Instagram --> <a href="https://www.instagram.com/elpensadero_hp/" target="_blank" aria-label="Instagram" class="hover:scale-110 transition-transform"> <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 fill-white hover:fill-[#C13584] transition-colors duration-300" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.246 2.43.415a4.92 4.92 0 0 1 1.757 1.01 4.92 4.92 0 0 1 1.01 1.757c.169.46.359 1.26.415 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.246 1.97-.415 2.43a4.92 4.92 0 0 1-1.01 1.757 4.92 4.92 0 0 1-1.757 1.01c-.46.169-1.26.359-2.43.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.246-2.43-.415a4.92 4.92 0 0 1-1.757-1.01 4.92 4.92 0 0 1-1.01-1.757c-.169-.46-.359-1.26-.415-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.246-1.97.415-2.43a4.92 4.92 0 0 1 1.01-1.757 4.92 4.92 0 0 1 1.757-1.01c.46-.169 1.26-.359 2.43-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.012 7.052.07 5.771.129 4.768.319 3.936.608a7.068 7.068 0 0 0-2.55 1.664A7.068 7.068 0 0 0 .608 4.823c-.289.832-.479 1.835-.538 3.116C.012 8.333 0 8.736 0 12c0 3.264.012 3.668.07 4.948.059 1.281.249 2.284.538 3.116a7.068 7.068 0 0 0 1.664 2.55 7.068 7.068 0 0 0 2.55 1.664c.832.289 1.835.479 3.116.538C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.281-.059 2.284-.249 3.116-.538a7.068 7.068 0 0 0 2.55-1.664 7.068 7.068 0 0 0 1.664-2.55c.289-.832.479-1.835.538-3.116.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.059-1.281-.249-2.284-.538-3.116a7.068 7.068 0 0 0-1.664-2.55A7.068 7.068 0 0 0 20.063.608c-.832-.289-1.835-.479-3.116-.538C15.668.012 15.264 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"></path> </svg> </a> </div> <p class="text-gray-400 text-sm mt-6">© 2025 El Pensadero</p> </footer>`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Footer as a };
