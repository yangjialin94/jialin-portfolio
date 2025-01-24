'use client';

import { motion } from 'framer-motion';
import React from 'react';

import Footer from '@/components/footer';
// import projects from '@/data/projects.json';

const ComingSoon = () => {
  return (
    <div className="relative h-16 w-full max-w-4xl overflow-hidden">
      <motion.div
        className="whitespace-nowrap text-2xl font-bold"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'linear',
        }}
      >
        🚀 Coming Soon
      </motion.div>
    </div>
  );
};

export default function Projects() {
  return (
    <>
      {/* Main */}
      <main className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-10 sm:px-8 sm:pb-20 md:px-16 lg:px-20">
        <h1 className="my-4 text-center text-4xl font-bold text-gray-900 dark:text-gray-100 md:my-12">
          My Projects
        </h1>

        <ComingSoon />
        <ComingSoon />
        <ComingSoon />
        <ComingSoon />
      </main>

      {/* Footer */}
      <Footer page="Experiences" />
    </>
  );
}
