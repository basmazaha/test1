globalThis.process ??= {}; globalThis.process.env ??= {};
import { s as supabase } from '../../chunks/supabase__p7PMUv1.mjs';
import { g as getTranslations } from '../../chunks/utils_UddKH46X.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
async function POST({ request, url }) {
  const lang = url.searchParams.get("lang") || "ar";
  const t = getTranslations(lang);
  try {
    const contentType = request.headers.get("content-type") || "";
    let data = {};
    if (contentType.includes("application/json")) {
      data = await request.json();
    } else if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await request.formData();
      data = Object.fromEntries(formData);
    } else {
      return new Response(
        JSON.stringify({
          error: lang === "en" ? `Content type not supported: ${contentType}` : `نوع المحتوى غير مدعوم: ${contentType}`
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const full_name = (data.full_name || "").trim();
    const phone = (data.phone || "").trim();
    const email = (data.email || "").trim();
    const reason = (data.reason || "").trim();
    const appointment_date = (data.appointment_date || "").trim();
    const appointment_time = (data.appointment_time || "").trim();
    if (!full_name || !phone || !email || !appointment_date || !appointment_time) {
      return new Response(
        JSON.stringify({ error: lang === "en" ? "All required fields must be filled" : "جميع الحقول المطلوبة يجب ملؤها" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: lang === "en" ? "Please enter a valid email address" : "الرجاء إدخال بريد إلكتروني صحيح" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(appointment_date)) {
      return new Response(
        JSON.stringify({ error: lang === "en" ? "Invalid date format" : "صيغة التاريخ غير صحيحة" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!/^\d{2}:\d{2}$/.test(appointment_time)) {
      return new Response(
        JSON.stringify({ error: lang === "en" ? "Invalid time format" : "صيغة الوقت غير صحيحة" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const [year, month, day] = appointment_date.split("-").map(Number);
    const [hour, minute] = appointment_time.split(":").map(Number);
    const appointmentDateTime = new Date(year, month - 1, day, hour, minute);
    const now = /* @__PURE__ */ new Date();
    if (appointmentDateTime < now) {
      return new Response(
        JSON.stringify({ error: lang === "en" ? "Cannot book a date in the past" : "لا يمكن حجز موعد في الماضي" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (hour < 9 || hour > 22 || hour === 22 && minute > 0) {
      return new Response(
        JSON.stringify({ error: lang === "en" ? "Time out of range (9:00 AM – 10:00 PM)" : "الوقت خارج نطاق الحجز (9:00 صباحاً – 10:00 مساءً)" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (![0, 15, 30, 45].includes(minute)) {
      return new Response(
        JSON.stringify({ error: lang === "en" ? "Time must be in 15-minute increments" : "يجب أن يكون الوقت كل 15 دقيقة" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { data: existing, error: checkError } = await supabase.from("appointments").select("id").eq("appointment_date", appointment_date).eq("appointment_time", appointment_time + ":00").maybeSingle();
    if (checkError) {
      return new Response(
        JSON.stringify({ error: lang === "en" ? "Error checking availability" : "خطأ في التحقق من توافر الموعد" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    if (existing) {
      return new Response(
        JSON.stringify({ error: lang === "en" ? "This time is already booked" : "هذا الموعد محجوز بالفعل" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }
    const { error: insertError } = await supabase.from("appointments").insert({
      full_name,
      phone,
      email,
      reason,
      appointment_date,
      appointment_time: appointment_time + ":00"
    });
    if (insertError) {
      if (insertError.code === "23505") {
        return new Response(
          JSON.stringify({ error: lang === "en" ? "This appointment was just booked" : "هذا الموعد تم حجزه للتو" }),
          { status: 409, headers: { "Content-Type": "application/json" } }
        );
      }
      return new Response(
        JSON.stringify({ error: lang === "en" ? "Failed to save booking" : "فشل في حفظ الحجز" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: t.booking.success_message
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: lang === "en" ? "An unexpected error occurred" : "حدث خطأ غير متوقع" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
