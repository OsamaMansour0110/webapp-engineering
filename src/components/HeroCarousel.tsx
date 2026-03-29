"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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

  // Auto-play every 20 seconds
  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, 20000);
    return () => clearInterval(autoPlayInterval);
  }, []);

  return (
    <div className="w-full max-w-[1780px] mx-auto px-4 md:px-10 mt-[80px] md:mt-[100px] mb-10 md:mb-20">
      <div className="flex items-center justify-between gap-4 md:gap-10">
        
        {/* Left Arrow - External Position */}
        <button 
          onClick={prevSlide}
          className="hidden lg:flex cursor-pointer transition-all hover:scale-110 active:scale-95 bg-slate-900 border border-white/10 p-5 rounded-full shadow-2xl group shrink-0"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
        </button>

        {/* Framing Container */}
        <div className="relative flex-1 h-[500px] md:h-[680px] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border-4 border-white/10 group">
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
              {/* Subtle Dark Overlay for Light Mode Depth */}
              <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
            </motion.div>
          </AnimatePresence>

          {/* Premium Dark Content Box (Consistent in both modes) */}
          <div className="relative h-full flex items-center px-10 md:px-24">
            <motion.div 
              key={`content-${current}`}
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-black/60 backdrop-blur-xl p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] max-w-2xl w-full border border-white/10 shadow-2xl"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-3 md:mb-4 text-primary leading-tight">
                {slides[current].title}
              </h2>
              
              <div className="w-20 md:w-32 h-[2px] bg-primary/60 mb-6 md:mb-10" />
              
              <div className="space-y-4 md:space-y-6 text-white leading-relaxed text-base md:text-xl">
                <p className="font-semibold text-white/95">{slides[current].content}</p>
                <p className="text-sm md:text-base text-white/70 italic font-sans italic">
                  {slides[current].content2}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Arrow - External Position */}
        <button 
          onClick={nextSlide}
          className="hidden lg:flex cursor-pointer transition-all hover:scale-110 active:scale-95 bg-slate-900 border border-white/10 p-5 rounded-full shadow-2xl group shrink-0"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
        </button>
      </div>

      {/* Mobile Arrows Placement */}
      <div className="flex lg:hidden justify-center gap-8 mt-10">
        <button onClick={prevSlide} className="p-4 bg-slate-900 text-white rounded-full shadow-xl">
          <ChevronLeft size={28} />
        </button>
        <button onClick={nextSlide} className="p-4 bg-slate-900 text-white rounded-full shadow-xl">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}
