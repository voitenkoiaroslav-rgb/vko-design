import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import CaseProgress from "@/components/CaseProgress";
import LangwayTextMotion from "@/components/LangwayTextMotion";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  if (project.slug === "travel-92") return <Travel92Case />;
  if (project.slug === "nexbank") return <NexBankCase />;
  if (project.slug === "langway") return <LangwayCase />;

  return (
    <>
      <Header />
      <main className="case-study page-shell">
        <Link href="/#projects" className="back-link">← Все проекты</Link>
        <section className="case-hero">
          <span className="section-kicker">{project.number} / {project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="case-cover"><Image src={project.cover} alt={`Визуализация ${project.title}`} fill priority sizes="100vw" /></div>
        </section>
        <div className="case-next"><Link href="/#projects">← Вернуться ко всем проектам</Link></div>
      </main>
    </>
  );
}

const screens = [
  ["splash.png", "Стартовый экран", "Заставка и визуальная идентичность"],
  ["login.png", "Авторизация", "Вход в аккаунт и доступ к сервису"],
  ["home.png", "Главный экран", "Выбор транспорта, маршрута и даты"],
  ["flight-results.png", "Результаты поиска", "Список рейсов с временем и стоимостью"],
  ["flight-results-alt.png", "Варианты поездки", "Сравнение доступных предложений"],
  ["filters.png", "Фильтры", "Сортировка и уточнение параметров"],
  ["passenger-payment.png", "Проверка и оплата", "Данные пассажира и способы оплаты"],
  ["payment-success.png", "Покупка завершена", "Подтверждение оформления билета"],
  ["profile.png", "Профиль", "Личные данные и разделы аккаунта"],
  ["chat.png", "Чат поддержки", "Коммуникация с поддержкой"]
] as const;

const wireframes = [
  ["login.png", "Вход в приложение", "Авторизация и альтернативные способы входа"],
  ["password-recovery.png", "Восстановление пароля", "Возврат доступа к аккаунту"],
  ["password-change.png", "Изменение пароля", "Обновление данных для входа"],
  ["profile.png", "Профиль пользователя", "Личные данные и структура аккаунта"],
  ["profile-settings.png", "Настройки профиля", "Управление параметрами аккаунта"],
  ["cards.png", "Платёжные карты", "Просмотр и добавление способов оплаты"]
] as const;

const palette = [
  { name: "Фиолетовый", label: "Violet", hex: "#624AB1" },
  { name: "Белый", label: "White", hex: "#FFFFFF" },
  { name: "Зелёный", label: "Green", hex: "#6CB78C" },
  { name: "Серый", label: "Gray 2", hex: "#8D8D93" }
];

const brand = [
  { src: "phone-cases.png", title: "Чехлы для смартфонов", note: "Применение фирменного знака на аксессуарах", shape: "wide" },
  { src: "logo-app.png", title: "Логотип и иконка приложения", note: "Фирменный знак и его цифровое применение", shape: "wide" },
  { src: "tickets.png", title: "Фирменные билеты", note: "Носитель айдентики в контексте путешествия", shape: "wide" },
  { src: "suitcase.png", title: "Чемодан с логотипом", note: "Фирменная графика на дорожном багаже", shape: "portrait" },
  { src: "bag.png", title: "Текстильная сумка", note: "Дополнительное применение визуальной системы", shape: "portrait" }
] as const;

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <div className="t92-label"><span>{number}</span><p>{children}</p></div>;
}

