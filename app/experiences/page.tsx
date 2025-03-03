"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Bullet from "@/components/Bullet";
import SideBar from "@/components/SideBar";
import experiences from "@/data/experiences.json";
import { hennyPenny, raleway600, raleway800 } from "@/styles/fonts";

interface Task {
  id: number;
  description: string;
  skills: string[];
}

interface Experience {
  id: number;
  title: string;
  company: string;
  dates: string;
  website?: string;
  mainTasks: Task[];
  minorTasks?: Task[];
}

interface CardProps {
  experience: Experience;
}

interface TaskProps {
  task: Task;
  bulletColor: "red" | "blue" | "green" | "yellow";
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
    // TODO: Try this later
    // <div className="h-full flex flex-col lg:flex-row gap-12">
    <div className="flex max-h-[calc(100vh-120px)] flex-col gap-12 sm:max-h-[calc(100vh-200px)] lg:flex-row lg:justify-between">
      {/* Navigation */}
      <div className="flex w-full flex-col items-center lg:items-start">
        <h1 className={`${hennyPenny.className} text-3xl font-bold sm:text-5xl`}>Experiences</h1>

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
        {experiences.map((experience: Experience) => (
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
        <h2 className={`${raleway800.className} text-xl font-semibold sm:text-2xl`}>
          {experience.title}
        </h2>
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

      {/* Main Tasks */}
      <ul className="mt-4 space-y-4">
        {experience.mainTasks.map((task) => (
          <Task key={task.id} task={task} bulletColor="blue" />
        ))}
      </ul>

      {/* Minor Tasks */}
      {experience.minorTasks && (
        <details className="mt-8">
          <summary className={`${raleway800.className} cursor-pointer hover:text-green-500`}>
            Show More
          </summary>
          <ul className="mt-8 space-y-3">
            {experience.minorTasks.map((task) => (
              <Task key={task.id} task={task} bulletColor="green" />
            ))}
          </ul>
        </details>
      )}
    </div>
  );
};

const Task = ({ task, bulletColor }: TaskProps) => {
  const borderColorClassName = {
    red: "border-red-500",
    blue: "border-blue-500",
    green: "border-green-500",
    yellow: "border-yellow-500",
  }[bulletColor];

  return (
    <li key={task.id}>
      <Bullet color={bulletColor} description={task.description} />
      <div className="mt-3 flex flex-wrap">
        {task.skills.map((skill, index) => (
          <span
            key={index}
            className={`mb-2 mr-2 rounded-full border-2 ${borderColorClassName} px-3 py-1 text-sm`}
          >
            {skill}
          </span>
        ))}
      </div>
    </li>
  );
};
