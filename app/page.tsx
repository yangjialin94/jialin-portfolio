'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownTrayIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <div className="space-y-4 text-left">
      <motion.div
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1, easing: 'ease-in-out' }}
      >
        <h1 className="text-4xl font-bold leading-tight tracking-wide sm:text-5xl md:text-6xl">
          Hi, I&apos;m Jialin Yang <br />
          Full-Stack Software Engineer & Curious Creator 🚀
        </h1>
      </motion.div>
      <motion.p
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1, delay: 0.5, easing: 'ease-in-out' }}
        className="mt-2 text-lg leading-relaxed text-gray-700 sm:text-xl dark:text-gray-300"
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
  delay?: number;
  borderColor: string;
}

const ListItem = ({ number, text, delay, borderColor }: ListItemProps) => {
  return (
    <motion.div
      animate={{ opacity: [0, 1], x: [-20, 0] }}
      transition={{ duration: 0.5, delay, easing: 'ease-in-out' }}
      className="flex items-center gap-6"
    >
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-full border-4 ${borderColor} text-lg font-bold shadow-md`}
      >
        {number}
      </div>
      <span className="text-lg font-medium text-gray-800 dark:text-gray-100">
        {text}
      </span>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <div className="flex flex-col gap-8 mt-12">
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
      className="flex items-center justify-center h-12 gap-3 px-6 mt-12 text-base font-medium text-white transition-all bg-blue-600 border border-transparent border-solid rounded-lg shadow-md hover:shadow-lg dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400 sm:text-lg sm:h-14 sm:px-8 hover:text-xl hover:font-semibold"
      href="/resume/1224.pdf"
      download="Jialin_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ArrowDownTrayIcon className="w-6 h-6" />
      Download Resume
    </motion.a>
  );
};

interface TabProps {
  text: string;
  href: string;
  hoverColor: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Tab = ({ text, href, hoverColor, Icon }: TabProps) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      className={`flex items-center gap-3 px-4 py-2 text-lg font-medium text-gray-100 transition-all rounded-lg hover:text-${hoverColor}-400`}
      href={href}
    >
      <Icon className="w-6 h-6" />
      {text}
    </motion.a>
  );
};

const Tabs = () => {
  return (
    <div className="flex items-center justify-center gap-6 mx-auto">
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
      <main className="flex-1 flex flex-col items-start justify-center gap-10 px-8 pb-20 sm:px-20 font-[family-name:var(--font-geist-sans)]">
        <Hero />
        <Stats />
        <DownloadResume />
      </main>
      <footer className="py-6 bg-gray-900">
        <Tabs />
      </footer>
    </div>
  );
}
