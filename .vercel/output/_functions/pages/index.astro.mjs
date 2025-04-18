/* empty css                                 */
import { a as createComponent, m as maybeRenderHead, d as renderTemplate, r as renderComponent, u as unescapeHTML, g as addAttribute, f as renderTransition } from '../chunks/astro/server_3HEhe0y4.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$YouTube, $ as $$Button } from '../chunks/YouTube_DyxZXO_8.mjs';
import { $ as $$Layout, a as $$Footer } from '../chunks/Footer_Opsi4B3Z.mjs';
import { g as getCollection } from '../chunks/_astro_content_vsG4t4ta.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="relative h-[calc(100vh-100px)] xl:min-h-screen w-full flex flex-col items-center justify-center" aria-labelledby="El Pensadero - la pagina donde encontraras todo sobre el universo de Harry Potter, noticias juegos y videos" id="home"> <h1 class="opacity-0 animate-fadeIn font-cinzel font-semibold text-5xl xl:text-9xl text-center text-[#928952] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
EL PENSADERO
<span class="font-cormorant font-extralight block text-lg xl:text-3xl mt-5 text-gray-400">
Un portal al mundo de HARRY POTTER y sus secretos y teorias
</span> </h1> <!-- Flecha para scroll --> <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20"> <a href="#blog" class="text-xl text-white"> <div class="flex justify-center items-center"> <!-- Flecha mágica --> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 animate-bounce sm:w-10 sm:h-10 lg:w-12 lg:h-12"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </a> </div> </main>`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/src/components/Home.astro", void 0);

const shorts = [
	{
		title: "Dumbledore estaba ENAMORADO de su peor enemigo- Harry Potter",
		description: "Short de menos de 1 minuto",
		src: "https://www.youtube.com/embed/f3rRvuxD75Q",
		id: "dumbledoreEnamorado",
		type: "short",
		thumbnail: "/assets/img/videos/dumbledore-batalla-magica-grindelwald.webp",
		uploadDate: "2025-01-27T09:00:00-03:00",
		videoId: "f3rRvuxD75Q",
		duration: "PT54S"
	},
	{
		title: "Ron y Hermione casi no fueron pareja en la historia de Harry Potter",
		description: "Short de menos de 1 minuto",
		src: "https://www.youtube.com/embed/PXlaRyHrlGI",
		id: "HarryyHermione",
		type: "short",
		thumbnail: "/assets/img/videos/harry-hermione-ron-enamorados.webp",
		uploadDate: "2025-03-20T11:00:00-03:00",
		videoId: "PXlaRyHrlGI",
		duration: "PT56S"
	},
	{
		title: "Las muertes más impactantes en la saga de Harry Potter",
		description: "Short de menos de 1 minuto",
		src: "https://www.youtube.com/embed/gtoVX7ya7l4",
		id: "muertesEnHarryPotter",
		type: "short",
		thumbnail: "/assets/img/videos/muertes-del-mundo-magico.webp",
		uploadDate: "2025-02-14T10:00:00-03:00",
		videoId: "gtoVX7ya7l4",
		duration: "PT1M01S"
	}
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Shorts = createComponent(($$result, $$props, $$slots) => {
  const generateVideoJSONLD = (video) => {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: video.title,
      description: video.description,
      uploadDate: video.uploadDate,
      contentUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
      embedUrl: `https://www.youtube.com/embed/${video.videoId}`,
      thumbnailUrl: `https://elpensadero.vercel.app${video.thumbnail}`,
      duration: video.duration
    });
  };
  return renderTemplate`${maybeRenderHead()}<section id="shorts" class="min-h-screen w-full flex flex-col items-center justify-center px-4"> <h2 class="text-3xl md:text-6xl font-cinzel text-center text-[#928952] mb-10 pt-20">
Shorts mágicos
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"> ${shorts.map((video) => {
    return renderTemplate(_a || (_a = __template(['<article class="video-card relative group w-full max-w-[360px] aspect-[9/16] overflow-hidden rounded-xl shadow-lg cursor-pointer"', "", "", "> ", ' <script type="application/ld+json">', "<\/script> </article>"])), addAttribute(video.src, "data-src"), addAttribute(video.title, "data-title"), addAttribute(`Video corto: ${video.title}`, "aria-label"), renderComponent($$result, "YouTube", $$YouTube, { "id": video.videoId, "poster": video.thumbnail, "title": video.title, "class": "w-full h-full object-cover", "playlabel": `Reproducir: ${video.title}` }), unescapeHTML(generateVideoJSONLD(video)));
  })} </div> ${renderComponent($$result, "Button", $$Button, { "title": "\u2728 M\xE1s Videos", "slug": "https://www.youtube.com/@elpensadero_HP?sub_confirmation=1", "blank": "_blank" })} </section>`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/src/components/Shorts.astro", void 0);

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  const shuffledPosts = posts.toSorted(() => 0.5 - Math.random());
  const limitedPosts = shuffledPosts.slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section aria-labelledby="noticias-title" id="blog"> <h2 class="text-3xl md:text-6xl font-cinzel text-center text-[#928952] mb-10 pt-20" id="noticias-title">
Últimas noticias
</h2> <div class="md:flex justify-center gap-8 grid grid-cols-1"> ${limitedPosts.map((post) => {
    const { data } = post;
    const { title, img, description, slug } = data;
    return renderTemplate`<article class="flex flex-col m-5 xl:m-0  max-w-sm border rounded-lg shadow-sm bg-gray-800 border-gray-700"> <a${addAttribute(`/blog/${slug}`, "href")}${addAttribute(`Leer m\xE1s sobre: ${title}`, "aria-label")}> <img class="rounded-t-lg"${addAttribute(img, "src")}${addAttribute(title, "alt")} width="1408" height="768" loading="lazy" sizes="(max-width: 768px) 100vw, 33vw"${addAttribute(renderTransition($$result, "q7yqufri", "", `img-${slug}`), "data-astro-transition-scope")}> </a> <div class="p-5 flex flex-col flex-grow"> <a${addAttribute(`/blog/${slug}`, "href")}> <h3 class="mb-2 text-xl xl:text-2xl font-bold tracking-tight  text-white"> ${title} </h3> </a> <div class="mt-auto"> <p class="mb-3 font-normal text-gray-400 text-sm xl:text-lg"> ${description} </p> </div> <div class="mt-auto"> <a${addAttribute(`/blog/${slug}`, "href")} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white 0 rounded-lg  focus:ring-4 focus:outline-none  bg-gray-600 hover:bg-[#928952] focus:ring-gray-800"${addAttribute(`Leer m\xE1s sobre: ${title}`, "aria-label")}>
Leer Mas
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a> </div> </div> </article>`;
  })} </div> ${renderComponent($$result, "Button", $$Button, { "title": "\u{1FA84} M\xE1s art\xEDculos m\xE1gicos", "slug": "/blog" })} </section>`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/src/components/Blog.astro", "self");

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "El Pensadero - Teor\xEDas y curiosidades de Harry Potter", "description": "Explor\xE1 teor\xEDas perturbadoras del universo de Harry Potter. Datos oscuros, curiosidades y secretos que ni Dumbledore quer\xEDa que descubras. Bienvenido a El Pensadero.", "url": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})} ${renderComponent($$result2, "Blog", $$Blog, {})} ${renderComponent($$result2, "Shorts", $$Shorts, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/src/pages/index.astro", void 0);

const $$file = "E:/Desarrollo-Web/Proyectos/el-pensadero/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
