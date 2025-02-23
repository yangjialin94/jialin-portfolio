'use client';

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { motion } from 'motion/react';
import React from 'react';

import Footer from '@/components/footer';

const Hero = () => {
  return (
    <div className="space-y-4 text-left">
      <motion.div
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1, easing: 'ease-in-out' }}
      >
        <h1 className="text-3xl font-bold leading-tight tracking-wide text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
          Hi, I&apos;m Jialin Yang <br />
          Software Engineer & Curious Creator 🚀
        </h1>
      </motion.div>
      <motion.p
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1, delay: 0.5, easing: 'ease-in-out' }}
        className="mt-2 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl"
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
        className={`flex h-14 w-14 items-center justify-center rounded-full border-4 sm:h-16 sm:w-16 ${borderColor} bg-gray-100 text-sm font-bold shadow-md dark:bg-gray-800 sm:text-lg`}
      >
        {number}
      </div>
      <span className="text-sm font-medium text-gray-800 dark:text-gray-100 sm:text-base md:text-lg">
        {text}
      </span>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <div className="mt-8 flex flex-col gap-6 sm:mt-12 sm:gap-8">
      <ListItem
        number="10+"
        text="Professional Applications Delivered"
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
      className="mt-8 flex h-10 items-center justify-center gap-3 rounded-lg bg-blue-500 px-4 text-sm font-medium text-white shadow-md transition-all hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 sm:h-12 sm:px-6 sm:text-base"
      href="/files/resume_021925.pdf"
      download="Jialin_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Jialin's Resume as a PDF"
    >
      <ArrowDownTrayIcon className="h-5 w-5 animate-bounce sm:h-6 sm:w-6" />
      Download Resume
    </motion.a>
  );
};

export default function Home() {
  return (
    <>
      {/* Main */}
      <main className="flex flex-1 flex-col items-start justify-center gap-10 px-8 py-10 sm:px-8 sm:pb-20 md:px-16 lg:px-20">
        <Hero />
        <Stats />
        <DownloadResume />
      </main>

      {/* Footer */}
      <Footer page="Home" />
    </>
  );
}
