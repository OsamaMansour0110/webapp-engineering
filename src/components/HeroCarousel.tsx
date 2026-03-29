"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Who We Are",
    content: "As an industrial and commercial power products supplier, general and industrial contractor and construction services integrator, 01 Electronics supports industries, local governments and public sector organizations through every step of their industrial development.",
    content2: "We, 01 Electronics, serving all over Egypt since 2006, and in UAE as of 2022, are Borri commercial and industrial UPS sole agents in Egypt, Elcos sole agents in Egypt for diesel gensets (generator sets), and panel builders and UPS distributor of Legrand.",
    image: "/construction.png",
  },
  {
    title: "Our Vision",
    content: "To be the leading innovator in power and construction across the region, delivering sustainable, high-tech solutions that power tomorrow's growth.",
    content2: "Focused on quality, reliability, and technical excellence, we drive progress through innovation and engineering precision since 2006.",
    image: "/power.png",
  },
  {
    title: "Technological Excellence",
    content: "Our software and electronics integration services provide cutting-edge solutions for modern industrial challenges, Bridging the gap between hardware and intelligence.",
    content2: "Dedicated to the future of digitalization and smart infrastructure in Egypt and the Middle East.",
    image: "/software.png",
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full max-w-[1700px] mx-auto px-2 md:px-10 mt-[80px] md:mt-[100px] mb-10 md:mb-20">
      <div className="flex items-center justify-between gap-2 md:gap-12">
        
        {/* Left Arrow - Hidden on mobile */}
        <button 
          onClick={prevSlide}
          className="hidden lg:flex cursor-pointer transition-all hover:scale-110 active:scale-95 bg-white dark:bg-slate-800 border border-black/5 dark:border-white/10 p-4 md:p-5 rounded-full shadow-lg group shrink-0"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-black dark:text-white group-hover:text-primary transition-colors" />
        </button>

        {/* Framing Container */}
        <div className="relative flex-1 h-[500px] md:h-[680px] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-xl md:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[current].image}
                alt="Hero Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-white/5 dark:bg-black/30 md:bg-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Responsive Content Box */}
          <div className="relative h-full flex items-center px-4 md:px-20">
            <motion.div 
              key={`content-${current}`}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-light dark:glass p-6 md:p-16 rounded-[1.5rem] md:rounded-[2.5rem] max-w-2xl w-full"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3 md:mb-4 text-primary leading-tight">
                {slides[current].title}
              </h2>
              
              <div className="w-20 md:w-32 h-[2px] bg-primary/40 mb-4 md:mb-8" />
              
              <div className="space-y-4 md:space-y-6 text-slate-800 dark:text-white/90 leading-relaxed text-base md:text-xl">
                <p className="font-semibold">{slides[current].content}</p>
                <p className="text-xs md:text-base opacity-70 italic font-sans">
                  {slides[current].content2}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Arrow - Hidden on mobile */}
        <button 
          onClick={nextSlide}
          className="hidden lg:flex cursor-pointer transition-all hover:scale-110 active:scale-95 bg-white dark:bg-slate-800 border border-black/5 dark:border-white/10 p-4 md:p-5 rounded-full shadow-lg group shrink-0"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-black dark:text-white group-hover:text-primary transition-colors" />
        </button>
      </div>

      {/* Mobile Arrows Placeholder (If needed) */}
      <div className="flex lg:hidden justify-center gap-6 mt-6">
        <button onClick={prevSlide} className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md border border-black/5">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md border border-black/5">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
