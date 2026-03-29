"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/power-solutions" },
  { name: "About Us", href: "/power-solutions/about" },
  { name: "Products", href: "#", hasDropdown: true },
  { name: "Our partners", href: "/power-solutions/partners" },
  { name: "News", href: "/power-solutions/news" },
  { name: "Careers", href: "/power-solutions/careers" },
  { name: "Contact us", href: "/power-solutions/contact" },
];

export default function PowerSolutionsNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Navy Bar */}
      <div className="h-2 bg-[#003366] w-full" />
      
      {/* Main Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-100 h-20 md:h-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          
          {/* Logo Section - Links to Main Home Page */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="01 Electronics"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="text-[#003366] font-bold text-xl md:text-2xl tracking-tight font-sans">
              01 Electronics
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
                        ? "bg-[#005599] text-white" 
                        : "text-gray-700 hover:text-[#005599] hover:bg-gray-50"}
                    `}
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
              className="p-2 text-[#003366]"
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
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  py-3 px-4 rounded-lg flex items-center justify-between text-sm font-semibold
                  ${pathname === item.href 
                    ? "bg-[#005599] text-white" 
                    : "text-gray-700 hover:bg-gray-50"}
                `}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={14} />}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
