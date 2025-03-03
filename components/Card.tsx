"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Bullet from "@/components/Bullet";
import Skills from "@/components/Skills";
import { raleway600, raleway800 } from "@/styles/fonts";
import { ExperienceOrProject } from "@/types/types";

interface CardProps {
  data: ExperienceOrProject;
}

const Card = ({ data }: CardProps) => {
  return (
    <div
      className={`${raleway600.className} max-w-4xl rounded-lg border-2 border-gray-500 p-6 hover:shadow-xl dark:hover:shadow-white sm:p-8`}
    >
      {/* Title */}
      <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {data.website && !data.company ? (
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: [0, 5, -5, 5, 0],
              transition: { duration: 0.4 },
            }}
          >
            <Link href={data.website} target="_blank" rel="noopener noreferrer">
              <h2
                className={`${raleway800.className} text-xl hover:text-blue-500 dark:hover:text-blue-500 sm:text-2xl`}
              >
                {data.title}
              </h2>
            </Link>
          </motion.div>
        ) : (
          <h2 className={`${raleway800.className} text-xl sm:text-2xl`}>{data.title}</h2>
        )}

        {/* Company */}
        {data.company &&
          (data.website ? (
            <Link href={data.website} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 5, 0], transition: { duration: 0.4 } }}
              >
                <Image
                  src={`/images/${data.company.toLowerCase()}-logo.svg`}
                  alt={`${data.company} logo`}
                  width={100}
                  height={40}
                  className="h-8 w-auto"
                />
              </motion.div>
            </Link>
          ) : (
            <span className="text-2xl font-bold text-red-600">{data.company}</span>
          ))}
      </div>

      {/* Dates */}
      <p>{data.dates}</p>

      {/* Tasks */}
      <ul className="mt-4 space-y-4">
        {data.tasks.map((task) => (
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
          {Object.entries(data.skills).map(([type, skills]) => (
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

export default Card;
