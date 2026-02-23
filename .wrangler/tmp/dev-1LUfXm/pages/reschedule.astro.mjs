globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BS2NaQhV.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CANRJsVz.mjs';
import { s as supabase } from '../chunks/supabase__p7PMUv1.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$Reschedule = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reschedule;
  let message = "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642...";
  let isValid = false;
  let appointment = null;
  try {
    const { token, id } = Astro2.url.searchParams;
    if (!token || !id) {
      throw new Error("\u0631\u0627\u0628\u0637 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D");
    }
    const { data, error } = await supabase.from("appointments").select("id, appointment_date, appointment_time, reschedule_token").eq("id", id).eq("reschedule_token", token).single();
    if (error || !data) {
      throw new Error("\u0627\u0644\u0631\u0627\u0628\u0637 \u0645\u0646\u062A\u0647\u064A \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629 \u0623\u0648 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D");
    }
    appointment = data;
    isValid = true;
    message = "\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0622\u0646 \u0625\u0639\u0627\u062F\u0629 \u062C\u062F\u0648\u0644\u0629 \u0645\u0648\u0639\u062F\u0643";
  } catch (err) {
    message = err.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u062A\u0648\u0642\u0639";
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u0625\u0639\u0627\u062F\u0629 \u062C\u062F\u0648\u0644\u0629 \u0627\u0644\u0645\u0648\u0639\u062F" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-lg mx-auto py-12"> <h1 class="text-3xl font-bold text-center mb-8">إعادة جدولة الموعد</h1> ${isValid ? renderTemplate`<div> <p class="text-lg mb-6 text-center">
الموعد الحالي: <strong>${appointment.appointment_date}</strong> الساعة <strong>${appointment.appointment_time}</strong> </p> <!-- نموذج إعادة الجدولة --> <form action="/api/reschedule" method="post" class="space-y-6"> <input type="hidden" name="id"${addAttribute(appointment.id, "value")}> <input type="hidden" name="token"${addAttribute(Astro2.url.searchParams.get("token"), "value")}> <div> <label class="block text-sm font-medium mb-2">تاريخ جديد</label> <input type="date" name="new_date" required class="w-full p-3 border rounded-lg"> </div> <div> <label class="block text-sm font-medium mb-2">وقت جديد</label> <input type="time" name="new_time" required class="w-full p-3 border rounded-lg"> </div> <button type="submit" class="w-full py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
تأكيد التغيير
</button> </form> </div>` : renderTemplate`<div class="text-center text-red-600"> <h2 class="text-2xl font-bold mb-4">خطأ</h2> <p class="text-lg">${message}</p> <a href="/" class="inline-block mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg">
العودة للرئيسية
</a> </div>`} </div> ` })}`;
}, "/home/runner/workspace/src/pages/reschedule.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/reschedule.astro";
const $$url = "/reschedule";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reschedule,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
