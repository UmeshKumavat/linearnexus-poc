import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LinearNexus AI CRM',
  description: 'AI-powered CRM that converts emails into contacts and leads automatically.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.className} antialiased min-h-full bg-[#F8FAFC]`}>
        {children}
      </body>
    </html>
  );
}
