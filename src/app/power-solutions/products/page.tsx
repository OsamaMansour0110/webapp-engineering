"use client";

import PowerSolutionsNavbar from "@/components/PowerSolutionsNavbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import Link from "next/link";

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

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <PowerSolutionsNavbar />
      
      <div className="pt-20 md:pt-24">
        <PageBanner 
          title="PRODUCTS" 
          backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
          breadcrumbs={[
            { label: "Home", href: "/power-solutions" },
            { label: "Products" }
          ]} 
        />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {productCategories.map((cat) => (
              <Link 
                key={cat.name} 
                href={cat.href}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
              >
                <div className="relative h-72 md:h-96 w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#003366]/0 group-hover:bg-[#003366]/10 transition-all duration-500" />
                </div>
                <div className="p-8 bg-gray-50 group-hover:bg-white transition-colors duration-300 border-t border-gray-100">
                  <h3 className="text-xl md:text-2xl font-bold text-[#003366] uppercase tracking-wider group-hover:text-[#005599] transition-colors">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
