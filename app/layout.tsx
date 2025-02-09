import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';

import ThemeSwitcher from '@/components/theme-switcher';

export const metadata = {
  title: "Jialin Yang's Portfolio",
  description: 'Explore the projects, skills, and achievements of Jialin Yang.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Jialin Yang's Portfolio",
    description:
      'Explore the projects, skills, and achievements of Jialin Yang.',
    url: 'https://jialinyang.com',
    siteName: "Jialin Yang's Portfolio",
    images: [
      {
        url: 'https://jialinyang.com/images/jialin-122324.jpg',
        width: 1200,
        height: 630,
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
    images: ['https://jialinyang.com/images/jialin-122324.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-gray-50 text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <ThemeSwitcher />
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
