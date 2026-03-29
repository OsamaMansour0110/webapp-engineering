"use client";

import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dynamicWords = ["Constructing", "Building", "Shaping", "Engineering"];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  // Handle Theme Toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle Word Cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--foreground)]/5 px-4 md:px-10 h-[75px] flex items-center justify-between transition-all duration-500">

      {/* 1. Left: Brand */}
      <Link href="/" className="flex items-center gap-2 group z-10">
        <Image
          src="/logo.png"
          alt="01 Electronics"
          width={42}
          height={42}
          className="dark:invert group-hover:rotate-12 transition-transform duration-300"
        />
        <span className="text-primary font-bold text-xl tracking-tight">01 Electronics</span>
      </Link>

      {/* 2. Center: Truly Centered Dynamic Title */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:block w-fit">
        <h2 className="text-2xl lg:text-3xl font-serif flex items-center gap-2 whitespace-nowrap">
          <div className="relative h-[1.2em] w-[6.5em] lg:w-[7.5em] overflow-hidden text-primary italic font-bold px-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={dynamicWords[wordIndex]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0 flex items-center justify-end pr-2"
              >
                {dynamicWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="text-[var(--foreground)] font-bold">The Future!</span>
        </h2>
      </div>

      {/* 3. Right: Controls */}
      <div className="flex items-center gap-4 z-10">
        <div 
          onClick={() => setDarkMode(!darkMode)}
          className={`relative w-[90px] h-[44px] rounded-full border-2 p-1 cursor-pointer transition-all duration-500 overflow-hidden shadow-sm ${
            darkMode ? 'bg-zinc-900 border-white/10' : 'bg-white border-[#e8e4d9]'
          }`}
        >
          {/* Mathematical Sliding Handle (Exactly half width minus padding) */}
          <motion.div
            animate={{ x: darkMode ? 41 : 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="absolute top-1 left-1 bottom-1 w-[41px] bg-primary rounded-full shadow-md z-0"
          />

          {/* Icons Layer with Perfect Flex Centering */}
          <div className="relative z-10 h-full flex pointer-events-none">
            <div className="flex-1 flex items-center justify-center">
              <Sun 
                size={18} 
                className={`transition-colors duration-300 ${!darkMode ? 'text-white' : 'text-slate-400'}`} 
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Moon 
                size={18} 
                className={`transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black font-bold'}`} 
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
