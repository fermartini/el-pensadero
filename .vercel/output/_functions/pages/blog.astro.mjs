/* empty css                                 */
import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, g as addAttribute, f as renderTransition } from '../chunks/astro/server_3HEhe0y4.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_vsG4t4ta.mjs';
import { $ as $$Layout, a as $$Footer } from '../chunks/Footer_Opsi4B3Z.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  const importantTrue = posts.filter((post) => post.data.important === true);
  const importantFalse = posts.filter((post) => post.data.important !== true);
  let orderedItems = [];
  let i = 0, j = 0;
  while (i < importantTrue.length || j < importantFalse.length) {
    if (i < importantTrue.length) {
      orderedItems.push(importantTrue[i]);
      i++;
    }
    let added = 0;
    while (added < 4 && j < importantFalse.length) {
      orderedItems.push(importantFalse[j]);
      j++;
      added++;
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "El Blog de Harry Potter - El Pensadero", "description": "Descubr\xED nuevas teor\xEDas, datos curiosos y diferencias entre los libros y las pelis del mundo m\xE1gico", "url": "/blog" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-full w-full flex gap-7 items-center justify-center"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto mt-32 lg:mx-0"> <h1 class="text-4xl font-semibold tracking-tight text-pretty sm:text-6xl text-[#928952] text-center">
EL BLOG DE HARRY POTTER
</h1> <h2 class="mt-2 text-lg/8 sm:text-xl text-center">
Un rincón para fans: teorías, datos y toda la magia de Harry Potter.
</h2> </div> <div class="mx-auto mt-10 grid grid-col-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2"> ${orderedItems.map((post) => {
    const { data } = post;
    const {
      title,
      author,
      img,
      description,
      date,
      readtime,
      slug,
      tags,
      important,
      category,
      lang
    } = data;
    return renderTemplate`<article${addAttribute([
      "flex   items-start justify-between gap-5 flex-col bg-gray-600 bg-opacity-20 rounded-xl",
      {
        "lg:col-span-2 lg:flex-row": important,
        "col-span-1 ": !important
      }
    ], "class:list")}> <div${addAttribute([
      "flex items-center justify-cente",
      {
        "w-full": !important
      }
    ], "class:list")}> <a${addAttribute(`/blog/${slug}`, "href")}> <img${addAttribute(img, "src")}${addAttribute(title, "alt")} width="1408" height="768"${addAttribute(renderTransition($$result2, "k6azchat", "", `img-${slug}`), "data-astro-transition-scope")}> </a> </div> <div${addAttribute([
      "col-span-3  px-5 flex flex-col flex-grow justify-between",
      {
        "pt-5 ": important,
        "pt-2": !important
      }
    ], "class:list")}> <div class="flex items-center gap-x-4 text-xs "> <time datetime="2020-03-16" class="text-gray-500"> ${date} </time> <a${addAttribute(`/blog/${slug}`, "href")} class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"> ${category} </a> </div> <div class="group relative"> <h3${addAttribute([
      "mt-3 font-semibold text-gray-200 ",
      {
        "text-3xl": important,
        "text-2xl": !important
      }
    ], "class:list")}> <a${addAttribute(`/blog/${slug}`, "href")}> <span class="absolute inset-0 "></span> ${title} </a> </h3> <p class="mt-5 line-clamp-3 text-lg text-gray-400"> ${description} </p> </div> <div class="relative flex items-end justify-around gap-x-4 "> <div class="text-sm/6 p-5"> <p class="font-semibold text-gray-200"> <a${addAttribute(`/blog/${slug}`, "href")}> <span class="absolute inset-0"></span>
Por ${author} </a> </p> <p class="text-gray-500">Lectura: ${readtime}</p> </div> <div class="justify-center  flex z-10 "> <a${addAttribute(`/blog/${slug}`, "href")} class="text-white border-slate-600 rounded-xl p-5 border text-2xl font-medium mt-10 hover:border-[#928952] transition-all">
🪄 Leer Mas
</a> </div> </div> </div> </article>`;
  })} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/src/pages/blog/index.astro", "self");

const $$file = "E:/Desarrollo-Web/Proyectos/el-pensadero/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
