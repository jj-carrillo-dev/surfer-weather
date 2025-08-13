import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import './globals.css'
import I18nProvider from '../components/i18nProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Surfer Weather Germany',
  description: 'Real-time wave and wind conditions for surfers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gradient-to-b from-blue-50 to-blue-100`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
