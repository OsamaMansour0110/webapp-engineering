"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage: string;
}

export default function PageBanner({
  title,
  breadcrumbs,
  backgroundImage,
}: PageBannerProps) {
  return (
    <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden bg-[#003366] font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover object-center opacity-60 mix-blend-overlay grayscale"
          priority
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#002244]/80" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h1>
        
        <div className="flex items-center text-sm md:text-base font-medium">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <Fragment key={crumb.label}>
                {crumb.href && !isLast ? (
                  <Link 
                    href={crumb.href}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-red-500" : "text-white"}>
                    {crumb.label}
                  </span>
                )}
                
                {!isLast && (
                  <span className="mx-2 text-white/70">/</span>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
