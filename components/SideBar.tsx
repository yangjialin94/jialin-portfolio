"use client";

import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { motion } from "motion/react";
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

const SideBar = ({ page }: SideBarProps) => {
  const tabClassName = `${raleway800.className} text-md flex items-center gap-4 hover:text-blue-500`;

  return (
    <div className="flex w-fit flex-col gap-4">
      {TABS.filter((tab) => tab.text !== page).map(({ text, href, Icon }) => (
        <motion.a
          key={text}
          whileHover={{
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          className={tabClassName}
          href={href}
        >
          <Icon className="h-5 w-5" />
          {text}
        </motion.a>
      ))}
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

export default SideBar;
