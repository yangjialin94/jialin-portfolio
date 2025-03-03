"use client";

import { motion } from "framer-motion";

import Card from "@/components/Card";
import SideBar from "@/components/SideBar";
import Experiences from "@/data/experiences.json";
import { audiowide } from "@/styles/fonts";
import { ExperienceOrProject } from "@/types/types";

export default function ExperiencesPage() {
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
        <h1 className={`${audiowide.className} text-3xl font-bold sm:text-5xl`}>Experiences</h1>
        <div className="mb-0 mt-10 sm:mb-10 sm:mt-20">
          <SideBar page="Experiences" />
        </div>
      </div>

      {/* Experiences List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full space-y-6 overflow-y-auto rounded-lg px-0 sm:space-y-10 sm:px-4"
      >
        {Experiences.map((experience: ExperienceOrProject) => (
          <motion.div key={experience.id} variants={itemVariants}>
            <Card data={experience} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
