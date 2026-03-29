"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export interface FooterLink {
  name: string;
  href: string;
}

export interface SocialLink {
  platform: "facebook" | "twitter" | "instagram" | "youtube" | "linkedin";
  href: string;
}

interface SecondaryFooterProps {
  overviewTitle?: string;
  overviewText: string;
  socialLinks: SocialLink[];
  importantLinksTitle?: string;
  importantLinks: FooterLink[];
  contactTitle?: string;
  contactAddress: string;
  contactPhones: string[];
  contactEmail: string;
  copyrightText: string;
  poweredByText?: string;
  poweredByHref?: string;
}

const SocialIcon = ({ platform }: { platform: SocialLink["platform"] }) => {
  switch (platform) {
    case "facebook": return (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.62 0 3.319.351 3.319.351v4.253h-2.12c-1.872 0-2.32 1.139-2.32 2.399v1.98h4.634l-.74 3.667H12.96v7.98h-3.86z"/>
      </svg>
    );
    case "twitter": return (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    );
    case "instagram": return (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    );
    case "youtube": return (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    );
    case "linkedin": return (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.022-4.125 2.063 2.063 0 01-.022 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    );
    default: return null;
  }
};

export default function SecondaryFooter({
  overviewTitle = "Company Overview",
  overviewText,
  socialLinks,
  importantLinksTitle = "Important links",
  importantLinks,
  contactTitle = "Contact Us",
  contactAddress,
  contactPhones,
  contactEmail,
  copyrightText,
  poweredByText = "Powered by Factory Yard",
  poweredByHref = "#",
}: SecondaryFooterProps) {
  return (
    <footer className="bg-black text-gray-400 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          
          {/* 1. Company Overview */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 font-serif tracking-tight">
              {overviewTitle}
            </h3>
            <p className="leading-relaxed text-sm md:text-base pr-4">
              {overviewText}
            </p>
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => (
                <Link 
                  key={social.platform} 
                  href={social.href}
                  className="hover:text-white transition-colors duration-300"
                  aria-label={social.platform}
                >
                  <SocialIcon platform={social.platform} />
                </Link>
              ))}
            </div>
          </div>

          {/* 2. Important Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 font-serif tracking-tight">
              {importantLinksTitle}
            </h3>
            <ul className="space-y-4">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="hover:text-white transition-colors duration-300 text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Us */}
          <div className="space-y-6 text-sm md:text-base">
            <h3 className="text-xl font-bold text-white mb-6 font-serif tracking-tight">
              {contactTitle}
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="text-white mt-1 shrink-0" size={20} />
                <p>{contactAddress}</p>
              </div>

              {contactPhones.map((phone, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <Phone className="text-white shrink-0" size={20} />
                  <p>{phone}</p>
                </div>
              ))}

              <div className="flex gap-4 items-center">
                <Mail className="text-white shrink-0" size={20} />
                <p>{contactEmail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center space-y-2">
          <p className="text-sm font-medium tracking-wide">
            {copyrightText}
          </p>
          <p className="text-xs text-gray-600">
            {poweredByText.split(" ").slice(0, 2).join(" ")}{" "}
            <Link 
              href={poweredByHref} 
              className="text-[#005599] hover:underline"
            >
              {poweredByText.split(" ").slice(2).join(" ")}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
