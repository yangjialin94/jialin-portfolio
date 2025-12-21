"use client";

import Card from "@/components/Card";
import SideBar from "@/components/SideBar";
import Projects from "@/data/projects.json";
import { ExperienceOrProject } from "@/types/types";

export default function ProjectsPage() {
  const projects = [...Projects].sort((a, b) => b.id - a.id);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Projects
        </h1>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
          Selected production systems, applied engineering work, and archived projects.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project: ExperienceOrProject) => (
          <Card key={project.id} data={project} type="project" />
        ))}
      </div>

      <SideBar page="Projects" />
    </div>
  );
}
