"use client";

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!mounted) {
    return <div className="w-6 h-6" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Alternar tema oscuro"
      className="bg-transparent border-none cursor-pointer text-text-dark flex items-center justify-center p-2 rounded-full transition-colors duration-300 hover:bg-bg-light"
    >
      {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
