import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "V/KO DESIGN — UX/UI & Product Designer",
  description: "Портфолио UX/UI и Product Designer. Исследование, проектирование и дизайн цифровых продуктов.",
  openGraph: {
    title: "V/KO DESIGN",
    description: "UX/UI & Product Design Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
