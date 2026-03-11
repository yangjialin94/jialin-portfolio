"use client";

import Card from "@/components/Card";
import SideBar from "@/components/SideBar";
import { experiences } from "@/data/experiences";
import { ExperienceOrProject } from "@/types/types";

export default function ExperiencesPage() {
  const sortedExperiences = [...experiences].sort((a, b) => b.id - a.id);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Experience
        </h1>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
          Professional experience building and operating production systems.
        </p>
      </div>

      <div className="space-y-8">
        {sortedExperiences.map((experience: ExperienceOrProject) => (
          <Card key={experience.id} data={experience} type="experience" />
        ))}
      </div>

      <SideBar page="Experience" />
    </div>
  );
}
