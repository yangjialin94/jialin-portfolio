"use client";

import {
  AcademicCapIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  HomeIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { FiLinkedin } from "react-icons/fi";

import { raleway600 } from "@/styles/fonts";

const TABS = [
  { text: "Home", href: "/", Icon: HomeIcon },
  {
    text: "Experience",
    href: "/experiences",
    Icon: AcademicCapIcon,
  },
  {
    text: "Projects",
    href: "/projects",
    Icon: CodeBracketIcon,
  },
  {
    text: "Education",
    href: "/education",
    Icon: BookOpenIcon,
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
  newPage?: boolean;
  children: React.ReactNode;
}

const SideBar = ({ page }: SideBarProps) => {
  return (
    <nav className="flex flex-col gap-2 border-t border-gray-200 pt-6 dark:border-gray-800">
      {TABS.filter((tab) => tab.text !== page).map(({ text, href, Icon }) => (
        <Tab key={text} href={href}>
          <Icon className="h-4 w-4" />
          <span>{text}</span>
        </Tab>
      ))}
      <Tab href="https://www.linkedin.com/in/jialin-yang-jy/" newPage={true}>
        <FiLinkedin className="h-4 w-4" />
        <span>LinkedIn</span>
      </Tab>
    </nav>
  );
};

const Tab = ({ href, newPage = false, children }: TabProps) => {
  const baseClassName = `${raleway600.className} flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100`;

  if (newPage) {
    return (
      <a className={baseClassName} target="_blank" rel="noopener noreferrer" href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={baseClassName} href={href}>
      {children}
    </Link>
  );
};

export default SideBar;
