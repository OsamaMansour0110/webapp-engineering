"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Who We Are",
    content: "As an industrial and commercial power products supplier, general and industrial contractor and construction services integrator, 01 Electronics supports industries, local governments and public sector organizations through every step of their industrial development.",
    content2: "We, 01 Electronics, serving all over Egypt since 2006, and in UAE as of 2022, are Borri commercial and industrial UPS sole agents in Egypt, Elcos sole agents in Egypt for diesel gensets (generator sets), and panel builders and UPS distributor of Legrand.",
    image: "/construction.png", // Using construction as a hero background for now
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
    <div className="relative w-full h-[600px] overflow-hidden mt-[70px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full flex items-center justify-center container mx-auto px-6">
        <motion.div 
          key={`content-${current}`}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-lg max-w-2xl border-l-[6px] border-primary"
        >
          <h2 className="text-4xl font-serif font-bold mb-6 text-primary">{slides[current].title}</h2>
          <div className="space-y-4 text-white/90 leading-relaxed text-lg">
            <p className="font-semibold">{slides[current].content}</p>
            <p className="text-sm md:text-base opacity-80">{slides[current].content2}</p>
          </div>
        </motion.div>
      </div>

      {/* Custom Arrows as per user request (using images) */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110 active:scale-95 z-40"
      >
        <Image src="/arrow-left.png" alt="Prev" width={50} height={50} className="w-10 h-10 md:w-16 md:h-16" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110 active:scale-95 z-40"
      >
        <Image src="/arrow-right.png" alt="Next" width={50} height={50} className="w-10 h-10 md:w-16 md:h-16" />
      </button>
    </div>
  );
}
