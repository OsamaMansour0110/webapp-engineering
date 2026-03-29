import { MapPin, Phone, Mail, Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] py-16 border-t border-black/5 dark:border-white/10 transition-colors duration-500">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {/* Company Overview */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold font-serif text-[var(--foreground)] tracking-widest uppercase mb-8 inline-block border-b-2 border-primary pb-2">Company Overview</h3>
          <p className="text-[var(--muted)] leading-relaxed text-sm md:text-base">
            01 Electronics is a leading power solution provider, general and industrial contractor and construction services integrator.
            01 Electronics enables your industry transformation with power and energy solutions that include UPSs, generators and solar panels.
            We also provide your business/industry with the construction and development services needed.
          </p>
        </div>

        {/* Important Links */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold font-serif text-[var(--foreground)] tracking-widest uppercase mb-8 inline-block border-b-2 border-primary pb-2">Important Links</h3>
          <ul className="space-y-3">
            {[
              { name: "Power", path: "/power-solutions" },
              { name: "Construction", path: "/construction-solutions" },
              { name: "Software", path: "/software-solutions" }
            ].map((link) => (
              <li key={link.name} className="group flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <a
                  href={link.path}
                  className="text-[var(--muted)] group-hover:text-primary transition-colors duration-300 text-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold font-serif text-[var(--foreground)] tracking-widest uppercase mb-8 inline-block border-b-2 border-primary pb-2">Contact Us</h3>

          <div className="space-y-6">
            <div className="flex gap-4 items-start group">
              <MapPin className="text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="text-[var(--muted)] text-sm md:text-base">
                <p>130, The Industrial Zone, New Cairo, Cairo, Egypt</p>
                <p>Phase 1 - E07 - F15 - Hamriya Free Zone - Sharjah - United Arab Emirates</p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <Phone className="text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="text-[var(--muted)] text-sm md:text-base space-y-1">
                <p>+20225723501</p>
                <p>+201002329153</p>
                <p>+971525164400</p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <Mail className="text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <p className="text-[var(--muted)] text-sm md:text-base group-hover:text-primary transition-colors">
                info@01electronics.net
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center text-white/20 text-xs tracking-widest uppercase px-6 border-t border-white/5 pt-8">
        &copy; {new Date().getFullYear()} 01 Electronics. All rights reserved. Designed for Premium Industrial Solutions.
      </div>
    </footer>
  );
}
