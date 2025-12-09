import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import "./globals.css";
import { Theme } from "@chakra-ui/react";
import { Saira, Kanit, Oswald } from "next/font/google";

export const metadata: Metadata = {
  title: "Kreatív Web Mágus",
  description:
    "Innovatív megoldások webáruházakhoz, asztali alkalmazásokhoz és webes projektekhez. Ötletekből kreatív digitális élményeket varázsolunk."
};

const saira = Saira({ subsets: ["latin"], variable: "--main-font" });
const kanit = Kanit({
  subsets: ["latin"],
  variable: "--secondary-font",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});
const oswald = Oswald({ subsets: ["latin"], variable: "--oswald-font" });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${saira.variable} ${kanit.variable} ${oswald.variable}`}
    >
      <body>
        <Provider theme={Theme}>{children}</Provider>
      </body>
    </html>
  );
}
