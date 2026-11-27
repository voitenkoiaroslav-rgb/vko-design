import Image from "next/image";

export default function HeroWow() {
  return (
    <div className="hero-portrait hero-wow" aria-label="Портрет дизайнера">
      <Image
        src="/images/portrait-clean.webp"
        alt="Чёрно-белый портрет дизайнера на светлом фоне"
        width={1184}
        height={1328}
        priority
        quality={95}
        sizes="(max-width: 600px) 220px, (max-width: 900px) 280px, (max-width: 1100px) 360px, 460px"
      />
    </div>
  );
}
