import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="V/KO DESIGN — главная">V/KO<span> DESIGN</span></Link>
      <nav className="main-nav" aria-label="Основная навигация">
        <Link href="/#projects">Проекты</Link>
        <Link href="/#about">Обо мне</Link>
        <Link href="/#contact">Контакты</Link>
      </nav>
      <a className="header-cta header-cv" href="/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Открыть резюме PDF в новой вкладке">CV <span>↗</span></a>
    </header>
  );
}
