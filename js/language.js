
/* =========================================
   V/KO DESIGN — LANGUAGE & PROJECT SYSTEM
========================================= */


/* =========================================
   1. GENERAL TRANSLATIONS
========================================= */

const translations = {

  en: {

    navHome: "Home",
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",

    headerCta: "Let's talk",

    eyebrow: "INDEPENDENT UX/UI DESIGNER",

    titleLine1: "Designing digital",
    titleLine2: "experiences that",
    titleAccent: "move.",

    description:
      "I help SaaS and AI startups turn complex ideas into simple, intuitive digital products.",

    explore: "Explore my work",
    talk: "Let's talk",

    uxTitle: "UX Research",
    uxDescription: "Understanding people",

    strategyTitle: "Product Strategy",
    strategyDescription: "Ideas into solutions",

    prototypeTitle: "Prototyping",
    prototypeDescription: "Test. Learn. Improve.",

    uiTitle: "UI Design",
    uiDescription: "Making ideas tangible",

    systemsTitle: "Design Systems",
    systemsDescription: "Consistency matters",

    availableTitle: "Available for projects",
    availableDescription: "Let's create something great",

    footerLeft: "BASED ON CURIOSITY",
    footerRight: "BUILT WITH PURPOSE",

    worksLabel: "V/KO DESIGN — SELECTED WORK",
    projectRoleLabel: "MY ROLE",
    projectMore: "More about the project",

   projectNavTravel: "01 — TRAVEL 92",
projectNavLangway: "02 — LANGWAY",
projectNavNexbank: "03 — NEXBANK",

aboutEyebrow: "A LITTLE MORE ABOUT ME",
aboutTitle: "More than just a designer.",
aboutDescription: "A few moments, interests and things that make me who I am.",
aboutLabel: "V/KO DESIGN — ABOUT ME",
aboutSide: "BEHIND THE DESIGNER",
contactEyebrow: "LET'S CREATE SOMETHING GREAT",
contactTitle1: "We're taking a whole new",
contactTitle2: "approach. Get in touch",
contactTitle3: "to hear more.",
contactFormTitle: "Contact information",
contactNameLabel: "FULL NAME",
contactNamePlaceholder: "Enter full name",
contactEmailLabel: "YOUR EMAIL",
contactEmailPlaceholder: "Email@example.com",
contactSubmit: "Send message",
footerDescription: "Independent UX/UI Designer creating meaningful digital experiences.",
footerWork: "WORK",
footerPersonal: "PERSONAL",
footerMade: "DESIGNED WITH PURPOSE",
    

  },


  ru: {

    navHome: "Главная",
    navWork: "Проекты",
    navAbout: "Обо мне",
    navContact: "Контакты",

    headerCta: "Связаться",

    eyebrow: "НЕЗАВИСИМЫЙ UX/UI ДИЗАЙНЕР",

    titleLine1: "Создаю цифровые",
    titleLine2: "продукты для",
    titleAccent: "будущего.",

    description:
      "Помогаю SaaS- и AI-стартапам превращать сложные идеи в простые и понятные цифровые продукты.",

    explore: "Мои проекты",
    talk: "Обсудим проект",

    uxTitle: "UX-исследования",
    uxDescription: "Понимание пользователей",

    strategyTitle: "Продуктовая стратегия",
    strategyDescription: "От идеи к решению",

    prototypeTitle: "Прототипирование",
    prototypeDescription: "Тестирование и улучшение",

    uiTitle: "UI-дизайн",
    uiDescription: "Воплощаю идеи в дизайн",

    systemsTitle: "Дизайн-системы",
    systemsDescription: "Единый стиль и порядок",

    availableTitle: "Открыт к проектам",
    availableDescription: "Создадим что-то интересное",

    footerLeft: "ОСНОВАНО НА ЛЮБОПЫТСТВЕ",
    footerRight: "СОЗДАНО С ЦЕЛЬЮ",

    worksLabel: "V/KO DESIGN — ИЗБРАННЫЕ ПРОЕКТЫ",
    projectRoleLabel: "МОЯ РОЛЬ",
    projectMore: "Подробнее о проекте",

   projectNavTravel: "01 — TRAVEL 92",
projectNavLangway: "02 — LANGWAY",
projectNavNexbank: "03 — NEXBANK",

aboutEyebrow: "НЕМНОГО ОБО МНЕ",
aboutTitle: "Я не только дизайнер.",
aboutDescription: "Несколько моментов, увлечений и деталей, которые рассказывают обо мне.",
aboutLabel: "V/KO DESIGN — ОБО МНЕ",
aboutSide: "ЗА КУЛИСАМИ ДИЗАЙНЕРА",
contactEyebrow: "ДАВАЙТЕ СОЗДАДИМ ЧТО-ТО ОСОБЕННОЕ",
contactTitle1: "Новый подход к цифровому",
contactTitle2: "дизайну начинается",
contactTitle3: "с общения.",
contactFormTitle: "Контактная информация",
contactNameLabel: "ВАШЕ ИМЯ",
contactNamePlaceholder: "Введите ваше имя",
contactEmailLabel: "ВАША ПОЧТА",
contactEmailPlaceholder: "Email@example.com",
contactSubmit: "Отправить сообщение",
footerDescription: "Независимый UX/UI дизайнер. Создаю продуманные цифровые продукты.",
footerWork: "РАБОТА",
footerPersonal: "ЛИЧНОЕ",
footerMade: "СОЗДАНО С ЦЕЛЬЮ",
  }

};


