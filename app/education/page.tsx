"use client";

import SideBar from "@/components/SideBar";
import Education from "@/data/education.json";
import Image from "next/image";

interface EducationEntry {
  id: number;
  institution: string;
  degree: string;
  dates: string;
  logo?: string;
}

export default function EducationPage() {
  const educationEntries = [...Education].sort((a, b) => a.id - b.id);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Education
        </h1>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
          Academic background and degrees.
        </p>
      </div>

      <div className="space-y-8">
        {educationEntries.map((entry: EducationEntry) => (
          <article
            key={entry.id}
            className="space-y-2 border-b border-gray-200 pb-8 last:border-0 dark:border-gray-800"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="flex items-start gap-4">
                {entry.logo && (
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded">
                    <Image
                      src={entry.logo}
                      alt={`${entry.institution} logo`}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {entry.institution}
                  </h2>
                  <p className="mt-1 text-base text-gray-600 dark:text-gray-400">{entry.degree}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500">{entry.dates}</p>
            </div>
          </article>
        ))}
      </div>

      <SideBar page="Education" />
    </div>
  );
}
