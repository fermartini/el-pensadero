import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Daq7GHNR.mjs';
import { manifest } from './manifest_Ca_w0Ql3.mjs';

const serverIslandMap = new Map([
	['Analytics', () => import('./chunks/Analytics_CQOYoRXJ.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/aboutme.astro.mjs');
const _page2 = () => import('./pages/blog/_id_.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/juegos.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/aboutme/index.astro", _page1],
    ["src/pages/blog/[id].astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/juegos/index.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8be1e596-3720-4a16-8e12-35638b2e7d20",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
