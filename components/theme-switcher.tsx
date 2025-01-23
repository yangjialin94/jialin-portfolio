'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      console.log(document.documentElement.classList);
    } else {
      document.documentElement.classList.remove('dark');
      console.log(document.documentElement.classList);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition-transform hover:scale-110 dark:bg-gray-800 dark:text-gray-200"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
