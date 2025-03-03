"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import SideBar from "@/components/SideBar";
import Experiences from "@/data/experiences.json";
import { audiowide, raleway600, raleway800 } from "@/styles/fonts";

interface Task {
  id: number;
  description: string;
}

interface Skill {
  Languages?: string[];
  Frontend?: string[];
  Backend?: string[];
  DevOps?: string[];
}

interface Experience {
  id: number;
  title: string;
  company: string;
  dates: string;
  website?: string;
  tasks: Task[];
  skills: Skill;
}

interface CardProps {
  experience: Experience;
}

interface SkillsProp {
  skills: string[];
}

interface BulletProps {
  description: string;
}

export default function ExperiencesPage() {
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
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

        {/* Navigation */}
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
        {Experiences.map((experience: Experience) => (
          <motion.div key={experience.id} variants={itemVariants}>
            <Card experience={experience} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const Card = ({ experience }: CardProps) => {
  return (
    <div
      className={`${raleway600.className} max-w-4xl rounded-lg border-2 border-gray-500 p-6 hover:shadow-xl dark:hover:shadow-white sm:p-8`}
    >
      {/* Title */}
      <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className={`${raleway800.className} text-xl sm:text-2xl`}>{experience.title}</h2>
        {experience.website ? (
          <Link
            href={experience.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: [0, 5, -5, 5, 0],
                transition: { duration: 0.4 },
              }}
              className="inline-block"
            >
              <Image
                src={`/images/${experience.company.toLowerCase()}-logo.svg`}
                alt={`${experience.company} logo`}
                width={100}
                height={40}
                className="h-8 w-auto"
              />
            </motion.div>
          </Link>
        ) : (
          <span className="text-xl font-bold text-red-600">{experience.company}</span>
        )}
      </div>

      {/* Dates */}
      <p>{experience.dates}</p>

      {/* Tasks */}
      <ul className="mt-4 space-y-4">
        {experience.tasks.map((task) => (
          <li key={task.id}>
            <Bullet description={task.description} />
          </li>
        ))}
      </ul>

      {/* Skills */}
      <details className="mt-8">
        <summary className={`${raleway800.className} cursor-pointer hover:text-blue-500`}>
          Tech Stack
        </summary>
        <ul className="mt-8 space-y-3">
          {Object.entries(experience.skills).map(([type, skills]) => (
            <div key={type} className="flex flex-col gap-1">
              <p className={`${raleway800.className}`}>{type}</p>
              <Skills skills={skills} />
            </div>
          ))}
        </ul>
      </details>
    </div>
  );
};

const Skills = ({ skills }: SkillsProp) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border-2 border-gray-800 px-2 py-1 text-sm hover:border-blue-500 hover:text-blue-500 dark:border-gray-200 dark:hover:border-blue-500 dark:hover:text-blue-500"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

const Bullet = ({ description }: BulletProps) => {
  return (
    <div className="flex w-full items-center gap-2">
      <div className={`min-h-2 min-w-2 rounded-full bg-gray-800 dark:bg-gray-200`} />
      <div className="rounded-lg pl-2 leading-normal text-gray-800 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800">
        {description}
      </div>
    </div>
  );
};
