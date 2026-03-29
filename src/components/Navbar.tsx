"use client";

import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center h-[70px]">
      <div className="flex items-center gap-2">
        <Image 
          src="/logo.png" 
          alt="01 Electronics" 
          width={40} 
          height={40} 
          className="invert" // The logo had a white background, so I'll invert it if it's on dark background
        />
        <span className="text-primary font-bold text-xl hidden sm:block">01 Electronics</span>
      </div>

      <div className="flex items-center gap-8">
        <h2 className="text-primary italic hidden lg:block select-none text-[1.4rem]">Constructing <span className="text-white">The Future!</span></h2>
        
        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10">
          <button 
            className={`p-1.5 rounded-full transition-all ${!darkMode ? 'bg-primary text-white' : 'text-white/40 hover:text-white'}`}
            onClick={() => setDarkMode(false)}
          >
            <Sun size={18} />
          </button>
          <button 
            className={`p-1.5 rounded-full transition-all ${darkMode ? 'bg-primary text-white' : 'text-white/40 hover:text-white'}`}
            onClick={() => setDarkMode(true)}
          >
            <Moon size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}
