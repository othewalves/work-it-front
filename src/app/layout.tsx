import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Work it",
  description: "Faça acontecer!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={` dark`}
      >
        {children}
      </body>
    </html>
  );
}
