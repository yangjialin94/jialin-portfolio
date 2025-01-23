'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Bullet from '@/components/bullet';
import Footer from '@/components/footer';
import experiences from '@/data/experiences';

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

interface TaskProps {
  task: Task;
  bulletColor: 'red' | 'blue' | 'green' | 'yellow';
}

const Task = ({ task, bulletColor }: TaskProps) => {
  const colorClass = {
    red: 'bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100',
    blue: 'bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100',
    green: 'bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100',
    yellow:
      'bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100',
  }[bulletColor];

  return (
    <li key={task.id} className="text-gray-800 dark:text-gray-300">
      <Bullet color={bulletColor}>{task.description}</Bullet>
      <div className="mt-3 flex flex-wrap">
        {task.skills.map((skill, index) => (
          <span
            key={index}
            className={`mb-2 mr-2 rounded-full bg-blue-100 px-3 py-1 text-sm ${colorClass}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </li>
  );
};

interface CardProps {
  experience: Experience;
}

const Card = ({ experience }: CardProps) => {
  return (
    <motion.div
      key={experience.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="transform rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-md dark:hover:shadow-white"
    >
      <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-semibold text-black dark:text-white">
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
                scale: 1.1, // Increases size
                rotate: [0, 5, -5, 5, 0], // Shake animation
                transition: { duration: 0.4 }, // Smooth animation
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
          <span className="text-xl font-bold text-black dark:text-white">
            {experience.company}
          </span>
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-400">{experience.dates}</p>
      <ul className="mt-4 space-y-4">
        {experience.mainTasks.map((task) => (
          <Task key={task.id} task={task} bulletColor="blue" />
        ))}
      </ul>
      {experience.minorTasks && (
        <details className="mt-4">
          <summary className="cursor-pointer font-semibold text-yellow-500 hover:text-yellow-600">
            Show More
          </summary>
          <ul className="mt-4 space-y-3">
            {experience.minorTasks.map((task) => (
              <Task key={task.id} task={task} bulletColor="green" />
            ))}
          </ul>
        </details>
      )}
    </motion.div>
  );
};

export default function Experiences() {
  return (
    <>
      {/* Main */}
      <main className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-10 sm:px-8 sm:pb-20 md:px-16 lg:px-20">
        <h1 className="my-4 text-center text-4xl font-bold text-gray-900 dark:text-gray-100 md:my-12">
          Professional Experiences
        </h1>
        <div className="w-full max-w-4xl space-y-10">
          {experiences.map((experience: Experience) => (
            <Card key={experience.id} experience={experience} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer page="Experiences" />
    </>
  );
}
