import type { Metadata } from "next";
import "./globals.css";
import CoreProvider from "./api/core-provider";
import { AuthProvider } from "./hooks/use-auth";

import { Poppins } from 'next/font/google'


export const metadata: Metadata = {
  title: "Work it",
  description: "Faça acontecer!",
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'

})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body
        className={`dark`}
      >
        <CoreProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </CoreProvider>
      </body>
    </html>
  );
}
