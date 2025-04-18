import { a as createComponent, m as maybeRenderHead, h as renderSlot, d as renderTemplate, c as createAstro, r as renderComponent } from './astro/server_3HEhe0y4.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image } from './_astro_assets_CP82IRx_.mjs';

const $$Article = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-800 h-fit w-fit rounded-xl gap-7 items-center justify-center mt-20 px-10"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/src/components/blog/Article.astro", void 0);

const $$Astro = createAstro("https://elpensadero.vercel.app");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    title = null,
    imgSrc = null,
    imgAlt = "",
    loading = "lazy"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mt-6 grid grid-cols-1 mb-10"> ${title && renderTemplate`<header class=""> <h3 class="text-4xl font-semibold mt-6 text-gray-100">${title}</h3> </header>`} <div class="leading-loose text-gray-300 text-lg w-fit mt-3"> ${renderSlot($$result, $$slots["default"])} </div> <div> ${imgSrc && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mt-4", "src": imgSrc, "alt": imgAlt, "width": "1408", "height": "768", "loading": loading })}`} </div> </section>`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/src/components/blog/Section.astro", void 0);

export { $$Section as $, $$Article as a };
