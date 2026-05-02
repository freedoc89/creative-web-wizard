import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import "./globals.css";
import { Theme } from "@chakra-ui/react";
import { Saira, Kanit, Oswald } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "../context/LanguageContext";
import { Locale } from "@/data/localization";

const metaTranslations = {
  hu: {
    title: "Kreatív Web Mágus",
    description:
      "Innovatív megoldások webáruházakhoz, asztali alkalmazásokhoz és webes projektekhez."
  },
  en: {
    title: "Creative Web Wizard",
    description:
      "Innovative solutions for e-commerce, desktop apps, and web projects."
  },
  de: {
    title: "Kreativer Web-Magier",
    description:
      "Innovative Lösungen für E-Commerce, Desktop-Apps und Webprojekte."
  }
};
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t =
    metaTranslations[locale as keyof typeof metaTranslations] ||
    metaTranslations.hu;

  return {
    metadataBase: new URL("https://creativewebwizard.hu"),
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "hu-HU": "/hu",
        "en-US": "/en",
        "de-DE": "/de"
      }
    }
  };
}

const saira = Saira({ subsets: ["latin"], variable: "--main-font" });
const kanit = Kanit({
  subsets: ["latin"],
  variable: "--secondary-font",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});
const oswald = Oswald({ subsets: ["latin"], variable: "--oswald-font" });

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html
      suppressHydrationWarning
      lang={locale}
      className={`${saira.variable} ${kanit.variable} ${oswald.variable}`}
    >
      <body>
        <Provider theme={Theme}>
          <LanguageProvider initialLocale={locale as Locale}>
            {children}
            <Toaster />
          </LanguageProvider>
        </Provider>
      </body>
    </html>
  );
}
