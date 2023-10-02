// next
import type { Metadata } from "next";
// styles
import "@/assets/styles/globals.scss";
// components
import Header from "@/components/Globals/Header";

export const metadata: Metadata = {
  title: "Главная | Veeb.io",
  description: "Veeb.io - search for contacts and insiders for sellers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main className="container">{children}</main>
        <script type="text/javascript" src="/scripts/metrika.js" async />
      </body>
    </html>
  );
}
