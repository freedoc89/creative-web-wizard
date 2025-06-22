import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import "./globals.css";

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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
