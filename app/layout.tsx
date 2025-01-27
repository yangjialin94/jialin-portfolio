import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

import ThemeSwitcher from '@/components/theme-switcher';

export const metadata = {
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
        url: 'https://jialinyang.com/images/jialin-122324.jpg',
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
    images: ['https://jialinyang.com/images/jialin-122324.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gray-50 text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
