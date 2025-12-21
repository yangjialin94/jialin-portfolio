"use client";

import Link from "next/link";

import Skills from "@/components/Skills";
import { ExperienceOrProject } from "@/types/types";

import Bullet from "./Bullet";

interface CardProps {
  data: ExperienceOrProject;
  type: "experience" | "project";
}

const Card = ({ data, type }: CardProps) => {
  return (
    <article className="space-y-4 border-b border-gray-200 pb-8 last:border-0 dark:border-gray-800">
      {/* Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          {data.website && !data.company ? (
            <Link
              href={data.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
            >
              <h2 className="text-xl font-semibold">{data.title}</h2>
            </Link>
          ) : (
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{data.title}</h2>
          )}
          {data.company && (
            <p className="mt-1 text-base text-gray-600 dark:text-gray-400">{data.company}</p>
          )}
          {data.subtitle && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">{data.subtitle}</p>
          )}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-500">{data.dates}</p>
      </div>

      {/* Description */}
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <ul className="space-y-2">
          {data.tasks.map((task) => (
            <li key={task.id} className="text-gray-700 dark:text-gray-300">
              {type === "experience" ? <Bullet description={task.description} /> : task.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <details className="mt-4">
        <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          Tech Stack
        </summary>
        <div className="mt-4 space-y-3">
          {Object.entries(data.skills).map(([type, skills]) => (
            <div key={type}>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-500">
                {type}
              </p>
              <Skills skills={skills} />
            </div>
          ))}
        </div>
      </details>
    </article>
  );
};

export default Card;
