import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DePlano - Le Novel Food : Frein ou accélérateur d'innovation ?",
  description: "Talk organisé par DePlano x CPME sur le Novel Food",
};

// Force scroll to top on page load
const ScrollToTop = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `window.history.scrollRestoration = 'manual'; window.scrollTo(0, 0);`,
    }}
  />
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <ScrollToTop />
      </head>
      <body className={`${openSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