/* =========================================
   2. PROJECT DATA
========================================= */

const projects = [

  /* ---------------------------------------
     PROJECT 01 — TRAVEL 92
  --------------------------------------- */

  {
    image: "assets/projects/travel-92-cover.png",

    imageAlt: {
      en: "Travel 92 mobile travel booking app concept",
      ru: "Концепция мобильного приложения Travel 92"
    },

    link:
      "https://www.behance.net/gallery/235019779/Travel-92-Smart-Ticket-Booking-App",

    category: {
      en: "01 / 03 — TRAVELTECH",
      ru: "01 / 03 — TRAVELTECH"
    },

    title: {
      en: "TRAVEL 92",
      ru: "TRAVEL 92"
    },

    subtitle: {
      en: "A smarter way to travel.",
      ru: "Новый подход к путешествиям."
    },

    description: {
      en:
        "A mobile travel booking concept that brings different transportation options together in one place. Designed to make searching, comparing and booking tickets simple and intuitive.",

      ru:
        "Концепция мобильного приложения для бронирования билетов, объединяющая различные виды транспорта в одном месте. Разработана для того, чтобы сделать поиск, сравнение и покупку билетов простыми и удобными."
    },

    role: {
      en:
        "UX Research · Competitor Analysis · User Interviews · UX/UI Design · Prototyping · Design System",

      ru:
        "UX-исследование · Анализ конкурентов · Интервью с пользователями · UX/UI-дизайн · Прототипирование · Дизайн-система"
    }

  },


  /* ---------------------------------------
     PROJECT 02 — LANGWAY
  --------------------------------------- */

  {
    image: "assets/projects/langway-cover.png",

    imageAlt: {
      en: "Langway English school website design",
      ru: "Дизайн сайта школы английского языка Langway"
    },

    link:
      "https://www.behance.net/gallery/224458125/Langway-School-Website-UIUX-Case-Study",

    category: {
      en: "02 / 03 — EDUCATION",
      ru: "02 / 03 — ОБРАЗОВАНИЕ"
    },

    title: {
      en: "LANGWAY",
      ru: "LANGWAY"
    },

    subtitle: {
      en: "Making English learning exciting.",
      ru: "Делаем изучение английского увлекательным."
    },

    description: {
      en:
        "A website concept for an English language school focused on children. The design aims to make the school experience engaging, friendly and easy to explore for young learners and their parents.",

      ru:
        "Концепция сайта школы английского языка для детей. Дизайн направлен на то, чтобы сделать знакомство со школой увлекательным, дружелюбным и понятным как для юных учеников, так и для их родителей."
    },

    role: {
      en:
        "End-to-end UX/UI Design · Website Design · Prototyping",

      ru:
        "Полный цикл UX/UI-дизайна · Проектирование сайта · Прототипирование"
    }

  },


  /* ---------------------------------------
     PROJECT 03 — NEXBANK
  --------------------------------------- */

  {
    image: "assets/projects/nexbank-cover.png",

    imageAlt: {
      en: "NexBank mobile banking app concept",
      ru: "Концепция мобильного банковского приложения NexBank"
    },

    link:
      "https://www.behance.net/gallery/237420681/NexBank-UIUX-Case-for-a-Modern-Mobile-Banking-App",

    category: {
      en: "03 / 03 — FINTECH",
      ru: "03 / 03 — ФИНТЕХ"
    },

    title: {
      en: "NEXBANK",
      ru: "NEXBANK"
    },

    subtitle: {
      en: "Banking made simple.",
      ru: "Банкинг без лишних сложностей."
    },

    description: {
      en:
        "A modern mobile banking concept designed to bring everyday financial activities together in one intuitive interface. Focused on clear navigation, accessible information and a convenient user experience.",

      ru:
        "Концепция современного мобильного банкинга, объединяющая повседневные финансовые операции в одном интуитивном интерфейсе. Основное внимание уделено понятной навигации, доступности информации и удобству использования."
    },

    role: {
      en:
        "Mobile App Design · UX/UI Design · Interface Design",

      ru:
        "Дизайн мобильного приложения · UX/UI-дизайн · Проектирование интерфейса"
    }

  }

];


