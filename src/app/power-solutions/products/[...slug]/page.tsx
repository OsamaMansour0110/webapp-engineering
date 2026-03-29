"use client";

import { useParams } from "next/navigation";
import PowerSolutionsNavbar from "@/components/PowerSolutionsNavbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import Link from "next/link";
import { productsData, CategoryNode, Product } from "@/data/products";
import { Settings, Mail, MessageSquare, Download, Share2, Plus, X, MessageCircle, Send, Globe, Search, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Social Icon SVGs for robustness
const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.981 0 1.778-.773 1.778-1.729V1.729C24 .774 23.206 0 22.225 0z"/>
    </svg>
  ),
  WhatsApp: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
};

const findNodeBySlug = (slugs: string[], nodes: { [key: string]: CategoryNode }): any => {
  let current: any = { children: nodes };
  for (const slug of slugs) {
    if (current.children && current.children[slug]) {
      current = current.children[slug];
    } else if (current.products) {
      const product = current.products.find((p: Product) => p.id === slug);
      if (product) return product;
      return null;
    } else {
      return null;
    }
  }
  return current;
};

export default function GenericProductPage() {
  const params = useParams();
  const slugs = (params.slug as string[]) || [];
  const node = findNodeBySlug(slugs, productsData);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  if (!node) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-md w-full border border-gray-100">
          <h1 className="text-3xl font-extrabold text-[#003366] mb-4">Oops!</h1>
          <p className="text-gray-500 mb-8">The product or category you're looking for doesn't seem to exist.</p>
          <Link href="/power-solutions/products" className="inline-block py-3 px-8 bg-[#003366] text-white font-bold rounded-lg hover:shadow-lg transition-all">
            Explore All Products
          </Link>
        </div>
      </div>
    );
  }

  const isProduct = "description" in node && !("children" in node);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `Check out ${node.name} at 01 Electronics!`;

  const socialApps = [
    { name: "Facebook", icon: SocialIcons.Facebook, color: "#1877F2", url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { name: "Twitter", icon: SocialIcons.Twitter, color: "#1DA1F2", url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` },
    { name: "LinkedIn", icon: SocialIcons.LinkedIn, color: "#0A66C2", url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
    { name: "WhatsApp", icon: SocialIcons.WhatsApp, color: "#25D366", url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}` },
    { name: "Telegram", icon: Send, color: "#0088cc", url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` },
    { name: "Messenger", icon: MessageSquare, color: "#006AFF", url: `fb-messenger://share/?link=${encodeURIComponent(shareUrl)}` },
    { name: "Email", icon: Mail, color: "#ea4335", url: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}` },
    { name: "Instagram", icon: SocialIcons.Instagram, color: "#E4405F", url: "https://instagram.com" },
  ];

  const handleShare = (url: string) => {
    window.open(url, "_blank", "width=600,height=600");
  };

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans">
      <PowerSolutionsNavbar />
      
      <div className="pt-20 md:pt-24 flex-1">
        {isProduct ? (
          <div className="flex flex-col">
            {/* Header with Background */}
            <div className="bg-[#003366] py-12 px-4 md:px-12 text-white">
                <div className="max-w-7xl mx-auto w-full">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{node.name}</h1>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                        {(node.categoryPath || []).map((crumb: any, i: number) => (
                            <div key={i} className="flex items-center gap-2">
                                {crumb.href ? (
                                    <Link href={crumb.href} className="hover:text-red-400 transition-colors uppercase font-semibold">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-red-500 uppercase font-semibold">{crumb.label}</span>
                                )}
                                {i < (node.categoryPath || []).length - 1 && <span>/</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 md:px-12 py-16 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-20">
                {/* Left Column: Image & Download */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-6"
                >
                  <div className="relative w-full aspect-square bg-white border border-gray-200 p-8 rounded-lg shadow-sm group">
                    <Image
                      src={node.image}
                      alt={node.name}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <button className="w-full py-4 bg-[#003366] text-white font-bold rounded shadow-lg hover:shadow-xl hover:bg-[#002244] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <Download size={20} />
                    Download Catalog
                  </button>
                </motion.div>

                {/* Right Column: Details */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col gap-8"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-[#003366] mb-4">Description:</h2>
                    <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-wrap">
                      {node.description}
                    </p>
                  </div>

                  {node.benefits && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-[#003366] underline decoration-red-600 underline-offset-8">Benefits:</h3>
                      <ul className="space-y-3 pt-2">
                        {node.benefits.map((benefit: string, i: number) => (
                          <li key={i} className="flex items-start gap-4 group">
                            <Settings size={20} className="text-[#003366] mt-1 shrink-0 group-hover:rotate-90 transition-transform duration-500" />
                            <span className="text-gray-600 font-medium text-lg leading-snug">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {node.applications && (
                    <div className="space-y-4 pt-4">
                      <h3 className="text-xl font-bold text-[#003366] underline decoration-red-600 underline-offset-8">Applications:</h3>
                      <ul className="space-y-3 pt-2">
                        {node.applications.map((app: string, i: number) => (
                          <li key={i} className="flex items-start gap-4 group">
                            <Settings size={20} className="text-[#003366] mt-1 shrink-0 group-hover:rotate-45 transition-transform duration-500" />
                            <span className="text-gray-600 font-medium text-lg border-b border-gray-100 w-full pb-1">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Social Share Bar */}
                  <div className="pt-10 flex flex-wrap gap-2 items-center">
                    <button 
                        onClick={() => setIsShareModalOpen(true)}
                        className="p-2.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors shadow-md"
                    >
                        <Plus size={20} />
                    </button>
                    {socialApps.slice(0, 5).map((app, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleShare(app.url)}
                        className="p-2.5 text-white rounded hover:opacity-90 transition-all flex items-center justify-center shadow-md active:scale-90"
                        style={{ backgroundColor: app.color }}
                        title={`Share on ${app.name}`}
                      >
                        <app.icon size={20} />
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <PageBanner 
              title={node.name} 
              backgroundImage={node.bannerImage || node.image}
              breadcrumbs={[
                { label: "Home", href: "/power-solutions" },
                { label: "Products", href: "/power-solutions/products" },
                ...slugs.map((s, i) => {
                    // Try to find the display name by digging through productsData
                    let pathSoFar = slugs.slice(0, i + 1);
                    let foundName = s.toUpperCase();
                    let current: any = productsData;
                    for (const step of pathSoFar) {
                        if (current[step]) {
                            foundName = current[step].name;
                            current = current[step].children || {};
                        }
                    }
                    return { 
                        label: foundName, 
                        href: i < slugs.length - 1 ? `/power-solutions/products/${slugs.slice(0, i + 1).join("/")}` : undefined 
                    };
                })
              ]} 
            />
            
            <div className="max-w-7xl mx-auto px-4 md:px-12 py-20 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {node.children && Object.values(node.children).map((child: any, idx: number) => (
                  <motion.div
                    key={child.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link 
                      href={`/power-solutions/products/${slugs.join("/")}/${child.id}`}
                      className="group bg-white rounded-xl overflow-hidden border border-gray-100 flex flex-col shadow-sm hover:shadow-premium transition-all duration-500"
                    >
                      <div className="relative h-64 w-full bg-white p-8">
                        <Image
                          src={child.image}
                          alt={child.name}
                          fill
                          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 bg-gray-50 group-hover:bg-white transition-colors duration-300 border-t border-gray-100 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-[#003366] group-hover:text-red-600 uppercase tracking-wider transition-colors">{child.name}</h3>
                        <div className="w-10 h-10 rounded-full bg-[#003366] flex items-center justify-center text-white group-hover:bg-red-600 shadow-lg transition-all duration-300 transform group-hover:translate-x-2">
                            <ChevronRight size={20} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {node.products && node.products.map((p: Product, idx: number) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white rounded-xl border border-gray-100 flex flex-col shadow-sm hover:shadow-premium transition-all duration-500 overflow-hidden"
                  >
                    <div className="relative h-64 w-full bg-white p-8 group-hover:bg-gray-50 transition-colors">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 border-t border-gray-100 flex flex-col gap-4 flex-1">
                      <h3 className="text-xl font-bold text-[#003366] leading-tight flex-none">{p.name}</h3>
                      <div className="flex gap-3 items-start flex-1 min-h-[80px]">
                        <Settings size={18} className="text-[#003366] mt-1 shrink-0 group-hover:rotate-90 transition-transform duration-700" />
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                            {p.benefits && p.benefits[0] ? p.benefits[0] : p.description}
                        </p>
                      </div>
                      <Link 
                        href={`/power-solutions/products/${slugs.join("/")}/${p.id}`}
                        className="w-full text-center py-3 bg-[#003366] text-white font-bold rounded-lg hover:bg-[#002244] hover:shadow-lg transition-all mt-auto active:scale-95"
                      >
                        View Details
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Share Modal Overlay */}
      <AnimatePresence>
        {isShareModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsShareModalOpen(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
             />
             <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative bg-[#1a1a1a] text-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-white/10"
             >
                <div className="p-8 flex flex-col gap-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-6">
                        <div className="relative flex-1 group">
                            <input 
                                type="text"
                                placeholder="Search apps..."
                                className="w-full bg-white/5 border border-white/20 px-12 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                                <Search size={22} />
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsShareModalOpen(false)}
                            className="ml-6 p-2.5 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar py-2">
                        {socialApps.map((app, i) => (
                            <button 
                                key={i}
                                onClick={() => handleShare(app.url)}
                                className="flex flex-col items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group scale-95 hover:scale-100"
                            >
                                <div 
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl transition-all group-hover:rounded-3xl"
                                    style={{ backgroundColor: app.color }}
                                >
                                    <app.icon size={32} />
                                </div>
                                <span className="text-sm font-semibold text-white/70 group-hover:text-white tracking-wide">{app.name}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-center pt-6 border-t border-white/10">
                        <button className="flex items-center gap-2 text-blue-400 font-extrabold hover:text-blue-300 transition-colors uppercase text-xs tracking-[0.2em]">
                            <Plus size={18} />
                            AddToAny
                        </button>
                    </div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <Footer />
    </main>
  );
}
