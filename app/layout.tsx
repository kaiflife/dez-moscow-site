import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Уничтожение клопов и тараканов в Москве и МО | Санэпидслужба",
  description:
    "Профессиональная дезинсекция, дезинфекция и дератизация помещений. Выезд за 1 час. Круглосуточно. Гарантия по договору до 3 лет!",
  openGraph: {
    title: "Уничтожение насекомых и грызунов в Москве",
    description: "Официальная санэпидслужбы. Безопасные препараты.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="antialiased bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
