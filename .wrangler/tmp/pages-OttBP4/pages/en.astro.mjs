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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": t("hero.title"), "description": t("hero.subtitle"), "data-astro-cid-dhfotatx": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-dhfotatx> <div class="hero__content" data-astro-cid-dhfotatx> <h1 class="hero__title" data-astro-cid-dhfotatx>${t("hero.title")}</h1> <p class="hero__subtitle" data-astro-cid-dhfotatx>${t("hero.subtitle")}</p> <div class="hero__actions" data-astro-cid-dhfotatx> <a href="/en/booking" class="hero__button-link" data-astro-cid-dhfotatx> ${renderComponent($$result2, "Button", $$Button, { "label": "buttons.submit", "data-astro-cid-dhfotatx": true })} </a> </div> </div> </section> ${renderComponent($$result2, "ServicesSection", $$ServicesSection, { "data-astro-cid-dhfotatx": true })} ${renderComponent($$result2, "Newsletter", $$Newsletter, { "data-astro-cid-dhfotatx": true })} ` })} `;
}, "/home/runner/workspace/src/pages/en/index.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
