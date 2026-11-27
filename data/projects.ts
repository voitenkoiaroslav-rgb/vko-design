export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  cover: string;
  cardCover?: string;
  role: string;
  platform: string;
  duration: string;
  tools: string[];
  challenge: string;
  research: string[];
  outcome: string;
  screens: string[];
};

export const projects: Project[] = [
  {
    slug: "travel-92",
    number: "01",
    title: "Travel 92",
    category: "TravelTech · iOS Concept",
    year: "2026",
    summary: "Концепция мобильного приложения для поиска авиабилетов и планирования путешествий.",
    cover: "/images/travel92/cover.png",
    role: "Product Designer · самостоятельно",
    platform: "iOS concept",
    duration: "Концептуальный проект",
    tools: ["Figma", "FigJam"],
    challenge: "Спроектировать цельный мобильный опыт, который помогает пользователю пройти путь от поиска направления до выбора рейса, ввода данных пассажира и подтверждения покупки. В концепции также предусмотрены профиль, сохранённые пассажиры, способы оплаты и чат.",
    research: [
      "Определить ключевые пользовательские задачи при поиске и выборе авиабилетов.",
      "Изучить паттерны тревел-сервисов и сравнить способы представления рейсов, фильтров и деталей поездки.",
      "Сформировать информационную архитектуру и связать основные экраны в последовательный сценарий бронирования."
    ],
    outcome: "Подготовлена концепция мобильного интерфейса с проработанными экранами поиска, результатов, фильтрации, данных пассажира, оплаты, подтверждения покупки и личного кабинета. Проект представлен как iOS design concept; публикация приложения и результаты пользовательского тестирования не заявляются.",
    screens: [
      "/images/travel92/splash.png",
      "/images/travel92/login.png",
      "/images/travel92/home.png",
      "/images/travel92/flight-results.png",
      "/images/travel92/filters.png",
      "/images/travel92/passenger-payment.png",
      "/images/travel92/payment-success.png",
      "/images/travel92/profile.png",
      "/images/travel92/chat.png"
    ]
  },
  {
    slug: "nexbank",
    number: "02",
    title: "NexBank",
    category: "FinTech · Banking",
    year: "2026",
    summary: "Концепция цифрового банковского продукта.",
    cover: "/images/nexbank/cover.png",
    role: "Product Designer",
    platform: "Web / Mobile",
    duration: "Концептуальный проект",
    tools: ["Figma", "FigJam"],
    challenge: "Проект будет дополнен на основе готовых макетов NexBank.",
    research: ["Материалы исследования будут добавлены после проверки исходных материалов проекта."],
    outcome: "Кейс находится в подготовке.",
    screens: ["/images/project-fintech.svg", "/images/project-fintech-detail.svg"]
  },
  {
    slug: "langway",
    number: "03",
    title: "Langway",
    category: "EdTech · Language School Website",
    year: "2025",
    summary: "Игровой сайт языковой школы Langway с яркой айдентикой, 3D-персонажами и понятной структурой курсов.",
    cover: "/images/langway/cover.png",
    cardCover: "/images/langway/card-cover.png",
    role: "UX/UI Designer",
    platform: "Desktop + Mobile",
    duration: "Готовый дизайн сайта",
    tools: ["Figma"],
    challenge: "Нужно было объединить образовательный контент, каталог курсов и запись на консультацию в цельный сайт. Важно было сделать подачу дружелюбной и игровой, но при этом сохранить читаемую структуру, чтобы посетитель быстро понял, чему учит школа, какие программы доступны и как связаться с командой.",
    research: ["Продумать структуру сайта и переходы между основными разделами.", "Организовать каталог курсов так, чтобы различия программ, стоимость и количество занятий считывались быстро.", "Сохранить единую визуальную систему на desktop и mobile, адаптировав плотные контентные блоки под узкий экран."],
    outcome: "Подготовлен дизайн сайта языковой школы для desktop и mobile. В структуре связаны разделы о школе, услугах, команде и контактах; для курсов предусмотрен переход от каталога к странице программы, а целевое действие — заказ консультации.",
    screens: ["/images/langway/cover.png"]
  }
];
