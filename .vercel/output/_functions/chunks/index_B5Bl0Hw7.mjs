import { c as createAstro, a as createComponent, r as renderComponent, b as renderScript, d as renderTemplate } from './astro/server_3HEhe0y4.mjs';
import 'kleur/colors';

const $$Astro = createAstro("https://elpensadero.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "E:/Desarrollo-Web/Proyectos/el-pensadero/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/Desarrollo-Web/Proyectos/el-pensadero/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

export { $$Index as $ };
