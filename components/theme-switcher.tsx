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
      className="fixed flex items-center justify-center w-10 h-10 text-white transition-transform bg-blue-600 rounded-full shadow-md top-4 right-4 hover:scale-110 dark:bg-gray-800 dark:text-gray-200"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
