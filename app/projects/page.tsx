"use client";

import { motion } from "framer-motion";
import React from "react";

import SideBar from "@/components/SideBar";
import { hennyPenny, raleway800 } from "@/styles/fonts";

export default function ProjectsPage() {
  return (
    <>
      {/* Navigation */}
      <div className="flex w-full flex-col items-center lg:items-start">
        <h1 className={`${hennyPenny.className} text-3xl font-bold sm:text-5xl`}>Projects</h1>

        {/* Navigation */}
        <div className="mb-0 mt-10 sm:mb-10 sm:mt-20">
          <SideBar page="Projects" />
        </div>
      </div>

      {/* Projects List */}
      <ComingSoon />
    </>
  );
}

const ComingSoon = () => {
  return (
    <div className="mt-40 w-full overflow-hidden">
      <motion.p
        className={`${raleway800.className} whitespace-nowrap text-2xl font-bold`}
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        Coming Soon...
      </motion.p>
    </div>
  );
};
