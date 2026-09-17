"use client";

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const toggleVisibility = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setIsVisible(window.scrollY > 300));
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className="fixed bottom-24 right-7 z-[49] bg-accent-blue text-white w-11 h-11 rounded-full flex items-center justify-center border-none cursor-pointer shadow-[0_4px_12px_rgba(14,165,233,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-accent-hover md:bottom-28 md:right-10"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
}
