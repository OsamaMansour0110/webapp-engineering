"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/power-solutions" },
  { name: "About Us", href: "/power-solutions/about" },
  { name: "Products", href: "/power-solutions/products", hasDropdown: true },
  { name: "Our partners", href: "/power-solutions/partners" },
  { name: "News", href: "/power-solutions/news" },
  { name: "Careers", href: "/power-solutions/careers" },
  { name: "Contact us", href: "/power-solutions/contact" },
];

const productCategories = [
  { 
    name: "UPS", 
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    href: "/power-solutions/products/ups"
  },
  { 
    name: "GENERATORS", 
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    href: "/power-solutions/products/generators"
  },
  { 
    name: "BATTERIES", 
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2070&auto=format&fit=crop",
    href: "/power-solutions/products/batteries"
  },
  { 
    name: "Power and Protection", 
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    href: "/power-solutions/products/power-protection"
  },
];

export default function PowerSolutionsNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);

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
              const isActive = pathname === item.href || (item.name === "Products" && pathname.startsWith("/power-solutions/products"));
              const isProducts = item.name === "Products";
              
              return (
                <div 
                  key={item.name} 
                  className="h-full flex items-center relative group"
                >
                  <Link
                    href={item.href}
                    className={`
                      px-5 h-full flex items-center text-sm font-semibold transition-all duration-200
                      ${isActive 
                        ? "bg-[#003366] text-white" 
                        : "text-gray-700 hover:text-[#003366] hover:bg-gray-50"}
                    `}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className={`ml-1 w-4 h-4 opacity-70 transition-transform group-hover:rotate-180`} />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {isProducts && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white shadow-2xl border-t border-gray-100 p-8 rounded-b-xl grid grid-cols-4 gap-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto">
                      {productCategories.map((cat) => (
                        <Link 
                          key={cat.name}
                          href={cat.href}
                          className="group/item flex flex-col items-center text-center space-y-4"
                        >
                          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                            <Image
                              src={cat.image}
                              alt={cat.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                              sizes="200px"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/20 transition-colors duration-300" />
                          </div>
                          <span className="text-[#003366] font-bold text-sm uppercase tracking-wider group-hover/item:text-[#005599] transition-colors">
                            {cat.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
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
        <div className="lg:hidden bg-white border-b border-gray-200 absolute top-[calc(100%+0px)] left-0 right-0 shadow-xl z-40 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                  className={`
                    py-3 px-4 rounded-lg flex items-center justify-between text-sm font-semibold
                    ${pathname === item.href 
                      ? "bg-[#003366] text-white" 
                      : "text-gray-700 hover:bg-gray-50"}
                  `}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={14} />}
                </Link>
                {item.hasDropdown && (
                  <div className="grid grid-cols-1 gap-1 pl-4 mt-1">
                    {productCategories.map(cat => (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-2 px-4 text-xs font-medium text-gray-500 hover:text-[#003366] hover:bg-gray-50 rounded"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
