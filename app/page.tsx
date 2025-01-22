'use client';

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { motion } from 'motion/react';
import React from 'react';

const Hero = () => {
  return (
    <div className="space-y-4 text-left">
      <motion.div
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1, easing: 'ease-in-out' }}
      >
        <h1 className="text-3xl font-bold leading-tight tracking-wide text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
          Hi, I&apos;m Jialin Yang <br />
          Full-Stack Software Engineer & Curious Creator 🚀
        </h1>
      </motion.div>
      <motion.p
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1, delay: 0.5, easing: 'ease-in-out' }}
        className="mt-2 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl dark:text-gray-400"
      >
        Building impactful software solutions while exploring the deeper meaning
        behind every innovation.
      </motion.p>
    </div>
  );
};

interface ListItemProps {
  number: string;
  text: string;
  delay: number;
  borderColor: string;
}

const ListItem = ({ number, text, delay, borderColor }: ListItemProps) => {
  return (
    <motion.div
      animate={{ opacity: [0, 1], x: [-20, 0] }}
      transition={{ duration: 0.5, delay, easing: 'ease-in-out' }}
      className="flex items-center gap-4"
    >
      <div
        className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 ${borderColor} text-sm sm:text-lg font-bold shadow-md bg-gray-100 dark:bg-gray-800`}
      >
        {number}
      </div>
      <span className="text-sm font-medium text-gray-800 sm:text-base md:text-lg dark:text-gray-100">
        {text}
      </span>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <div className="flex flex-col gap-6 mt-8 sm:gap-8 sm:mt-12">
      <ListItem
        number="10+"
        text="Professional Projects Delivered"
        delay={0.5}
        borderColor="border-blue-400"
      />
      <ListItem
        number="6+"
        text="Years of Experience"
        delay={0.7}
        borderColor="border-green-400"
      />
    </div>
  );
};

const DownloadResume = () => {
  return (
    <motion.a
      animate={{ opacity: [0, 1], scale: [0.8, 1] }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: 'linear',
      }}
      className="flex items-center justify-center h-10 gap-3 px-4 mt-8 text-sm font-medium text-white transition-all bg-blue-500 rounded-lg shadow-md sm:text-base sm:h-12 sm:px-6 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
      href="/files/jialin_resume_0125.pdf"
      download="Jialin_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Jialin's Resume as a PDF"
    >
      <ArrowDownTrayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      Download Resume
    </motion.a>
  );
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-start justify-center flex-1 gap-10 px-8 py-10 sm:px-8 sm:pb-20 md:px-16 lg:px-20">
        <Hero />
        <Stats />
        <DownloadResume />
      </main>
    </>
  );
}
