/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate, u as unescapeHTML, f as renderTransition, m as maybeRenderHead } from '../../chunks/astro/server_3HEhe0y4.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_vsG4t4ta.mjs';
import { $ as $$Layout, a as $$Footer } from '../../chunks/Footer_Opsi4B3Z.mjs';
import { $ as $$Button, a as $$YouTube } from '../../chunks/YouTube_DyxZXO_8.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://elpensadero.vercel.app");
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { id: post.data.slug },
    props: { post }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { post } = Astro2.props;
  const { data } = post;
  const {
    title,
    img,
    description,
    slug,
    videoId,
    date,
    author,
    category,
    dateFormatted,
    tags,
    durationVideo
  } = data;
  const { Content } = await renderEntry(post);
  const generateBlogJSONLD = (post2) => {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post2.data.title,
      description: post2.data.description,
      image: `https://elpensadero.vercel.app${post2.data.img}`,
      url: `https://elpensadero.vercel.app/blog/${post2.data.slug}`,
      datePublished: post2.data.dateFormatted,
      dateModified: post2.data.dateFormatted,
      author: {
        "@type": "Person",
        name: post2.data.author
      },
      publisher: {
        "@type": "Organization",
        name: "El Pensadero",
        url: "https://elpensadero.vercel.app",
        logo: {
          "@type": "ImageObject",
          url: "https://elpensadero.vercel.app/favicon.png",
          width: "48",
          // Add dimensions
          height: "48"
        }
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://elpensadero.vercel.app/blog/${post2.data.slug}`
      },
      video: {
        "@type": "VideoObject",
        name: post2.data.title,
        description: post2.data.description,
        thumbnailUrl: `https://elpensadero.vercel.app${post2.data.img}`,
        duration: durationVideo,
        uploadDate: post2.data.dateFormatted,
        embedUrl: `https://www.youtube.com/embed/${post2.data.videoId}`,
        contentUrl: `https://www.youtube.com/watch?v=${post2.data.videoId}`
      },
      keywords: post2.data.tags.join(", "),
      articleSection: post2.data.category
    });
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "img": img, "url": `/blog/${slug}` }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="h-full w-full gap-7 flex items-center justify-center mt-20 mx-auto px-4"> <article class="max-w-5xl w-full flex flex-col items-center justify-center"> <h1 class="text-5xl font-bold text-[#928952] mb-5 text-center"> ', ' </h1> <h2 class="mb-5 text-xl text-gray-400 text-center">', "</h2> ", ' <script type="application/ld+json">', "<\/script> ", " ", " </article> </main> ", " "])), maybeRenderHead(), title, description, renderComponent($$result2, "YouTube", $$YouTube, { "id": videoId, "poster": img, "class": "w-full h-auto rounded-xl shadow-lg", "playlabel": `Reproducir: ${title}`, "data-astro-transition-scope": renderTransition($$result2, "4jmn5afk", "", `img-${slug}`) }), unescapeHTML(generateBlogJSONLD(post)), renderComponent($$result2, "Content", Content, {}), renderComponent($$result2, "Button", $$Button, { "title": "\u{1F519} VOLVER \u{1F9D9}\u200D\u2642\uFE0F", "slug": "/blog" }), renderComponent($$result2, "Footer", $$Footer, {})) })}`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/src/pages/blog/[id].astro", "self");

const $$file = "E:/Desarrollo-Web/Proyectos/el-pensadero/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