/* =========================================
   3. CURRENT STATE
========================================= */

let currentLanguage = "en";
let activeProjectIndex = 0;


/* =========================================
   4. UPDATE GENERAL TEXT
========================================= */


function updateGeneralLanguage() {

    const dictionary = translations[currentLanguage];

    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {

        const key = element.dataset.i18n;

        if (dictionary[key] !== undefined) {
            element.textContent = dictionary[key];
        }

    });

    // Перевод placeholder в полях формы
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {

        const key = element.dataset.i18nPlaceholder;

        if (dictionary[key] !== undefined) {
            element.placeholder = dictionary[key];
        }

    });


  function updateGeneralLanguage() {

    // Здесь остаётся весь твой существующий код перевода

    const aboutMainTitle = document.getElementById("about-main-title");

    if (aboutMainTitle) {
        aboutMainTitle.innerHTML = currentLanguage === "ru"
            ? 'Я не только <span>дизайнер.</span>'
            : 'More than just <span>a designer.</span>';
    }

}

  document.querySelectorAll(".language-option").forEach((button) => {

    const isActive =
      button.dataset.lang === currentLanguage;

    button.classList.toggle("active", isActive);

    button.setAttribute(
      "aria-pressed",
      String(isActive)
    );

  });
const aboutMainTitle = document.getElementById("about-main-title");

if (aboutMainTitle) {
    aboutMainTitle.innerHTML = currentLanguage === "ru"
        ? 'Я не только <span>дизайнер.</span>'
        : 'More than just <span>a designer.</span>';
}
}


/* =========================================
   5. UPDATE ACTIVE PROJECT
========================================= */

function updateProject(index) {

  if (!projects[index]) {
    return;
  }

  activeProjectIndex = index;

  const project = projects[index];

  const image = document.getElementById("project-image");
  const info = document.querySelector(".project-info");

  const category = document.getElementById("project-category");
  const title = document.getElementById("project-title");
  const subtitle = document.getElementById("project-subtitle");
  const description = document.getElementById("project-description");
  const role = document.getElementById("project-role");
  const link = document.getElementById("project-link");

  if (!image || !info) {
    return;
  }

  // Start transition
  image.classList.add("is-changing");
  info.classList.add("is-changing");

  // Change project content
  window.setTimeout(() => {

    image.src = project.image;
    image.alt = project.imageAlt[currentLanguage];

    category.textContent = project.category[currentLanguage];
    title.textContent = project.title[currentLanguage];
    subtitle.textContent = project.subtitle[currentLanguage];
    description.textContent = project.description[currentLanguage];
    role.textContent = project.role[currentLanguage];

    // Update Behance link
    link.href = project.link;

    // Update navigation state
    document.querySelectorAll(".project-nav-item").forEach((button) => {

      const isActive =
        Number(button.dataset.project) === index;

      button.classList.toggle("active", isActive);

      button.setAttribute(
        "aria-pressed",
        String(isActive)
      );

    });

    // Finish transition
    image.classList.remove("is-changing");
    info.classList.remove("is-changing");

  }, 200);

}


/* =========================================
   6. CHANGE LANGUAGE
========================================= */

function setLanguage(language) {

  if (!translations[language]) {
    return;
  }

  currentLanguage = language;

  // Save preference
  try {
    localStorage.setItem("vko-language", language);
  } catch (error) {
    console.warn("Language preference could not be saved.");
  }

  updateGeneralLanguage();

  // Translate the currently active project
  updateProject(activeProjectIndex);

}


/* =========================================
   7. LANGUAGE BUTTON EVENTS
========================================= */

document.querySelectorAll(".language-option").forEach((button) => {

  button.addEventListener("click", () => {

    setLanguage(button.dataset.lang);

  });

});


/* =========================================
   8. PROJECT NAVIGATION EVENTS
========================================= */

document.querySelectorAll(".project-nav-item").forEach((button) => {

  button.addEventListener("click", () => {

    const index = Number(button.dataset.project);

    updateProject(index);

  });

});


/* =========================================
   9. INITIALIZE WEBSITE
========================================= */

let savedLanguage = "en";

try {

  const storedLanguage = localStorage.getItem("vko-language");

  if (storedLanguage === "en" || storedLanguage === "ru") {
    savedLanguage = storedLanguage;
  }

} catch (error) {
  console.warn("Saved language could not be accessed.");
}

// Set initial language
currentLanguage = savedLanguage;

updateGeneralLanguage();

// Show only the first project initially
updateProject(0);
