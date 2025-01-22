import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import '@/styles/globals.css';

import Footer from '@/components/footer';
import ThemeSwitcher from '@/components/theme-switcher';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Jialin Yang's Portfolio",
  description: 'Explore the projects, skills, and achievements of Jialin Yang.',
  openGraph: {
    title: "Jialin Yang's Portfolio",
    description:
      'Explore the projects, skills, and achievements of Jialin Yang.',
    url: 'https://jialinyang.com',
    siteName: "Jialin Yang's Portfolio",
    images: [
      {
        url: 'https://jialinyang.com/images/jialin_122324.jpg',
        width: 800,
        height: 800,
        alt: 'Jialin Yang holding a cup of coffee with a cheerful expression.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jialin Yang's Portfolio",
    description:
      'Explore the projects, skills, and achievements of Jialin Yang.',
    images: ['https://jialinyang.com/images/jialin_122324.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased flex flex-col min-h-screen text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-gray-100`}
      >
        {/* Main */}
        {children}

        {/* Footer */}
        <Footer />

        {/* Theme */}
        <ThemeSwitcher />
      </body>
    </html>
  );
}
