"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import SideBar from "@/components/SideBar";
import { raleway600 } from "@/styles/fonts";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-4">
        <div className="flex items-start gap-6">
          <div className="shrink-0">
            <Image
              src="/images/profile_small.png"
              alt="Jialin Yang"
              width={120}
              height={120}
              className="rounded-full border border-gray-200 dark:border-gray-800"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
              Jialin Yang
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
              Software Engineer | M.S. Artificial Intelligence @ Penn | Applied AI Focus
            </p>
          </div>
        </div>

        <div className="max-w-2xl space-y-2">
          <p className="text-sm text-gray-700 dark:text-gray-300 sm:text-base">
            I build and operate production software systems used by real users.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 sm:text-base">
            Exploring Summer 2026 internships aligned with applied AI and software systems.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/files/Jialin_Resume_01152026.pdf"
            download="Jialin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${raleway600.className} inline-flex items-center gap-2 rounded border border-gray-900 bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700`}
          >
            <ArrowDownTrayIcon className="h-4 w-4" />
            Resume
          </Link>
          <Link
            href="/experiences"
            className={`${raleway600.className} inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800`}
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className={`${raleway600.className} inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800`}
          >
            Projects
          </Link>
          <Link
            href="/education"
            className={`${raleway600.className} inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800`}
          >
            Education
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-2xl space-y-4 border-t border-gray-200 pt-8 dark:border-gray-800">
        <p className="text-sm leading-6 text-gray-700 dark:text-gray-300 sm:text-base">
          I&apos;m a product-minded software engineer with over six years of experience owning
          production systems across web and backend.
        </p>
        <p className="text-sm leading-6 text-gray-700 dark:text-gray-300 sm:text-base">
          My work includes building and shipping SaaS platforms and consumer applications, with
          responsibility spanning backend services, data flows, infrastructure, deployment, and
          production support.
        </p>
        <p className="text-sm leading-6 text-gray-700 dark:text-gray-300 sm:text-base">
          I&apos;m currently expanding my focus toward applied AI systems through the M.S. in
          Artificial Intelligence program at the University of Pennsylvania, building foundations in
          machine learning and data-driven system design.
        </p>
      </section>

      {/* Navigation */}
      <nav>
        <SideBar page="Home" />
      </nav>
    </div>
  );
}
