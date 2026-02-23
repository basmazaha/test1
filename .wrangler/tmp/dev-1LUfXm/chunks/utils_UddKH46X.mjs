globalThis.process ??= {}; globalThis.process.env ??= {};
const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عنّا",
      contact: "اتصل بنا"
    },
    hero: {
      title: "!مرحبا بالعالم",
      subtitle: "قالب Astro متعدد اللغات جاهز للتخصيص والنشر بسرعة"
    },
    buttons: {
      start_now: "ابدأ الآن",
      contact_us: "تواصل معنا",
      submit: "إرســــــال",
      cancel: "إلغاء",
      confirm: "تأكيد"
    },
    services: {
      title: "خدماتنا",
      cards: [
        {
          icon: "⚡",
          title: "تطوير واجهات حديثة",
          description: "نقوم بتصميم وتطوير واجهات مستخدم سريعة ومتجاوبة باستخدام أحدث التقنيات."
        },
        {
          icon: "🛠️",
          title: "حلول Backend قوية",
          description: "بناء أنظمة خلفية آمنة وقابلة للتطوير تدعم ملايين المستخدمين بكفاءة عالية."
        }
      ]
    },
    newsletter: {
      title: "اشترك في النشرة البريدية",
      description: "احصل على آخر الأخبار والعروض مباشرة في بريدك الإلكترونى"
    },
    booking: {
      title: "حجز موعد",
      full_name: "الاسم الكامل",
      full_name_placeholder: "اكتب اسمك الكامل",
      email: "البريد الالكتروني",
      email_placeholder: "مثال: example@email.com",
      phone: "رقم الهاتف",
      phone_placeholder: "مثال: 01012345678",
      reason: "سبب الحجز (اختياري)",
      reason_placeholder: "اكتب سبب الحجز أو أي ملاحظات...",
      date: "التاريخ",
      time: "الوقت",
      required: "مطلوب",
      success_message: "تم الحجز بنجاح!",
      error_message: "خطأ في الحجز، حاول مرة أخرى",
      choose_date: "اختر التاريخ",
      choose_time: "اختر الوقت",
      select_date_first: "اختر التاريخ أولا",
      no_times_available: "لا توجد أوقات متاحة لهذا التاريخ",
      date_trigger_default: "اختر التاريخ ←",
      time_trigger_default: "اختر الوقت ←"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "Hello World!",
      subtitle: "A multilingual Astro template ready for customization and fast deployment"
    },
    buttons: {
      start_now: "Get Started Now",
      contact_us: "Contact Us",
      submit: "Submit",
      cancel: "Cancel",
      confirm: "Confirm"
    },
    services: {
      title: "Our Services",
      cards: [
        {
          icon: "⚡",
          title: "Modern Frontend Development",
          description: "We design & build fast, responsive user interfaces using the latest technologies."
        },
        {
          icon: "🛠️",
          title: "Powerful Backend Solutions",
          description: "Secure, scalable backend systems that handle millions of users efficiently."
        }
      ]
    },
    newsletter: {
      title: "Subscribe to our newsletter",
      description: "Get the latest news and offers directly in your inbox"
    },
    booking: {
      title: "Book an Appointment",
      full_name: "Full Name",
      full_name_placeholder: "Enter your full name",
      email: "Email Address",
      email_placeholder: "Example: example@email.com",
      phone: "Phone Number",
      phone_placeholder: "Example: +201012345678",
      reason: "Booking Reason (optional)",
      reason_placeholder: "Write the reason for booking or any notes...",
      date: "Date",
      time: "Time",
      required: "required",
      success_message: "Appointment booked successfully!",
      error_message: "Error booking appointment, please try again",
      choose_date: "Choose date",
      choose_time: "Choose time",
      select_date_first: "Select date first",
      no_times_available: "No times available for this date",
      date_trigger_default: "Choose date ←",
      time_trigger_default: "Choose time ←"
    }
  }
};

const DEFAULT_LOCALE = "ar";
function getTranslations(lang) {
  const locale = lang && lang in translations ? lang : DEFAULT_LOCALE;
  return translations[locale];
}
function useTranslations(currentLocale) {
  const tDict = getTranslations(currentLocale);
  return function t(key) {
    return key.split(".").reduce((obj, part) => {
      if (obj && part in obj) return obj[part];
      return void 0;
    }, tDict) ?? key;
  };
}

export { getTranslations as g, useTranslations as u };
