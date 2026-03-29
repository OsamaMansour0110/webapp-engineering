"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

interface SecondaryNavbarProps {
  logoSrc: string;
  brandName: string;
  navItems: NavItem[];
  activeColor?: string; // Optional custom active color
  topBarColor?: string; // Optional custom top bar color
}

export default function SecondaryNavbar({
  logoSrc,
  brandName,
  navItems,
  activeColor = "#005599",
  topBarColor = "#003366",
}: SecondaryNavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Decorative Bar */}
      <div 
        className="h-2 w-full" 
        style={{ backgroundColor: topBarColor }} 
      />
      
      {/* Main Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-100 h-20 md:h-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          
          {/* Logo Section - Links to Main Home Page */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logoSrc}
              alt={brandName}
              width={48}
              height={48}
              className="object-contain"
            />
            <span 
              className="font-bold text-xl md:text-2xl tracking-tight font-sans"
              style={{ color: topBarColor }}
            >
              {brandName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.name} className="h-full flex items-center">
                  <Link
                    href={item.href}
                    className={`
                      px-5 h-full flex items-center text-sm font-semibold transition-all duration-200
                      ${isActive 
                        ? "text-white" 
                        : "text-gray-700 hover:bg-gray-50"}
                    `}
                    style={{ 
                      backgroundColor: isActive ? activeColor : 'transparent',
                      color: isActive ? 'white' : undefined 
                    }}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 w-4 h-4 opacity-70" />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              style={{ color: topBarColor }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 absolute top-[calc(100%+8px)] left-0 right-0 shadow-xl z-40 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    py-3 px-4 rounded-lg flex items-center justify-between text-sm font-semibold
                    ${isActive 
                      ? "text-white" 
                      : "text-gray-700 hover:bg-gray-50"}
                  `}
                  style={{ 
                    backgroundColor: isActive ? activeColor : 'transparent',
                  }}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={14} />}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
