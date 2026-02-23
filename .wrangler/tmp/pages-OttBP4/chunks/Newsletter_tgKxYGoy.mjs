globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, n as renderSlot, r as renderTemplate } from './astro/server_BS2NaQhV.mjs';
import { u as useTranslations } from './utils_UddKH46X.mjs';
/* empty css                         */

const $$Astro$2 = createAstro("https://example.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const t = useTranslations(Astro2.currentLocale);
  const { variant = "primary", label, ...rest } = Astro2.props;
  const classes = variant === "primary" ? "btn" : "btn border border-[var(--secondary)] text-[var(--text)]";
  const displayText = label?.startsWith("buttons.") ? t(label) || label : label || "";
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(classes, "class")}${spreadAttributes(rest)} data-astro-cid-vnzlvqnm> ${displayText} ${renderSlot($$result, $$slots["default"])} </button> `;
}, "/home/runner/workspace/src/components/Button.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$ServicesSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServicesSection;
  const t = useTranslations(Astro2.currentLocale);
  const sectionTitle = t("services.title");
  const services = t("services.cards");
  return renderTemplate`${maybeRenderHead()}<section class="services" data-astro-cid-e4wg3xsu> <div class="services__container" data-astro-cid-e4wg3xsu> <h2 class="services__title" data-astro-cid-e4wg3xsu>${sectionTitle}</h2> <div class="services__cards" data-astro-cid-e4wg3xsu> ${services.map((service) => renderTemplate`<div class="services__card"${addAttribute({ "--card-color": service.color ?? "#4f46e5" }, "style")} data-astro-cid-e4wg3xsu> <div class="services__icon-wrapper" data-astro-cid-e4wg3xsu> <span class="services__icon" data-astro-cid-e4wg3xsu>${service.icon}</span> </div> <h3 class="services__card-title" data-astro-cid-e4wg3xsu>${service.title}</h3> <p class="services__card-desc" data-astro-cid-e4wg3xsu>${service.description}</p> </div>`)} </div> </div> </section> `;
}, "/home/runner/workspace/src/content/ServicesSection.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Newsletter;
  const t = useTranslations(Astro2.currentLocale);
  const sectionTitle = t("newsletter.title");
  const description = t("newsletter.description");
  return renderTemplate`${maybeRenderHead()}<section class="newsletter" data-astro-cid-d7tvbczm> <div class="newsletter__container" data-astro-cid-d7tvbczm> <h2 class="newsletter__title" data-astro-cid-d7tvbczm>${sectionTitle}</h2> <p class="newsletter__description" data-astro-cid-d7tvbczm>${description}</p> <!-- =============================================
         هنا ضع كود الـ iframe الذي نسخته من Brevo
         ============================================= --> <div class="newsletter__embed-wrapper" data-astro-cid-d7tvbczm> <!-- مثال – استبدله بالكود الحقيقي الخاص بك --> <iframe width="540" height="305" src="https://1187b3e9.sibforms.com/serve/MUIFAOyzmIWq5FeH3OdQIthHEi5b1nV97XyFWB4peA7kag18_VadONpDEIkkW14hNELwlS40SCsQ5aKBq0xrF8Da0RSClHjka9D0XrCKHdULfF92a70Q6vOd_b-ZIotK87wHWOpkOXHEuuUWHoyXCkpsWW17K-aSs-4mr6zlyJD3qbmv_OUlSJdSrXkugHK0NB771R5rWdQjXh7Fvg==" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;" data-astro-cid-d7tvbczm>
      </iframe> </div> <noscript class="newsletter__noscript"> <p class="newsletter__noscript-text" data-astro-cid-d7tvbczm>
يرجى تفعيل JavaScript لعرض نموذج الاشتراك.
</p> </noscript> </div> </section> `;
}, "/home/runner/workspace/src/content/Newsletter.astro", void 0);

export { $$Button as $, $$ServicesSection as a, $$Newsletter as b };
