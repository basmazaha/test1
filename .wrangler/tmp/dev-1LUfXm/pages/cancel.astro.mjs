globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BS2NaQhV.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CANRJsVz.mjs';
import { s as supabase } from '../chunks/supabase__p7PMUv1.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$Cancel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cancel;
  let message = "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0631\u0627\u0628\u0637...";
  let isSuccess = false;
  let debugInfo = "";
  try {
    const token = Astro2.url.searchParams.get("token");
    const id = Astro2.url.searchParams.get("id");
    console.log("[CANCEL DEBUG] URL params raw:", Astro2.url.search.toString());
    console.log("[CANCEL DEBUG] token:", token);
    console.log("[CANCEL DEBUG] id:", id);
    if (!token || !id) {
      throw new Error("\u0627\u0644\u0631\u0627\u0628\u0637 \u0646\u0627\u0642\u0635 (token \u0623\u0648 id \u0645\u0641\u0642\u0648\u062F)");
    }
    const { data, error, count } = await supabase.from("appointments").select("id, cancel_token", { count: "exact" }).eq("id", id).eq("cancel_token", token);
    console.log("[CANCEL DEBUG] Supabase query result:", {
      count,
      data: data ? data[0] : null,
      error: error ? error.message : null
    });
    debugInfo = JSON.stringify({
      received_token: token,
      received_id: id,
      query_count: count,
      query_error: error?.message || "\u0644\u0627 \u064A\u0648\u062C\u062F \u062E\u0637\u0623"
    }, null, 2);
    if (error) {
      throw new Error(`\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0645\u0646 Supabase: ${error.message}`);
    }
    if (count !== 1 || !data || data.length !== 1) {
      throw new Error(`\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u062D\u062C\u0632 \u0645\u0637\u0627\u0628\u0642 (\u0639\u062F\u062F \u0627\u0644\u0633\u062C\u0644\u0627\u062A: ${count})`);
    }
    const { error: updateError } = await supabase.from("appointments").update({ status: "cancelled" }).eq("id", id);
    if (updateError) {
      console.error("[CANCEL DEBUG] Update error:", updateError);
      throw new Error(`\u0641\u0634\u0644 \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u062D\u062C\u0632: ${updateError.message}`);
    }
    isSuccess = true;
    message = "\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0645\u0648\u0639\u062F \u0628\u0646\u062C\u0627\u062D";
  } catch (err) {
    console.error("[CANCEL DEBUG] Full error:", err);
    message = err.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u062A\u0648\u0642\u0639";
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": isSuccess ? "\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0645\u0648\u0639\u062F" : "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0625\u0644\u063A\u0627\u0621" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-2xl mx-auto text-center py-16 px-6"> <h1${addAttribute(`text-4xl font-bold mb-8 ${isSuccess ? "text-green-600" : "text-red-600"}`, "class")}> ${message} </h1> ${isSuccess ? renderTemplate`<div class="bg-green-50 border border-green-200 rounded-xl p-8 mb-8"> <p class="text-xl mb-4">
تم إلغاء حجزك بنجاح.
</p> <p class="text-gray-700">
لن يتم خصم أي رسوم، ويمكنك حجز موعد جديد في أي وقت.
</p> </div>` : renderTemplate`<div class="bg-red-50 border border-red-200 rounded-xl p-8 mb-8"> <p class="text-xl mb-4">
الرابط غير صالح أو منتهي الصلاحية.
</p> <p class="text-gray-700 mb-4">
يرجى التحقق من الرابط أو التواصل معنا مباشرة.
</p> <details class="text-left text-sm text-gray-600"> <summary class="cursor-pointer font-medium">تفاصيل الخطأ (للـ debugging)</summary> <pre class="bg-gray-100 p-4 rounded mt-2 overflow-auto text-xs">${debugInfo}</pre> </details> </div>`} <a href="/" class="inline-block px-10 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition shadow-md">
العودة إلى الصفحة الرئيسية
</a> </div> ` })}`;
}, "/home/runner/workspace/src/pages/cancel.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/cancel.astro";
const $$url = "/cancel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cancel,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
