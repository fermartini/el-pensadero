import { c as createAstro, a as createComponent, m as maybeRenderHead, g as addAttribute, d as renderTemplate, r as renderComponent, b as renderScript } from './astro/server_3HEhe0y4.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro("https://elpensadero.vercel.app");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { title, slug, blank = null } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="justify-center w-full flex"> <a${addAttribute(`prefetch${blank ? " noopener noreferrer" : ""}`, "rel")}${addAttribute(slug, "href")} class="text-white border-slate-600 rounded-xl p-5 border text-2xl font-medium mt-10 hover:border-[#928952] transition-all"${addAttribute(blank, "target")}>${title}</a> </div>`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/src/components/Button.astro", void 0);

const urlPattern = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|shorts\/)??([A-Za-z0-9-_]{11})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
function matcher(url) {
  const match = url.match(urlPattern);
  return match?.[3];
}

const $$Astro = createAstro("https://elpensadero.vercel.app");
const $$YouTube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$YouTube;
  const {
    id,
    poster,
    posterQuality = "default",
    title,
    ...attrs
  } = Astro2.props;
  const idRegExp = /^[A-Za-z0-9-_]+$/;
  function extractID(idOrUrl) {
    if (idRegExp.test(idOrUrl)) return idOrUrl;
    return matcher(idOrUrl);
  }
  const videoid = extractID(id);
  const posterFile = {
    max: "maxresdefault",
    high: "sddefault",
    default: "hqdefault",
    low: "default"
  }[posterQuality] || "hqdefault";
  const posterURL = poster || `https://i.ytimg.com/vi/${videoid}/${posterFile}.jpg`;
  const href = `https://youtube.com/watch?v=${videoid}`;
  return renderTemplate`${renderComponent($$result, "lite-youtube", "lite-youtube", { "videoid": videoid, "title": title, "data-title": title, ...attrs, "style": `background-image: url('${posterURL}');` }, { "default": () => renderTemplate` ${maybeRenderHead()}<a${addAttribute(href, "href")} class="lty-playbtn"> <span class="lyt-visually-hidden">${attrs.playlabel || "Play"}</span> </a> ` })} ${renderScript($$result, "E:/Desarrollo-Web/Proyectos/el-pensadero/node_modules/@astro-community/astro-embed-youtube/YouTube.astro?astro&type=script&index=0&lang.ts")} `;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/node_modules/@astro-community/astro-embed-youtube/YouTube.astro", void 0);

export { $$Button as $, $$YouTube as a };
