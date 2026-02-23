globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BS2NaQhV.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CANRJsVz.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u0639\u0646\u0651\u0627" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-16"> <h1 class="text-5xl font-bold mb-8 text-center">عنّا</h1> <p class="text-xl text-center max-w-3xl mx-auto">
نحن فريق يحب بناء قوالب ويب حديثة وسريعة باستخدام Astro. هدفنا تقديم تجربة مستخدم ممتازة مع دعم متعدد اللغات من البداية.
</p> </div> ` })}`;
}, "/home/runner/workspace/src/pages/about.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
