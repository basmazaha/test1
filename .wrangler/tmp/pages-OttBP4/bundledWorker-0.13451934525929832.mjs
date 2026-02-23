var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js/index.js
import { renderers } from "./renderers.mjs";
import { c as createExports, s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_DGJ2KZda.mjs";
import { manifest } from "./manifest_BunSihme.mjs";
globalThis.process ??= {};
globalThis.process.env ??= {};
var serverIslandMap = /* @__PURE__ */ new Map();
var _page0 = /* @__PURE__ */ __name(() => import("./pages/_image.astro.mjs"), "_page0");
var _page1 = /* @__PURE__ */ __name(() => import("./pages/about.astro.mjs"), "_page1");
var _page2 = /* @__PURE__ */ __name(() => import("./pages/api/submit-booking.astro.mjs"), "_page2");
var _page3 = /* @__PURE__ */ __name(() => import("./pages/booking.astro.mjs"), "_page3");
var _page4 = /* @__PURE__ */ __name(() => import("./pages/cancel.astro.mjs"), "_page4");
var _page5 = /* @__PURE__ */ __name(() => import("./pages/en/about.astro.mjs"), "_page5");
var _page6 = /* @__PURE__ */ __name(() => import("./pages/en/booking.astro.mjs"), "_page6");
var _page7 = /* @__PURE__ */ __name(() => import("./pages/en.astro.mjs"), "_page7");
var _page8 = /* @__PURE__ */ __name(() => import("./pages/reschedule.astro.mjs"), "_page8");
var _page9 = /* @__PURE__ */ __name(() => import("./pages/index.astro.mjs"), "_page9");
var pageMap = /* @__PURE__ */ new Map([
  ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/about.astro", _page1],
  ["src/pages/api/submit-booking.ts", _page2],
  ["src/pages/booking.astro", _page3],
  ["src/pages/cancel.astro", _page4],
  ["src/pages/en/about.astro", _page5],
  ["src/pages/en/booking.astro", _page6],
  ["src/pages/en/index.astro", _page7],
  ["src/pages/reschedule.astro", _page8],
  ["src/pages/index.astro", _page9]
]);
var _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: /* @__PURE__ */ __name(() => import("./noop-entrypoint.mjs"), "actions"),
  middleware: /* @__PURE__ */ __name(() => import("./_astro-internal_middleware.mjs"), "middleware")
});
var _args = void 0;
var _exports = createExports(_manifest);
var __astrojsSsrVirtualEntry = _exports.default;
var _start = "start";
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
//# sourceMappingURL=bundledWorker-0.13451934525929832.mjs.map
