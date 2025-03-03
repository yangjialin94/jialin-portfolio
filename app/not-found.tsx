"use client";

import { motion } from "framer-motion";
import React from "react";

import SideBar from "@/components/SideBar";
import { hennyPenny, raleway600 } from "@/styles/fonts";

export default function NotFound() {
  return (
    <>
      {/* Top Left Corner */}
      <motion.div
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1, easing: "ease-in-out" }}
        className="text-left"
      >
        <h1 className={`${hennyPenny.className} text-5xl`}>
          Jialin Yang <br />
        </h1>
        <p className={`${raleway600.className} text-md mt-4`}>Software Engineer</p>
      </motion.div>

      {/* Navigation */}
      <div className="mt-20">
        <SideBar page="404" />
      </div>

      {/* 404 */}
      <motion.h1
        className={`${raleway600.className} mt-20 hidden w-full justify-center text-4xl font-semibold sm:flex`}
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{
          scale: 1.5,
          rotate: 15,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        404
      </motion.h1>

      {/* Bottom Right Corner */}
      <motion.div
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1, delay: 0.5, easing: "ease-in-out" }}
        className="absolute bottom-0 right-0 text-left sm:text-right"
      >
        <p className={`${raleway600.className} text-md p-12`}>
          I can build full-stack web applications using Next.js and FastAPI, integrating databases,
          state management, authentication, and seamless API communication.
        </p>
      </motion.div>
    </>
  );
}
