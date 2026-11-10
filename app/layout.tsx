import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slovo mluvené — rodinný audioarchiv",
  description: "Soukromý rodinný archiv rozhlasových her, četeb a povídek.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}