import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import "./globals.css";
import { Theme } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Kreatív Web Mágus",
  description:
    "Innovatív megoldások webáruházakhoz, asztali alkalmazásokhoz és webes projektekhez. Ötletekből kreatív digitális élményeket varázsolunk."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Provider theme={Theme}>{children}</Provider>
      </body>
    </html>
  );
}
