globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BS2NaQhV.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CANRJsVz.mjs';
import { $ as $$Button, a as $$ServicesSection, b as $$Newsletter } from '../chunks/Newsletter_tgKxYGoy.mjs';
import { u as useTranslations } from '../chunks/utils_UddKH46X.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const t = useTranslations(Astro2.currentLocale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": t("hero.title"), "description": t("hero.subtitle"), "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-j7pv25f6> <div class="hero__content" data-astro-cid-j7pv25f6> <h1 class="hero__title" data-astro-cid-j7pv25f6>${t("hero.title")}</h1> <p class="hero__subtitle" data-astro-cid-j7pv25f6>${t("hero.subtitle")}</p> <div class="hero__actions" data-astro-cid-j7pv25f6> <a href="/booking" class="hero__button-link" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Button", $$Button, { "label": "buttons.submit", "data-astro-cid-j7pv25f6": true })} </a> </div> </div> </section> ${renderComponent($$result2, "ServicesSection", $$ServicesSection, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Newsletter", $$Newsletter, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/home/runner/workspace/src/pages/index.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
