'use client';

import {
  ArrowDownTrayIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React from 'react';

import ThemeSwitcher from '@/components/theme-switcher';

const Hero = () => {
  return (
    <div className="space-y-4 text-left">
      <motion.div
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1, easing: 'ease-in-out' }}
      >
        <h1 className="text-3xl font-bold leading-tight tracking-wide sm:text-4xl md:text-5xl">
          Hi, I&apos;m Jialin Yang <br />
          Full-Stack Software Engineer & Curious Creator 🚀
        </h1>
      </motion.div>
      <motion.p
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1, delay: 0.5, easing: 'ease-in-out' }}
        className="mt-2 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl dark:text-gray-300"
      >
        Building impactful software solutions while exploring the deeper meaning
        behind every innovation.
      </motion.p>
    </div>
  );
};

const ListItem = ({ number, text, delay, borderColor }) => {
  return (
    <motion.div
      animate={{ opacity: [0, 1], x: [-20, 0] }}
      transition={{ duration: 0.5, delay, easing: 'ease-in-out' }}
      className="flex items-center gap-4"
    >
      <div
        className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 ${borderColor} text-sm sm:text-lg font-bold shadow-md`}
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
        borderColor="border-blue-500"
      />
      <ListItem
        number="6+"
        text="Years of Experience"
        delay={0.7}
        borderColor="border-green-500"
      />
    </div>
  );
};

const DownloadResume = () => {
  return (
    <motion.a
      animate={{ opacity: [0, 1], scale: [0.8, 1] }}
      transition={{ duration: 0.5, delay: 1 }}
      className="flex items-center justify-center h-10 gap-3 px-4 mt-8 text-sm font-medium text-white transition-all bg-blue-600 border border-transparent border-solid rounded-lg shadow-md dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400 sm:text-base sm:h-12 sm:px-6 hover:shadow-lg"
      href="/resume/1224.pdf"
      download="Jialin_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ArrowDownTrayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      Download Resume
    </motion.a>
  );
};

const Tab = ({ text, href, hoverColor, Icon }) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      className={`flex items-center gap-3 px-3 py-2 text-sm sm:text-base font-medium text-gray-100 transition-all rounded-lg ${
        hoverColor === 'blue'
          ? 'hover:text-blue-400'
          : hoverColor === 'green'
            ? 'hover:text-green-400'
            : hoverColor === 'yellow'
              ? 'hover:text-yellow-400'
              : ''
      }`}
      href={href}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      {text}
    </motion.a>
  );
};

const Tabs = () => {
  return (
    <div className="flex items-center justify-center gap-4 mx-auto sm:gap-6">
      <Tab
        text="Skills"
        href="/skills"
        hoverColor="blue"
        Icon={AcademicCapIcon}
      />
      <Tab
        text="Projects"
        href="/projects"
        hoverColor="green"
        Icon={CodeBracketIcon}
      />
      <Tab
        text="Contact"
        href="/contact"
        hoverColor="yellow"
        Icon={EnvelopeIcon}
      />
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-start justify-center gap-10 px-4 pb-16 sm:px-8 sm:pb-20 md:px-16 lg:px-20 font-[family-name:var(--font-geist-sans)]">
        <Hero />
        <Stats />
        <DownloadResume />
      </main>
      <footer className="py-6 bg-gray-900">
        <Tabs />
      </footer>
      <ThemeSwitcher />
    </div>
  );
}
