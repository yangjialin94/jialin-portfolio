'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import Footer from '@/components/footer';

export default function NotFound() {
  return (
    <>
      {/* Main */}
      <main className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-10 sm:px-8 sm:pb-20 md:px-16 lg:px-20">
        <motion.div
          className="relative h-48 w-48 overflow-hidden rounded-full"
          animate={{
            scale: [1, 1.6, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="/images/jialin-122324.jpg"
            alt="Not Found Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </motion.div>

        <motion.h1
          className="my-4 text-center text-4xl font-bold text-gray-900 hover:text-red-500 dark:text-gray-100 dark:hover:text-red-500 md:my-12"
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{
            scale: 1.5,
            rotate: 15,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        >
          Nothing to see here 🙄
        </motion.h1>
      </main>

      {/* Footer */}
      <Footer page="Experiences" />
    </>
  );
}
