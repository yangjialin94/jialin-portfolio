import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import VantaBackground from "@/components/VantaBackground";

export const metadata = {
  title: "Jialin Yang's Portfolio",
  description: "Explore the projects, skills, and achievements of Jialin Yang.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Jialin Yang's Portfolio",
    description: "Explore the projects, skills, and achievements of Jialin Yang.",
    url: "https://jialinyang.com",
    siteName: "Jialin Yang's Portfolio",
    images: [
      {
        url: "https://jialinyang.com/images/jialin-122324.jpg",
        width: 1200,
        height: 630,
        alt: "Jialin Yang holding a cup of coffee with a cheerful expression.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jialin Yang's Portfolio",
    description: "Explore the projects, skills, and achievements of Jialin Yang.",
    images: ["https://jialinyang.com/images/jialin-122324.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex h-screen flex-col bg-gray-200 p-6 text-gray-800 antialiased dark:bg-gray-800 dark:text-gray-200 sm:p-12">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main className="flex flex-1 rounded-lg border-2 border-gray-500">
            <div className="relative flex-1 p-6 sm:p-12">
              {/* Content */}
              {children}

              {/* Background */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded">
                <VantaBackground />
              </div>
            </div>
          </main>
          <ThemeSwitcher />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
