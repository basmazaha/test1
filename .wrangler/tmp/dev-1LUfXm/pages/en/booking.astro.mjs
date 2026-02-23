globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderScript } from '../../chunks/astro/server_BS2NaQhV.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CANRJsVz.mjs';
import { u as useTranslations } from '../../chunks/utils_UddKH46X.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$Booking = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Booking;
  const t = useTranslations(Astro2.currentLocale ?? "ar");
  const pageTitle = t("booking.title");
  const fullNameLabel = t("booking.full_name");
  const fullNamePlaceholder = t("booking.full_name_placeholder");
  const emailLabel = t("booking.email");
  const emailPlaceholder = t("booking.email_placeholder");
  const phoneLabel = t("booking.phone");
  const phonePlaceholder = t("booking.phone_placeholder");
  const reasonLabel = t("booking.reason");
  const reasonPlaceholder = t("booking.reason_placeholder");
  const dateLabel = t("booking.date");
  const timeLabel = t("booking.time");
  t("booking.required");
  const submitButton = t("buttons.submit");
  const successMsg = t("booking.success_message");
  const errorMsg = t("booking.error_message");
  t("booking.choose_date");
  t("booking.choose_time");
  t("booking.select_date_first");
  t("booking.no_times_available");
  const dateTriggerDefault = t("booking.date_trigger_default");
  const timeTriggerDefault = t("booking.time_trigger_default");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "data-astro-cid-5zswjaxs": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="booking-form" data-astro-cid-5zswjaxs> <div class="booking-form__container" data-astro-cid-5zswjaxs> <h1 class="booking-form__title" data-astro-cid-5zswjaxs>${pageTitle}</h1> <form id="bookingForm" class="booking-form__form" data-astro-cid-5zswjaxs> <div class="booking-form__group" data-astro-cid-5zswjaxs> <label for="full_name" data-astro-cid-5zswjaxs>${fullNameLabel} <span class="required" data-astro-cid-5zswjaxs>*</span></label> <input type="text" id="full_name" name="full_name" required${addAttribute(fullNamePlaceholder, "placeholder")} maxlength="40" minlength="3" data-astro-cid-5zswjaxs> </div> <div class="booking-form__group" data-astro-cid-5zswjaxs> <label for="email" data-astro-cid-5zswjaxs>${emailLabel} <span class="required" data-astro-cid-5zswjaxs>*</span></label> <input type="email" id="email" name="email" required${addAttribute(emailPlaceholder, "placeholder")} autocomplete="email" maxlength="70" data-astro-cid-5zswjaxs> <div class="under_input" data-astro-cid-5zswjaxs> A confirmation email will be sent to your inbox</div> </div> <div class="booking-form__group" data-astro-cid-5zswjaxs> <label for="phone" data-astro-cid-5zswjaxs>${phoneLabel} <span class="required" data-astro-cid-5zswjaxs>*</span></label> <input type="tel" id="phone" name="phone" required${addAttribute(phonePlaceholder, "placeholder")} autocomplete="tel" inputmode="numeric" pattern="[0-9+]*" maxlength="20" title="Numbers only" data-astro-cid-5zswjaxs> </div> <div class="booking-form__row date-time-row" data-astro-cid-5zswjaxs> <div class="booking-form__group half" data-astro-cid-5zswjaxs> <label for="appointment_date_display" data-astro-cid-5zswjaxs>${dateLabel} <span class="required" data-astro-cid-5zswjaxs>*</span></label> <div class="custom-picker-trigger" id="date-trigger" tabindex="0" role="button" data-astro-cid-5zswjaxs> ${dateTriggerDefault} </div> <input type="hidden" id="appointment_date" name="appointment_date" required data-astro-cid-5zswjaxs> <!-- Dropdown للتواريخ --> <div class="dropdown-menu hidden" id="date-dropdown" data-astro-cid-5zswjaxs> <div class="scroll-container" id="date-scroll" data-astro-cid-5zswjaxs></div> </div> </div> <div class="booking-form__group half" data-astro-cid-5zswjaxs> <label for="appointment_time_display" data-astro-cid-5zswjaxs>${timeLabel} <span class="required" data-astro-cid-5zswjaxs>*</span></label> <div class="custom-picker-trigger" id="time-trigger" tabindex="0" role="button" data-astro-cid-5zswjaxs> ${timeTriggerDefault} </div> <input type="hidden" id="appointment_time" name="appointment_time" required data-astro-cid-5zswjaxs> <!-- Dropdown للأوقات --> <div class="dropdown-menu hidden" id="time-dropdown" data-astro-cid-5zswjaxs> <div class="scroll-container" id="time-scroll" data-astro-cid-5zswjaxs></div> </div> </div> </div> <div class="booking-form__group" data-astro-cid-5zswjaxs> <label for="reason" data-astro-cid-5zswjaxs>${reasonLabel}</label> <textarea id="reason" name="reason" rows="5" maxlength="500"${addAttribute(reasonPlaceholder, "placeholder")} data-astro-cid-5zswjaxs></textarea> </div> <div id="message" class="booking-form__message booking-form__message--hidden"${addAttribute(successMsg, "data-success-msg")}${addAttribute(errorMsg, "data-error-msg")} data-astro-cid-5zswjaxs></div> <button type="submit" class="booking-form__submit" data-astro-cid-5zswjaxs>${submitButton}</button> </form> </div> </section> ${renderScript($$result2, "/home/runner/workspace/src/pages/en/booking.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "/home/runner/workspace/src/pages/en/booking.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/en/booking.astro";
const $$url = "/en/booking";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Booking,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
