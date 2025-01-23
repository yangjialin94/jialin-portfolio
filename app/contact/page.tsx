'use client';

import React from 'react';

import Footer from '@/components/footer';

export default function Contact() {
  return (
    <>
      {/* Main */}
      <main className="flex flex-1 flex-col items-start justify-center gap-10 px-8 py-10 sm:px-8 sm:pb-20 md:px-16 lg:px-20">
        <h1>Contact</h1>
      </main>

      {/* Footer */}
      <Footer page="Contact" />
    </>
  );
}
