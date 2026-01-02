import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata = {
  title: "Jialin Yang — Software Engineer",
  description:
    "Software Engineer with 6+ years of experience building and operating production systems, transitioning toward ML via Penn MSE-AI.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Jialin Yang — Software Engineer",
    description:
      "Software Engineer with 6+ years of experience building and operating production systems, transitioning toward ML via Penn MSE-AI.",
    url: "https://jialinyang.com",
    siteName: "Jialin Yang's Portfolio",
    images: [
      {
        url: "https://jialinyang.com/images/jialin-122324.jpg",
        width: 1200,
        height: 630,
        alt: "Jialin Yang — Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jialin Yang — Software Engineer",
    description:
      "Software Engineer with 6+ years of experience building and operating production systems, transitioning toward ML via Penn MSE-AI.",
    images: ["https://jialinyang.com/images/jialin-122324.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-16">{children}</main>
          <ThemeSwitcher />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
