import type { Metadata } from "next";
import "./globals.css";
import CoreProvider from "./api/core-provider";
import { UserProvider } from "./hooks/use-auth";


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
        <CoreProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </CoreProvider>
      </body>
    </html>
  );
}
