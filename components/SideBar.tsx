"use client";

import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

import { raleway800 } from "@/styles/fonts";

const TABS = [
  { text: "Home", href: "/", Icon: HomeIcon },
  {
    text: "Experiences",
    href: "/experiences",
    Icon: AcademicCapIcon,
  },
  {
    text: "Projects",
    href: "/projects",
    Icon: CodeBracketIcon,
  },
  {
    text: "Contact",
    href: "/contact",
    Icon: EnvelopeIcon,
  },
];

interface SideBarProps {
  page: string;
}

interface TabProps {
  href: string;
  children: React.ReactNode;
}

const SideBar = ({ page }: SideBarProps) => {
  const tabClassName = `${raleway800.className} text-md flex items-center gap-4 hover:text-blue-500`;

  return (
    <div className="flex w-fit flex-col gap-4">
      {/* Regular Tabs */}
      {TABS.filter((tab) => tab.text !== page).map(({ text, href, Icon }) => (
        <Tab key={text} href={href}>
          <Icon className="h-5 w-5" />
          {text}
        </Tab>
      ))}

      {/* LinkedIn Tab */}
      <Tab href="https://www.linkedin.com/in/jialin-yang-jy/">
        <Image src="/images/linkedin-logo.svg" alt="LinkedIn Logo" width={20} height={20} />
        LinkedIn
      </Tab>

      {/* Resume Tab */}
      <motion.a
        whileHover={{
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        className={tabClassName}
        href="/files/Resume_022525.pdf"
        download="Jialin_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Jialin's Resume as a PDF"
      >
        <ArrowDownTrayIcon className="h-5 w-5 animate-bounce" />
        Download Resume
      </motion.a>
    </div>
  );
};

const Tab = ({ href, children }: TabProps) => {
  const tabClassName = `${raleway800.className} text-md flex items-center gap-4 hover:text-blue-500`;

  return (
    <motion.a
      whileHover={{
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className={tabClassName}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </motion.a>
  );
};

export default SideBar;
