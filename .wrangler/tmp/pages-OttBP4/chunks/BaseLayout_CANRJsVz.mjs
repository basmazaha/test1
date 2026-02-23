globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, o as renderHead, k as renderComponent, n as renderSlot } from './astro/server_BS2NaQhV.mjs';
import { t as toRoutingStrategy, g as getLocaleRelativeUrl } from './utils_DEg6RRxG.mjs';
/* empty css                         */

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "ar", locales: ["ar", "en"], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://example.com");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const pathname = Astro2.url.pathname;
  const isEnglish = pathname.startsWith("/en");
  const currentLang = isEnglish ? "en" : "ar";
  const otherLang = isEnglish ? "ar" : "en";
  const langIcon = "\u{1F310}";
  const langShort = otherLang === "ar" ? "\u0639" : "EN";
  let cleanPath = pathname.replace(/^\/(en|ar)/, "");
  if (!cleanPath || cleanPath === "") cleanPath = "/";
  const hash = Astro2.url.hash || "";
  const navLinks = [
    { name: currentLang === "ar" ? "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627" : "Contact us", href: "/contact" },
    { name: currentLang === "ar" ? "\u0645\u0646 \u0646\u062D\u0646" : "About", href: "/about" },
    { name: currentLang === "ar" ? "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" : "Home", href: "/" }
  ];
  return renderTemplate(_a || (_a = __template(["", '<nav class="main-navbar" aria-label="\u0627\u0644\u062A\u0646\u0642\u0644 \u0627\u0644\u0631\u0626\u064A\u0633\u064A" data-astro-cid-5blmo7yk> <div class="navbar-container" data-astro-cid-5blmo7yk> <!-- \u0632\u0631 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0644\u063A\u0629 --> <a', ' class="lang-switcher"', " data-lang-switch data-astro-cid-5blmo7yk> ", ' <span class="lang-short" data-astro-cid-5blmo7yk>', "</span> </a> <!-- \u0627\u0644\u0644\u0648\u062C\u0648 --> <a", ' class="navbar-logo" data-astro-cid-5blmo7yk>\nLogo\n</a> <!-- \u0632\u0631 \u0627\u0644\u0647\u0645\u0628\u0631\u063A\u0631 (\u0645\u0648\u0628\u0627\u064A\u0644 \u0641\u0642\u0637) --> <button class="menu-toggle" aria-label="\u0641\u062A\u062D \u0627\u0644\u0642\u0627\u0626\u0645\u0629" aria-expanded="false" aria-controls="nav-menu" data-astro-cid-5blmo7yk> <span class="hamburger" data-astro-cid-5blmo7yk></span> </button> <!-- \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0648\u0627\u0628\u0637 --> <ul id="nav-menu" class="nav-links" data-astro-cid-5blmo7yk> ', " </ul> </div> </nav>  <script>\n  // \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  //    \u062F\u0627\u0644\u0629 \u0627\u0644\u062A\u0647\u064A\u0626\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629\n  // \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  function setupHamburger() {\n    const toggle = document.querySelector('.menu-toggle');\n    const menu = document.querySelector('#nav-menu');\n\n    if (!toggle || !menu) return;\n\n    // \u0625\u0632\u0627\u0644\u0629 \u0623\u064A listeners \u0642\u062F\u064A\u0645\u0629 (\u0639\u0646 \u0637\u0631\u064A\u0642 clone \u2192 replace)\n    const newToggle = toggle.cloneNode(true);\n    toggle.parentNode.replaceChild(newToggle, toggle);\n\n    // \u0625\u0636\u0627\u0641\u0629 listener \u062C\u062F\u064A\u062F\n    newToggle.addEventListener('click', (e) => {\n      e.stopPropagation(); // \u0645\u0646\u0639 \u0627\u0646\u062A\u0634\u0627\u0631 \u0627\u0644\u0640 click \u0644\u0644\u0640 document\n      const isExpanded = menu.classList.toggle('active');\n      newToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');\n    });\n\n    // \u0625\u063A\u0644\u0627\u0642 \u0639\u0646\u062F \u0627\u0644\u0636\u063A\u0637 \u062E\u0627\u0631\u062C \u0627\u0644\u0642\u0627\u0626\u0645\u0629 (\u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0641\u0642\u0637)\n    const closeHandler = (e) => {\n      if (!menu.contains(e.target) && !newToggle.contains(e.target)) {\n        menu.classList.remove('active');\n        newToggle.setAttribute('aria-expanded', 'false');\n      }\n    };\n\n    document.addEventListener('click', closeHandler);\n\n    // \u062A\u0646\u0638\u064A\u0641 \u0627\u0644\u0640 listener \u0639\u0646\u062F \u0627\u0644\u0640 transition \u0627\u0644\u062A\u0627\u0644\u064A\u0629\n    document.addEventListener('astro:before-swap', () => {\n      document.removeEventListener('click', closeHandler);\n    }, { once: true });\n  }\n\n  // \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  //    \u0627\u0644\u062A\u0634\u063A\u064A\u0644\n  // \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  function runSetup() {\n    setupHamburger();\n  }\n\n  // \u0623\u0648\u0644 \u062A\u062D\u0645\u064A\u0644\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', runSetup, { once: true });\n  } else {\n    runSetup();\n  }\n\n  // \u0628\u0639\u062F \u0643\u0644 navigation \u062F\u0627\u062E\u0644\u064A (\u0627\u0644\u0623\u0647\u0645)\n  document.addEventListener('astro:page-load', runSetup);\n\n  // \u0627\u062D\u062A\u064A\u0627\u0637\u064A \u0642\u0648\u064A: \u0628\u0639\u062F \u0627\u0644\u0640 swap \u0645\u0628\u0627\u0634\u0631\u0629\n  document.addEventListener('astro:after-swap', runSetup);\n<\/script>"])), maybeRenderHead(), addAttribute(getRelativeLocaleUrl(otherLang, cleanPath) + hash, "href"), addAttribute(`\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0644\u063A\u0629 \u0625\u0644\u0649 ${otherLang.toUpperCase()}`, "aria-label"), langIcon, langShort, addAttribute(getRelativeLocaleUrl(currentLang, "/"), "href"), navLinks.map((link) => renderTemplate`<li data-astro-cid-5blmo7yk> <a${addAttribute(getRelativeLocaleUrl(currentLang, link.href), "href")} data-astro-cid-5blmo7yk> ${link.name} </a> </li>`));
}, "/home/runner/workspace/src/components/Navbar.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const pathname = Astro2.url.pathname;
  const isEnglish = pathname.startsWith("/en");
  const lang = isEnglish ? "en" : "ar";
  const footerText = {
    ar: {
      copyright: `\xA9 ${currentYear} \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629`,
      madeWith: "\u0635\u064F\u0646\u0639 \u0628\u0640",
      withLove: "\u0628\u062D\u0628 \u2764\uFE0F \u0641\u064A \u0645\u0635\u0631"
    },
    en: {
      copyright: `\xA9 ${currentYear} All rights reserved`,
      madeWith: "Made with",
      withLove: "with love \u2764\uFE0F in Egypt"
    }
  };
  const t = (key) => footerText[lang][key] || key;
  return renderTemplate`${maybeRenderHead()}<footer class="main-footer" data-astro-cid-sz7xmlte> <div class="footer-container" data-astro-cid-sz7xmlte> <p class="copyright" data-astro-cid-sz7xmlte>${t("copyright")}</p> <p class="made-with" data-astro-cid-sz7xmlte> ${t("madeWith")} <span class="astro" data-astro-cid-sz7xmlte>Astro</span> ${t("withLove")} </p> </div> </footer> `;
}, "/home/runner/workspace/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "\u0627\u0644\u0645\u0648\u0642\u0639", description = "" } = Astro2.props;
  const supportedLocales = ["ar", "en"];
  const pathname = Astro2.url.pathname;
  const getLocaleUrl = (locale) => {
    if (locale === "ar") {
      return new URL(pathname, Astro2.site).toString();
    }
    return new URL(`/${locale}${pathname}`, Astro2.site).toString();
  };
  const alternates = supportedLocales.map((locale) => ({
    locale,
    url: getLocaleUrl(locale)
  }));
  return renderTemplate`<html${addAttribute(Astro2.currentLocale || "ar", "lang")}${addAttribute(Astro2.currentLocale === "ar" ? "rtl" : "ltr", "dir")} class="layout"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- روابط اللغات البديلة (مهم جدًا لـ SEO متعدد اللغات) -->${alternates.map(({ locale, url }) => renderTemplate`<link rel="alternate"${addAttribute(locale, "hreflang")}${addAttribute(url, "href")}>`)}<!-- x-default: عادةً اللغة الافتراضية (ar في حالتك) --><link rel="alternate" hreflang="x-default"${addAttribute(getLocaleUrl("ar"), "href")}><!-- canonical (اختياري لكن موصى به) --><link rel="canonical"${addAttribute(getLocaleUrl(Astro2.currentLocale || "ar"), "href")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="/css/globals.css"><!-- تفعيل View Transitions / Client-side routing -->${renderHead()}</head> <body class="layout__body"> ${renderComponent($$result, "Navbar", $$Navbar, { "class": "layout__navbar" })} <main class="layout__main"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "class": "layout__footer" })} </body></html>`;
}, "/home/runner/workspace/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
