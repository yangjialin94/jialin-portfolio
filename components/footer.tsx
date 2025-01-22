'use client';

import {
  AcademicCapIcon,
  CodeBracketIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'motion/react';
import React from 'react';

type IconType =
  | typeof AcademicCapIcon
  | typeof CodeBracketIcon
  | typeof EnvelopeIcon;

interface LinkItem {
  text: string;
  href: string;
  hoverColor: string;
  Icon: IconType;
}

const Tab = ({ text, href, hoverColor, Icon }: LinkItem) => {
  const hoverClass =
    hoverColor === 'blue'
      ? 'hover:text-blue-600 dark:hover:text-blue-300'
      : hoverColor === 'green'
        ? 'hover:text-green-600 dark:hover:text-green-300'
        : hoverColor === 'yellow'
          ? 'hover:text-yellow-600 dark:hover:text-yellow-300'
          : '';
  return (
    <motion.a
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      className={`flex items-center gap-3 px-3 py-2 text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100 transition-all rounded-lg ${hoverClass}`}
      href={href}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      {text}
    </motion.a>
  );
};

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-800">
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
    </footer>
  );
};

export default Footer;
