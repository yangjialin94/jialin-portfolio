'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white transition-transform hover:scale-110 hover:bg-blue-500 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-blue-500"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
