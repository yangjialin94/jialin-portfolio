'use client';

import {
  AcademicCapIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'motion/react';
import React from 'react';

type IconType =
  | typeof AcademicCapIcon
  | typeof CodeBracketIcon
  | typeof EnvelopeIcon
  | typeof HomeIcon;

interface LinkItem {
  text: string;
  href: string;
  hoverColor: string;
  Icon: IconType;
}

const Tab = ({ text, href, hoverColor, Icon }: LinkItem) => {
  const hoverClass =
    hoverColor === 'red'
      ? 'hover:text-red-600 dark:hover:text-red-300'
      : hoverColor === 'blue'
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
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition-all dark:text-gray-100 sm:text-base ${hoverClass}`}
      href={href}
    >
      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      {text}
    </motion.a>
  );
};

interface FooterProps {
  page: string;
}

const Footer = ({ page }: FooterProps) => {
  const tabs = [
    { text: 'Home', href: '/', hoverColor: 'red', Icon: HomeIcon },
    {
      text: 'Experiences',
      href: '/experiences',
      hoverColor: 'blue',
      Icon: AcademicCapIcon,
    },
    {
      text: 'Projects',
      href: '/projects',
      hoverColor: 'green',
      Icon: CodeBracketIcon,
    },
    {
      text: 'Contact',
      href: '/contact',
      hoverColor: 'yellow',
      Icon: EnvelopeIcon,
    },
  ];

  return (
    <footer className="bg-gray-100 py-6 dark:bg-gray-800">
      <div className="mx-auto flex items-center justify-center gap-4 sm:gap-6">
        {page === '404' ? (
          <Tab
            key="Home"
            text="Home"
            href="/"
            hoverColor="red"
            Icon={HomeIcon}
          />
        ) : (
          tabs
            .filter((tab) => tab.text !== page)
            .map(({ text, href, hoverColor, Icon }) => (
              <Tab
                key={text}
                text={text}
                href={href}
                hoverColor={hoverColor}
                Icon={Icon}
              />
            ))
        )}
      </div>
    </footer>
  );
};

export default Footer;
