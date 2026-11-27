import Link from "next/link";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";
import HeroWow from "@/components/HeroWow";
import Parallax from "@/components/Parallax";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero page-shell">
          <div className="hero-layout">
            <Parallax className="hero-copy-parallax" distance={24}><div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> НЕЗАВИСИМЫЙ ДИЗАЙНЕР · V/KO DESIGN</div>
              <h1>Создаю цифровые<br />продукты, <span>которыми удобно<br className="hero-desktop-break" /> пользоваться.</span></h1>
              <div className="hero-bottom">
                <p>UX/UI и Product Designer. Проектирую сайты и мобильные приложения — от понимания задачи до готового интерфейса.</p>
                <a className="text-link" href="#projects">Смотреть проекты <span>↓</span></a>
              </div>
            </div></Parallax>
            <Parallax className="hero-portrait-parallax" distance={42}><HeroWow /></Parallax>
          </div>
        </section>

        <Reveal className="projects-section page-shell"><section id="projects">
          <div className="section-heading">
            <div><span className="section-kicker">ИЗБРАННЫЕ РАБОТЫ</span><h2>Проекты<span className="muted"> ({String(projects.length).padStart(2, "0")})</span></h2></div>
            <p>Исследование, логика и визуальный язык<br />цифровых продуктов.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </section></Reveal>

        <Reveal className="about-section page-shell"><section id="about">
          <div className="section-kicker">ОБО МНЕ</div>
          <div className="about-content">
            <h2>Дизайн начинается<br />с <span className="muted">понимания.</span></h2>
            <div>
              <p>Я проектирую цифровые интерфейсы, уделяя внимание не только визуальной части, но и тому, как человек решает свою задачу внутри продукта.</p>
              <p>В работе соединяю пользовательские сценарии, структуру информации и аккуратный визуальный дизайн.</p>
              <div className="skill-list"><span>UX Research</span><span>Information Architecture</span><span>User Flow</span><span>Wireframing</span><span>UI Design</span><span>Prototyping</span><span>Design Systems</span></div>
            </div>
          </div>
        </section></Reveal>

        <Reveal className="skills-section page-shell"><section id="skills">
          <div className="section-heading skills-heading">
            <div><span className="section-kicker">ЭКСПЕРТИЗА</span><h2>Навыки и <span className="muted">инструменты.</span></h2></div>
            <p>От исследования пользовательских задач<br />до проработанного интерфейса.</p>
          </div>
          <div className="skills-tools-grid">
            <div className="skills-column">
              <span className="skills-column-label">01 / НАВЫКИ</span>
              <div className="skills-group"><h3>UX / Product</h3><p>UX Research · User Flow · CJM · Information Architecture · Wireframing · Prototyping</p></div>
              <div className="skills-group"><h3>UI / Visual</h3><p>UI Design · Design Systems · Responsive Design · Typography · Visual Hierarchy · Interface Design</p></div>
              <div className="skills-group"><h3>Дополнительно</h3><p>HTML · CSS · Основы frontend · Работа с AI-инструментами</p></div>
            </div>
            <div className="tools-column">
              <span className="skills-column-label">02 / ИНСТРУМЕНТЫ</span>
              <div className="tool-tags"><span>Figma</span><span>FigJam</span><span>Photoshop</span><span>Illustrator</span><span>HTML / CSS</span><span>Flutter</span><span>Next.js</span><span>React</span><span>Supabase</span><span>AI tools</span></div>
              <p className="tools-note">Инструменты подбираю под задачу и этап работы над продуктом.</p>
            </div>
          </div>
          <div className="cv-placeholder" id="cv"><span>CV / 2026</span><p>UX/UI &amp; Product Designer · PDF</p><a className="cv-download" href="/cv.pdf" target="_blank" rel="noopener noreferrer">Открыть резюме <span>↗</span></a><a className="cv-download cv-download-secondary" href="/cv.pdf" download="Yaroslav-Voitenko-CV.pdf">Скачать PDF <span>↓</span></a></div>
        </section></Reveal>

        <Reveal className="process-section page-shell"><section>
          <div className="section-heading"><div><span className="section-kicker">ПОДХОД</span><h2>От задачи<br />к решению.</h2></div><p>Последовательный процесс помогает<br />принимать обоснованные дизайн-решения.</p></div>
          <div className="process-grid">
            {[["01","Исследую","Разбираюсь в задаче, аудитории и контексте."],["02","Структурирую","Проектирую архитектуру и пользовательские сценарии."],["03","Проектирую","Создаю wireframes, интерфейсы и дизайн-систему."],["04","Проверяю","Собираю прототип и проверяю ключевые сценарии."]].map(([n,t,d]) => <Parallax className="process-parallax" distance={18} key={n}><div className="process-item"><span>{n}</span><h3>{t}</h3><p>{d}</p></div></Parallax>)}
          </div>
        </section></Reveal>

        <Reveal className="contact-section page-shell"><section id="contact">
          <span className="section-kicker">КОНТАКТЫ</span>
          <h2>Есть задача?<br /><span>Давайте обсудим.</span></h2>
          <a className="contact-link" href="https://t.me/varik817" target="_blank" rel="noopener noreferrer">@varik817 <span>↗</span></a>
        </section></Reveal>
      </main>
      <footer className="site-footer page-shell"><Link href="/" className="wordmark">V/KO<span> DESIGN</span></Link><span>© 2026 V/KO DESIGN</span><a href="#top">Наверх ↑</a></footer>
    </>
  );
}