function PhoneCard({ file, title, note, index }: { file: string; title: string; note: string; index: number }) {
  return (
    <article className="t92-phone-card">
      <div className="t92-phone-stage">
        <div className="t92-phone">
          <div className="t92-phone-screen">
            <Image src={`/images/travel92/${file}`} alt={`Экран приложения Travel 92: ${title}`} width={585} height={1266} sizes="(max-width: 640px) 70vw, (max-width: 1000px) 32vw, 20vw" />
          </div>
        </div>
      </div>
      <div className="t92-card-caption"><span>ЭКРАН {String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{note}</p></div>
    </article>
  );
}

function Travel92Case() {
  return (
    <div className="t92-page">
      <Header />
      <CaseProgress />
      <main className="t92-shell">
        <Link href="/#projects" className="t92-back">← Все проекты</Link>

        <section className="t92-cover">
          <Image src="/images/travel92/cover.png" alt="TRAVEL 92 — концепция мобильного travel-сервиса" fill priority quality={100} sizes="100vw" />
        </section>
        <div className="t92-marquee" aria-label="Путь пользователя: поиск, выбор, покупка, путешествие">
          <div className="t92-marquee-track">
            {Array.from({ length: 4 }).map((_, i) => <span key={i}>SEARCH <b>✳</b> CHOOSE <b>✳</b> BOOK <b>✳</b> TRAVEL <b>✳</b></span>)}
          </div>
        </div>

        <Reveal className="t92-intro">
          <div><span className="t92-eyebrow">01 / КОНЦЕПЦИЯ МОБИЛЬНОГО ПРОДУКТА</span><h2>Путь от поиска<br />до покупки билета.</h2><p className="t92-lead">Travel 92 — концепция travel-сервиса, которая объединяет поиск поездки, сравнение вариантов и оформление билета в последовательный пользовательский сценарий.</p></div>
          <div className="t92-facts">
            <div><span>РОЛЬ</span><strong>Product Designer</strong></div><div><span>ФОРМАТ</span><strong>Самостоятельный концепт</strong></div>
            <div><span>ПЛАТФОРМА</span><strong>iOS Concept</strong></div><div><span>ИНСТРУМЕНТЫ</span><strong>Figma · FigJam</strong></div>
            <div><span>ОБЪЁМ</span><strong>100+ экранов и состояний</strong></div><div><span>СТАТУС</span><strong>Design Concept</strong></div>
          </div>
        </Reveal>

        <Reveal className="t92-section t92-overview">
          <SectionLabel number="02">О ПРОЕКТЕ</SectionLabel>
          <div className="t92-content"><h2>Не просто найти билет.<br />А спокойно пройти весь путь.</h2><p>Идея Travel 92 — собрать ключевые действия путешественника в одном цифровом продукте: от выбора направления до оплаты и дальнейшего управления аккаунтом.</p><p>Концепция охватывает поиск транспорта, выбор маршрута и даты, список предложений, фильтрацию, данные пассажиров, оплату, профиль, настройки и поддержку.</p></div>
        </Reveal>

        <Reveal className="t92-section t92-challenge">
          <SectionLabel number="03">ЗАДАЧА И ЦЕЛИ</SectionLabel>
          <div className="t92-content"><h2>Убрать лишние шаги<br />между «куда?» и «билет куплен».</h2><p className="t92-large-copy">Спроектировать понятный маршрут внутри приложения: чтобы пользователь не терял контекст поездки, мог быстро сравнить варианты и завершить оформление без разрозненных действий.</p>
            <div className="t92-goals">
              <article><span>01 / СОБРАТЬ</span><h3>Весь маршрут<br />в одном месте</h3><p>Объединить поиск, выбор транспорта, данные пассажира и оплату в единую структуру.</p></article>
              <article><span>02 / УПРОСТИТЬ</span><h3>Сделать выбор<br />понятным</h3><p>Показывать время, стоимость и параметры поездки так, чтобы предложения было удобно сравнивать.</p></article>
              <article><span>03 / ЗАВЕРШИТЬ</span><h3>Довести до<br />подтверждения</h3><p>Снизить неопределённость на этапе оформления: проверить данные, выбрать оплату и увидеть результат.</p></article>
            </div>
          </div>
        </Reveal>

        <Reveal className="t92-section">
          <SectionLabel number="04">КАРТА ПУТИ ПОЛЬЗОВАТЕЛЯ · CJM</SectionLabel>
          <div className="t92-content"><div className="t92-heading-row"><h2>Пять этапов<br />одного путешествия.</h2><p>Карта пути показывает последовательность взаимодействия с сервисом от первого знакомства до покупки билета.</p></div>
            <div className="t92-wide-image"><Image src="/images/travel92/process/cjm.png" alt="CJM — карта пути пользователя Travel 92" width={2048} height={697} /></div>
            <div className="t92-stages">{["Онбординг", "Регистрация", "Поиск билета", "Каталог билетов", "Покупка билета"].map((x, i) => <div key={x}><span>0{i + 1}</span><strong>{x}</strong></div>)}</div>
          </div>
        </Reveal>

        <Reveal className="t92-section">
          <SectionLabel number="05">ПОЛЬЗОВАТЕЛЬСКИЙ СЦЕНАРИЙ · USER FLOW</SectionLabel>
          <div className="t92-content"><div className="t92-heading-row"><h2>От первого запуска<br />к нужному действию.</h2><p>Сценарии связывают основные разделы приложения: вход, поиск поездки, работу с заказами и управление профилем.</p></div>
            <div className="t92-wide-image"><Image src="/images/travel92/process/user-flow.png" alt="User Flow — схема пользовательских сценариев Travel 92" width={2048} height={1004} /></div>
          </div>
        </Reveal>

        <Reveal className="t92-section">
          <SectionLabel number="06">WIREFRAMES</SectionLabel>
          <div className="t92-content"><div className="t92-heading-row"><h2>Сначала логика.<br />Затем визуальная система.</h2><p>Каркасные макеты помогают определить иерархию информации, расположение элементов и структуру ключевых экранов до финальной визуальной проработки.</p></div>
            <div className="t92-wire-grid">{wireframes.map(([file, title, note], i) => <article className="t92-wire-card" key={file}><div className="t92-wire-image"><Image src={`/images/travel92/wireframes/${file}`} alt={`Wireframe: ${title}`} width={810} height={1752} /></div><div className="t92-card-caption"><span>WIREFRAME {String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{note}</p></div></article>)}</div>
          </div>
        </Reveal>

        <Reveal className="t92-section t92-ui-section">
          <SectionLabel number="07">ДИЗАЙН ИНТЕРФЕЙСА</SectionLabel>
          <div className="t92-content"><div className="t92-heading-row"><h2>Интерфейс<br />в деталях.</h2><p>Экраны концепции показаны внутри мокапов iPhone. Подборка демонстрирует основные разделы и ключевые состояния пользовательского сценария.</p></div>
            <div className="t92-phone-grid">{screens.map(([file, title, note], i) => <PhoneCard key={file} file={file} title={title} note={note} index={i} />)}</div>
            <div className="t92-count-note"><strong>100+</strong><span>экранов, состояний и вариантов интерфейса в рамках концепции продукта</span></div>
          </div>
        </Reveal>

        <Reveal className="t92-section t92-system-section">
          <SectionLabel number="08">ДИЗАЙН-СИСТЕМА</SectionLabel>
          <div className="t92-content"><div className="t92-heading-row"><h2>Единый визуальный<br />язык продукта.</h2><p>Зафиксированы основные цвета, типографика и повторно используемые элементы интерфейса.</p></div>
            <div className="t92-palette">{palette.map((item) => <article key={item.hex}><div className="t92-swatch" style={{ backgroundColor: item.hex, color: item.name === "Белый" ? "#111" : "#fff" }}><span>{item.label}</span><strong>{item.hex}</strong></div><div className="t92-swatch-meta"><strong>{item.name}</strong><code>{item.hex}</code></div></article>)}</div>
            <div className="t92-system-assets"><article><h3>Типографика</h3><p>Шрифтовая иерархия и текстовые стили интерфейса.</p><Image src="/images/travel92/system/typography.png" alt="Типографика дизайн-системы Travel 92" width={2048} height={868} /></article><article><h3>Компоненты</h3><p>Повторно используемые элементы и состояния.</p><Image src="/images/travel92/system/components.png" alt="Компоненты дизайн-системы Travel 92" width={2048} height={2048} /></article></div>
          </div>
        </Reveal>

        <Reveal className="t92-section t92-brand-section">
          <SectionLabel number="09">ФИРМЕННЫЙ СТИЛЬ</SectionLabel>
          <div className="t92-content"><div className="t92-heading-row"><h2>Айдентика<br />за пределами экрана.</h2><p>Фирменный знак Travel 92 применяется не только в интерфейсе, но и на физических носителях и аксессуарах.</p></div>
            <div className="t92-brand-grid">{brand.map((item) => <article className={`t92-brand-card t92-brand-${item.shape}`} key={item.src}><div className="t92-brand-image"><Image src={`/images/travel92/brand/${item.src}`} alt={item.title} width={1800} height={1400} /></div><div className="t92-brand-caption"><h3>{item.title}</h3><p>{item.note}</p></div></article>)}</div>
          </div>
        </Reveal>

        <Reveal className="t92-section t92-outcome">
          <SectionLabel number="10">ИТОГ ПРОЕКТА</SectionLabel>
          <div className="t92-content"><h2>От набора экранов<br />к целостной концепции.</h2><p className="t92-large-copy">В результате сформирована концепция travel-продукта с последовательной логикой поиска и оформления поездки, согласованной визуальной системой и фирменной айдентикой.</p>
            <div className="t92-results-grid"><article><strong>100+</strong><span>экранов и состояний интерфейса</span></article><article><strong>5</strong><span>этапов пользовательского пути в CJM</span></article><article><strong>3</strong><span>основных шага сценария: поиск, выбор, покупка</span></article><article><strong>4</strong><span>основных цвета дизайн-системы</span></article></div>
            <div className="t92-impact"><h3>Что изменилось на уровне концепции</h3><ul><li>Поиск, сравнение и оформление билета собраны в единый последовательный сценарий.</li><li>Ключевые параметры поездки вынесены в интерфейс выбора и фильтрации.</li><li>Данные пассажира и оплата объединены в понятный этап проверки заказа.</li><li>Профиль, безопасность и поддержка предусмотрены как части общего продукта.</li><li>Единые компоненты и цветовая система связывают экраны в цельный интерфейс.</li></ul></div>
            <p className="t92-disclaimer">Travel 92 представлен как самостоятельная концепция дизайна для iOS. Это не опубликованное приложение. Указанные цифры описывают объём проектной работы и структуру концепции, а не результаты запуска. Данные о реальных пользователях, конверсии и бизнес-эффекте не заявляются без подтверждённых измерений.</p>
          </div>
        </Reveal>

        <div className="t92-bottom"><Link href="/#projects">← Все проекты</Link><a href="https://t.me/varik817" target="_blank" rel="noopener noreferrer">Обсудить проект ↗</a></div>
      </main>
      <footer className="site-footer page-shell t92-footer"><Link href="/" className="wordmark">V/KO<span> DESIGN</span></Link><span>© 2026 V/KO DESIGN</span><Link href="/#projects">Проекты ↑</Link></footer>
    </div>
  );
}


function LangwayCase() {
  const desktopViews = [
    { src: "/images/langway/site-home-full.png", title: "Главная", note: "Первое знакомство со школой, её характером и основным предложением", width: 675, height: 2048, kind: "feature" },
    { src: "/images/langway/site-portfolio-full.png", title: "Портфолио", note: "Визуальная презентация направлений и образовательных материалов", width: 834, height: 2048, kind: "portrait" },
    { src: "/images/langway/site-school-full.png", title: "О школе", note: "История, команда, подход к обучению и ключевые факты", width: 592, height: 2048, kind: "portrait" },
    { src: "/images/langway/site-project-full.png", title: "Страница проекта", note: "Подробная информация о программе, содержании и результатах обучения", width: 642, height: 2048, kind: "portrait" },
    { src: "/images/langway/site-contacts-full.png", title: "Контакты", note: "Офисы, способы связи и форма обращения", width: 1824, height: 2048, kind: "wide" },
  ];
  return (
    <div className="langway-page">
      <LangwayTextMotion />
      <Header />
      <CaseProgress />
      <main className="langway-shell">
        <Link href="/#projects" className="langway-back">← Все проекты</Link>

        <section className="langway-cover" aria-label="Обложка проекта Langway">
          <Image src="/images/langway/card-cover.png" alt="Langway — дизайн образовательного сайта на экране ноутбука" fill priority quality={100} sizes="100vw" />
        </section>

        <section className="langway-intro">
          <div className="langway-intro-copy"><span className="langway-kicker">01 / О ПРОЕКТЕ</span><h1>Язык, который<br />хочется изучать.</h1><p>Langway — сайт языковой школы с игровой визуальной подачей. Задача проекта — соединить яркий характер бренда с понятной структурой образовательного сайта: рассказать о школе, показать программы и помочь посетителю перейти к консультации.</p></div>
          <div className="langway-facts">
            <div><span>РОЛЬ</span><strong>UX/UI Designer</strong></div><div><span>ПЛАТФОРМА</span><strong>Desktop + Mobile</strong></div><div><span>СТАТУС</span><strong>Готовый дизайн сайта</strong></div><div><span>ИНСТРУМЕНТ</span><strong>Figma</strong></div><div><span>ГОД</span><strong>2025</strong></div>
          </div>
        </section>

        <section className="langway-section langway-challenge">
          <div className="langway-section-label"><span>02</span><p>ПРОБЛЕМАТИКА И ЗАДАЧИ</p></div>
          <div className="langway-section-content"><h2>Яркий сайт —<br />но сначала понятный.</h2>
            <p className="langway-lead">Образовательному проекту важно не только привлечь внимание, но и быстро объяснить посетителю, что предлагает школа, чем отличаются программы и как сделать следующий шаг. Поэтому ключевой задачей стало равновесие между эмоциональной визуальной подачей и ясной информационной архитектурой.</p>
            <div className="langway-problem-grid">
              <article><b>01 / ИНФОРМАЦИЯ</b><h3>Много разных смыслов</h3><p>История школы, направления обучения, преподаватели, достижения и контакты должны складываться в последовательный рассказ, а не конкурировать за внимание на одной странице.</p></article>
              <article><b>02 / ВЫБОР КУРСА</b><h3>Нужно быстро понять различия</h3><p>Посетителю важно сопоставить назначение программы, стоимость и количество занятий, увидеть подходящий вариант и перейти к подробной странице курса.</p></article>
              <article><b>03 / ДОВЕРИЕ</b><h3>Показать, кто стоит за школой</h3><p>Одних обещаний недостаточно: сайт должен наглядно представить команду, подход к обучению и материалы о школе, чтобы сформировать более полное представление о проекте.</p></article>
              <article><b>04 / КОНВЕРСИОННЫЙ ПУТЬ</b><h3>Не потерять посетителя</h3><p>После знакомства с предложением человеку нужен понятный маршрут к консультации — без необходимости заново искать контакты или разбираться, куда нажать.</p></article>
              <article><b>05 / ВИЗУАЛЬНЫЙ БАЛАНС</b><h3>Характер без ущерба читаемости</h3><p>Декоративная типографика, насыщенные цвета и 3D-персонажи должны создавать узнаваемость, но не перекрывать содержание и важные действия.</p></article>
              <article><b>06 / АДАПТАЦИЯ</b><h3>Сохранить логику на разных экранах</h3><p>Большие композиции и насыщенные карточки нужно адаптировать для мобильного просмотра, сохраняя приоритеты контента и доступность навигации.</p></article>
            </div>
            <div className="langway-task-strip"><span>ГЛАВНАЯ ЦЕЛЬ</span><p>Спроектировать выразительный сайт языковой школы, который последовательно знакомит с брендом, помогает выбрать курс и подводит к заказу консультации.</p></div>
          </div>
        </section>

        <section className="langway-section langway-flow-section">
          <div className="langway-section-label"><span>03</span><p>ПОЛЬЗОВАТЕЛЬСКИЙ СЦЕНАРИЙ · USER FLOW</p></div>
          <div className="langway-section-content"><div className="langway-flow-heading"><h2>Путь от знакомства<br />до консультации.</h2><p>Сценарий связывает основные разделы сайта и показывает два ключевых направления: изучение школы и выбор образовательной программы с переходом к консультации.</p></div>
            <div className="langway-flow-art"><Image src="/images/langway/user-flow.png" alt="User Flow сайта Langway: вход, главная, школа, услуги, команда и контакты" width={1569} height={957} sizes="(max-width: 900px) 100vw, 1200px" /></div>
          </div>
        </section>

        <section className="langway-section langway-screens-section">
          <div className="langway-section-label"><span>04</span><p>DESKTOP · ЭКРАНЫ САЙТА</p></div>
          <div className="langway-section-content"><div className="langway-flow-heading"><h2>Сайт в полном<br />масштабе.</h2><p>Ключевые страницы показаны в отдельных браузерных окнах с контрастной подложкой — интерфейс не теряется на фоне кейса, а его композиция и содержание остаются заметными.</p></div>
            <div className="langway-desktop-grid">{desktopViews.map((view, i) => <article className={`langway-desktop-card langway-screen-${view.kind}`} key={view.title}>
              <div className="langway-browser"><div className="langway-browser-bar"><span></span><span></span><span></span><b>langway.edu</b><i>↗</i></div><div className="langway-browser-screen" style={{ maxWidth: view.kind === "wide" ? "100%" : `${view.width}px` }}><Image src={view.src} alt={`${view.title} — полный экран сайта Langway`} width={view.width} height={view.height} quality={100} sizes={view.kind === "wide" ? "(max-width: 760px) 100vw, 1200px" : `${view.width}px`} /></div></div>
              <div className="langway-screen-caption"><span>0{i + 1} / WEBSITE</span><div><h3>{view.title}</h3><p>{view.note}</p></div></div>
            </article>)}</div>
          </div>
        </section>

        <Reveal className="langway-section langway-mobile-section">
          <div className="langway-section-label"><span>05</span><p>MOBILE · АДАПТИВНАЯ ВЕРСИЯ</p></div>
          <div className="langway-section-content">
            <div className="langway-flow-heading"><h2>Тот же характер.<br />Новый масштаб.</h2><p>Мобильная версия сохраняет фирменную палитру, типографику и визуальный язык Langway, перестраивая страницы в удобный вертикальный сценарий. В смартфонах — реальные макеты пяти разделов сайта.</p></div>
            <div className="langway-mobile-stage">
              {[
                {src:"/images/langway/mobile-home.png",title:"Главная",className:"mobile-phone-main",width:187,height:2048},
                {src:"/images/langway/mobile-school.png",title:"О школе",className:"mobile-phone-school",width:173,height:2047},
                {src:"/images/langway/mobile-portfolio.png",title:"Портфолио",className:"mobile-phone-portfolio",width:232,height:2048},
                {src:"/images/langway/mobile-project.png",title:"Страница проекта",className:"mobile-phone-project",width:173,height:2048},
                {src:"/images/langway/mobile-contacts.png",title:"Контакты",className:"mobile-phone-contacts",width:401,height:2048},
              ].map((phone,i)=><article className={`langway-mobile-phone ${phone.className}`} key={phone.title}>
                <div className="langway-phone-frame"><div className="langway-phone-island"/><div className="langway-phone-screen"><div className="langway-phone-scroll"><Image src={phone.src} alt={`Мобильная адаптация Langway — ${phone.title}`} width={phone.width} height={phone.height} quality={100} sizes="240px" /></div></div></div>
                <span className="langway-phone-caption">0{i+1} / {phone.title}</span>
              </article>)}
            </div>
            <p className="langway-mobile-note">Анимация прокрутки демонстрирует длинные страницы внутри мобильного viewport. Скриншоты остаются чёткими и не растягиваются на всю высоту композиции.</p>
          </div>
        </Reveal>

        <section className="langway-section langway-solution-section">
          <div className="langway-section-label"><span>06</span><p>РЕШЕНИЕ ДИЗАЙН-ЗАДАЧИ</p></div>
          <div className="langway-section-content"><h2>Игровая подача<br />с понятной навигацией.</h2><p className="langway-lead">Визуальная система строится на контрасте красного и жёлтого, выразительной типографике Lobelia и дружелюбных 3D-персонажах. Информационная архитектура организует этот визуальный язык вокруг понятных сценариев и последовательных разделов.</p>
            <div className="langway-solution-grid">
              <article><span>01</span><h3>Структура и навигация</h3><p>Разделы «О школе», «Наши услуги», «Команда» и «Контакты» выстроены в единую карту. Переходы от главной к каталогу и странице курса делают путь пользователя предсказуемым.</p></article>
              <article><span>02</span><h3>Каталог программ</h3><p>Карточки курсов показывают направление, стоимость и количество занятий. Крупная визуальная карточка помогает выделить программу, а остальные варианты остаются доступны для сравнения.</p></article>
              <article><span>03</span><h3>Страницы курса</h3><p>Детальная страница раскрывает содержание программы, преимущества и достижения, а также помогает понять, кому подходит обучение.</p></article>
              <article><span>04</span><h3>Доверие к школе</h3><p>История, команда, достижения и медиаматериалы формируют более полное представление о школе и поддерживают эмоциональную связь с аудиторией.</p></article>
              <article><span>05</span><h3>Целевое действие</h3><p>Заказ консультации выделен в самостоятельный сценарий. Контактный блок и заметная кнопка сокращают путь от изучения сайта до обращения.</p></article>
              <article><span>06</span><h3>Адаптивная композиция</h3><p>Для мобильной версии контент перестраивается в вертикальный поток: сохраняется иерархия, приоритеты блоков и доступность основных действий.</p></article>
            </div>
          </div>
        </section>

        <section className="langway-section langway-identity-section">
          <div className="langway-section-label"><span>07</span><p>ЦВЕТ И ТИПОГРАФИКА</p></div>
          <div className="langway-section-content"><div className="langway-identity-art"><Image src="/images/langway/identity.png" alt="Фирменные цвета и типографика Langway" width={2047} height={1252} sizes="(max-width: 900px) 100vw, 1200px" /></div>
            <div className="langway-palette"><div><i style={{background:"#D44430"}}></i><span>Основной красный</span><b>#D44430</b></div><div><i style={{background:"#FFC839"}}></i><span>Акцентный жёлтый</span><b>#FFC839</b></div><div><i style={{background:"#FFFFFF"}}></i><span>Белый</span><b>#FFFFFF</b></div><div><i style={{background:"#A01C09"}}></i><span>Тёмно-красный</span><b>#A01C09</b></div></div>
            <div className="langway-type-note"><strong>Lobelia</strong><p>Декоративный акцидентный шрифт для крупных заголовков, названий разделов и фирменных акцентов. Вспомогательные тексты сохраняют более спокойную и читаемую подачу.</p></div>
          </div>
        </section>

        <section className="langway-outcome">
          <span className="langway-kicker">08 / РЕЗУЛЬТАТ</span><h2>От первого знакомства<br />к следующему шагу.</h2><p>Подготовлен цельный дизайн сайта языковой школы для desktop и mobile. В проекте проработаны структура основных разделов, каталог и страницы курсов, блоки о школе и команде, контакты и сценарий заказа консультации. Это результат проектной работы над интерфейсом; реальные показатели конверсии и пользовательского тестирования не заявляются.</p>
          <div className="langway-result-stats"><div><strong>2</strong><span>адаптации: desktop и mobile</span></div><div><strong>4</strong><span>основных раздела сайта в User Flow</span></div><div><strong>1</strong><span>сквозной путь к консультации</span></div></div>
        </section>
        <div className="langway-bottom"><Link href="/#projects">← Все проекты</Link><a href="https://t.me/varik817" target="_blank" rel="noopener noreferrer">Обсудить проект ↗</a></div>
      </main>
      <footer className="site-footer page-shell langway-footer"><Link href="/" className="wordmark">V/KO<span> DESIGN</span></Link><span>© 2026 V/KO DESIGN</span><Link href="/#projects">Проекты ↑</Link></footer>
    </div>
  );
}

const nexScreens = [
  { number: 1, title: "Главная и обзор баланса" },
  { number: 2, title: "Профиль и настройки" },
  { number: 3, title: "Аналитика расходов" },
  { number: 4, title: "Детали операции" },
  { number: 8, title: "Управление профилем" },
  { number: 9, title: "Платежи и услуги" },
  { number: 10, title: "Перевод средств" },
  { number: 11, title: "Ввод данных карты" },
  { number: 12, title: "Подтверждение перевода" },
  { number: 13, title: "Документы и реквизиты" },
  { number: 14, title: "Завершение операции" },
];

function NexBankCase() {
  return (
    <div className="nex-page">
      <Header />
      <CaseProgress />
      <main className="nex-shell">
        <Link href="/#projects" className="nex-back">← Все проекты</Link>
        <section className="nex-cover">
          <Image src="/images/nexbank/cover.png" alt="NexBank — концепция цифрового банковского продукта" fill priority sizes="100vw" />
        </section>
        <div className="nex-marquee"><div className="nex-marquee-track">{Array.from({length:4}).map((_,i)=><span key={i}>BANKING MADE CLEAR <b>✳</b> CONTROL YOUR MONEY <b>✳</b> NEXBANK <b>✳</b></span>)}</div></div>

        <Reveal className="nex-intro">
          <div><span className="nex-kicker">01 / PROJECT OVERVIEW</span><h2>Финансы становятся понятнее, когда всё нужное под рукой.</h2><p className="nex-lead">NexBank — концепция мобильного банковского приложения для повседневных финансовых операций: платежей, переводов, контроля счетов, документов и общения с поддержкой.</p></div>
          <div className="nex-facts">
            <div><span>РОЛЬ</span><strong>Product Designer</strong></div><div><span>ТИП ПРОЕКТА</span><strong>FinTech / Banking</strong></div>
            <div><span>ПЛАТФОРМА</span><strong>Mobile app concept</strong></div><div><span>ИНСТРУМЕНТЫ</span><strong>Figma · FigJam</strong></div>
            <div><span>СТАТУС</span><strong>Design concept</strong></div><div><span>ФОКУС</span><strong>UX / UI / Identity</strong></div>
          </div>
        </Reveal>

        <Reveal className="nex-section">
          <div className="nex-section-label"><span>02</span><p>ПРОБЛЕМА</p></div>
          <div className="nex-section-content">
            <h2>Банковские задачи не должны превращаться в квест.</h2>
            <p className="nex-big-copy">В банковском приложении человек решает не одну задачу, а целую цепочку: проверяет баланс, разбирается в движении средств, выбирает нужный платёж, вводит реквизиты, проверяет данные и ждёт подтверждения. Если эти действия визуально и логически не связаны, пользователю приходится каждый раз заново ориентироваться в интерфейсе. Это увеличивает когнитивную нагрузку и делает особенно чувствительные операции — связанные с деньгами и личными данными — менее спокойными и предсказуемыми.</p>
            <div className="nex-problem-grid">
              <article><span>01 / РАЗРОЗНЕННОСТЬ</span><h3>Слишком много разных задач</h3><p>Баланс, платежи, история, профиль и поддержка — разные по смыслу задачи. Если они не собраны в устойчивую структуру, пользователь вынужден искать нужный раздел и запоминать, где находится конкретное действие. Поэтому я выстроил общую навигацию и закрепил основные разделы в одном и том же месте.</p></article>
              <article><span>02 / НЕОПРЕДЕЛЁННОСТЬ</span><h3>Пользователь хочет понимать, что происходит с деньгами</h3><p>При переводе или оплате недостаточно просто нажать кнопку. Нужно понимать, откуда списываются деньги, кому они отправляются, какая сумма указана и завершилась ли операция. В интерфейсе я сделал акцент на истории, деталях транзакции и отдельных состояниях подтверждения, чтобы результат действия был заметен.</p></article>
              <article><span>03 / РАЗНЫЕ СЦЕНАРИИ</span><h3>У разных людей разные финансовые привычки</h3><p>Фрилансер, предприниматель и офисный сотрудник по-разному используют банковский сервис: одним важны переводы и поступления, другим — контроль расходов и платежи, третьим — повседневные операции. Персоны и CJM помогли разложить эти контексты на задачи и не сводить продукт к одному сценарию.</p></article>
              <article><span>04 / ДОВЕРИЕ</span><h3>Банковский интерфейс должен быть предсказуемым</h3><p>Неясная подпись, незаметная ошибка или отсутствие финального статуса могут заставить человека сомневаться, отправлен ли платёж. Поэтому в концепции важны последовательность шагов, читаемые состояния, понятные подписи и визуально выделенное подтверждение результата.</p></article>
            </div>
            <div className="nex-insight"><span>DESIGN CHALLENGE</span><strong>Как создать единое пространство, в котором пользователь быстро находит нужную операцию, понимает каждый шаг и чувствует контроль над своими средствами?</strong></div>
          </div>
        </Reveal>

        <Reveal className="nex-section">
          <div className="nex-section-label"><span>03</span><p>ИССЛЕДОВАНИЕ И ПЕРСОНЫ</p></div>
          <div className="nex-section-content"><div className="nex-heading-row"><h2>Три пользовательских контекста.</h2><p>Персоны отражают три типа финансовых задач, обозначенных в исследовательских материалах: удалённое управление финансами, операции бизнеса и повседневное использование банковских услуг.</p></div>
            <div className="nex-image-frame nex-personas"><Image src="/images/nexbank/personas.png" alt="Три персоны NexBank с ожиданиями и мотивацией" width={1915} height={878} /></div>
            <div className="nex-persona-notes"><article><span>01 / ФРИЛАНСЕР</span><p>Хочет управлять финансами без посещения офиса, получать оплату от клиентов и быстро переводить средства между счетами и картами.</p></article><article><span>02 / БИЗНЕСМЕН</span><p>Хочет контролировать движение средств компании и личные финансы, а также быстро рассчитываться с партнёрами и сотрудниками.</p></article><article><span>03 / ОФИСНЫЙ СОТРУДНИК</span><p>Хочет получать зарплату, оплачивать счета, контролировать расходы и удобно переводить деньги близким.</p></article></div>
          </div>
        </Reveal>

        <Reveal className="nex-section">
          <div className="nex-section-label"><span>04</span><p>CJM — ПУТЬ ПОЛЬЗОВАТЕЛЯ</p></div>
          <div className="nex-section-content"><div className="nex-heading-row"><h2>Учитывать не только действие, но и сомнение.</h2><p>Карта показывает путь от входа и выбора операции до отправки и проверки результата, включая вопросы пользователя, возможные негативные ситуации и возможности улучшения опыта.</p></div>
            <div className="nex-image-frame"><Image src="/images/nexbank/cjm.png" alt="CJM NexBank: действия, вопросы, негатив, позитив и решения" width={2048} height={1363} /></div>
          </div>
        </Reveal>

        <Reveal className="nex-section">
          <div className="nex-section-label"><span>05</span><p>USER FLOW</p></div>
          <div className="nex-section-content"><div className="nex-heading-row"><h2>Связать функции в понятную систему.</h2><p>Основная навигация объединяет пять разделов: Главная, Платежи, История, Чат с оператором и Профиль. Внутри каждого раздела предусмотрены вложенные сценарии.</p></div>
            <div className="nex-image-frame"><Image src="/images/nexbank/user-flow.png" alt="User Flow NexBank — структура экранов и пользовательских сценариев" width={2048} height={763} /></div>
          </div>
        </Reveal>

        <Reveal className="nex-section">
          <div className="nex-section-label"><span>06</span><p>ДИЗАЙН ИНТЕРФЕЙСА</p></div>
          <div className="nex-section-content"><div className="nex-heading-row"><h2>Ключевые операции — без визуального шума.</h2><p>Экранные решения демонстрируют работу с документами и адресами, каталог платежей, переводы между счетами и подтверждение успешной операции.</p></div>
            <div className="nex-screen-grid">{nexScreens.map(({number,title})=><article className={`nex-screen-card${number === 3 ? " nex-screen-card-chart" : ""}`} key={number}><div className="nex-screen-device"><Image src={`/images/nexbank/screen-${String(number).padStart(2,"0")}.png`} alt={`Экран NexBank ${number}`} width={900} height={1800} /></div><div className="nex-screen-caption"><span>SCREEN / {String(number).padStart(2,"0")}</span><h3>{title}</h3></div></article>)}</div>
          </div>
        </Reveal>

        <Reveal className="nex-section">
          <div className="nex-section-label"><span>07</span><p>DESIGN SYSTEM</p></div>
          <div className="nex-section-content"><div className="nex-heading-row"><h2>Последовательность в каждой детали.</h2><p>В дизайн-системе зафиксированы фирменные цвета, типографика SF Pro Display, состояния нижней навигации, UI-компоненты и набор иконок.</p></div>
            <div className="nex-image-frame"><Image src="/images/nexbank/design-system.png" alt="Дизайн-система NexBank: цвета, шрифт, компоненты, иконки" width={2048} height={635} /></div>
            <div className="nex-colors"><article><i style={{background:"#5F84DF"}}/><strong>#5F84DF</strong><span>Primary blue</span></article><article><i style={{background:"#24CB71"}}/><strong>#24CB71</strong><span>Green</span></article><article><i style={{background:"#DC4E54"}}/><strong>#DC4E54</strong><span>Red</span></article><article><i style={{background:"#FFFFFF"}}/><strong>#FFFFFF</strong><span>White</span></article></div>
          </div>
        </Reveal>

        <Reveal className="nex-section">
          <div className="nex-section-label"><span>08</span><p>ЛОГОТИП И АЙДЕНТИКА</p></div>
          <div className="nex-section-content"><div className="nex-heading-row"><h2>Узнаваемый знак — от приложения до физических носителей.</h2><p>Геометрический знак N и написание NexBank формируют основу визуальной идентичности. Логотип подготовлен в векторном формате и используется в цифровой среде и на брендированных объектах.</p></div>
            <div className="nex-logo-panel"><Image src="/images/nexbank/logo.svg" alt="Векторный логотип NexBank" width={360} height={180} /></div>
            <div className="nex-brand-grid"><article><div><Image src="/images/nexbank/bank-cards.png" alt="Банковские карты NexBank" width={2048} height={1125}/></div><h3>Банковские карты</h3><p>Фирменный знак и цветовая система на банковском продукте.</p></article><article><div><Image src="/images/nexbank/branded-tape.png" alt="Брендированная лента NexBank" width={719} height={395}/></div><h3>Брендированная лента</h3><p>Повторяющийся паттерн с логотипом для упаковки.</p></article><article><div><Image src="/images/nexbank/phone-case.png" alt="Чехол смартфона с логотипом NexBank" width={2047} height={1505}/></div><h3>Чехол смартфона</h3><p>Применение логотипа на повседневном аксессуаре.</p></article></div>
          </div>
        </Reveal>

        <Reveal className="nex-section nex-outcome">
          <div className="nex-section-label"><span>09</span><p>ИТОГ ПРОЕКТА</p></div>
          <div className="nex-section-content"><h2>От отдельных банковских функций — к целостному цифровому продукту.</h2><p className="nex-big-copy">Я собрал разрозненные банковские сценарии в целостную концепцию мобильного продукта: от первого взгляда на баланс до платежа, просмотра деталей операции и обращения в поддержку. Дизайн задаёт понятную структуру, помогает ориентироваться в финансовой информации и делает ключевые действия визуально последовательными.</p>
            <div className="nex-outcome-grid"><article><strong>3</strong><span>персоны с разными финансовыми контекстами</span></article><article><strong>5</strong><span>основных разделов нижней навигации</span></article><article><strong>4</strong><span>цвета в базовой палитре</span></article><article><strong>1</strong><span>единая визуальная система продукта</span></article></div>
            <div className="nex-outcome-details"><h3>Что дал дизайн-проект</h3><ul>
              <li><b>Единая точка входа.</b> Главный экран объединяет обзор баланса, быстрые действия и последние операции. Пользователь начинает с общего состояния счёта и может перейти к нужному действию без поиска по разрозненным экранам.</li>
              <li><b>Предсказуемая навигация.</b> Основные функции распределены по пяти постоянным разделам: Главная, Платежи, История, Чат и Профиль. Это формирует устойчивую модель перемещения по приложению.</li>
              <li><b>Последовательность финансовых действий.</b> Проработаны сценарии просмотра баланса, анализа расходов, выбора платежа, ввода данных, проверки деталей, подтверждения и просмотра истории. Каждый этап получил своё место в пользовательском пути.</li>
              <li><b>Прозрачность результата.</b> Экран деталей операции и история помогают вернуться к информации о транзакции, а отдельные состояния подтверждения показывают, что действие завершено.</li>
              <li><b>Учет разных пользователей.</b> Персоны помогли обозначить задачи фрилансера, предпринимателя и офисного сотрудника и связать их с набором функций.</li>
              <li><b>Снижение неопределённости.</b> В CJM отмечены вопросы и сомнения на ключевых этапах. В интерфейсных решениях этому отвечают проверка реквизитов, понятные подписи, детали транзакции и визуальные подтверждения.</li>
              <li><b>Системность интерфейса.</b> Цвета, типографика, иконки, карточки, кнопки и состояния навигации собраны в единую визуальную систему. Повторяемые паттерны помогают быстрее считывать интерфейс на разных экранах.</li>
              <li><b>Целостность бренда.</b> Логотип и фирменный стиль показаны на экране приложения, банковских картах, ленте и чехле смартфона.</li>
            </ul></div>
            <p className="nex-note">NexBank — концептуальный дизайн-проект. Итог — проработанная структура, пользовательские сценарии, набор интерфейсных экранов и визуальная система бренда. В материалах нет результатов запуска или пользовательского тестирования, поэтому я не приписываю дизайну неподтверждённый рост конверсии, снижение ошибок или другие бизнес-метрики. Описанный эффект относится к тому, что было спроектировано и представлено в концепте.</p>
          </div>
        </Reveal>
        <div className="nex-bottom"><Link href="/#projects">← Все проекты</Link><a href="https://t.me/varik817" target="_blank" rel="noopener noreferrer">Обсудить проект ↗</a></div>
      </main>
      <footer className="site-footer page-shell langway-footer"><Link href="/" className="wordmark">V/KO<span> DESIGN</span></Link><span>© 2026 V/KO DESIGN</span><Link href="/#projects">Проекты ↑</Link></footer>
    </div>
  );
}
