'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from './icons';

export const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const changeDeviceDarkMode = (event: MediaQueryListEvent) => setIsDarkMode(event.matches);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (isDarkMode) {
      htmlElement?.classList.add('dark');
    } else {
      htmlElement?.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(prefersDarkMode.matches);
    prefersDarkMode.addEventListener('change', changeDeviceDarkMode);

    return () => {
      prefersDarkMode.removeEventListener('change', changeDeviceDarkMode);
    };
  }, []);

  return (
    <button
      className="bg-transparent text-black dark:text-slate-400 rounded-full flex justify-center items-center p-1"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <Moon /> : <Sun />}
    </button>
  );
};
