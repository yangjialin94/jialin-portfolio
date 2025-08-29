"use client";

import { motion } from "framer-motion";

import Card from "@/components/Card";
import SideBar from "@/components/SideBar";
import Projects from "@/data/projects.json";
import { audiowide } from "@/styles/fonts";
import { ExperienceOrProject } from "@/types/types";

export default function ProjectsPage() {
  const projects = [...Projects].sort((a, b) => b.id - a.id);

  const containerVariants = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex max-h-[calc(100vh-120px)] flex-col gap-12 sm:max-h-[calc(100vh-200px)] lg:flex-row lg:justify-between">
      {/* Navigation */}
      <div className="flex w-full flex-col items-center lg:items-start">
        <h1 className={`${audiowide.className} text-3xl font-bold sm:text-5xl`}>Projects</h1>
        <div className="mb-0 mt-10 sm:mb-10 sm:mt-20">
          <SideBar page="Projects" />
        </div>
      </div>

      {/* Projects List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full space-y-6 overflow-y-auto rounded-lg px-0 sm:space-y-10 sm:px-4"
      >
        {projects.map((project: ExperienceOrProject) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Card data={project} type="project" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
