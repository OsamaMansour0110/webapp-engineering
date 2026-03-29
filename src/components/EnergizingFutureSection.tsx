import React from 'react';
import { CircuitBoard, Timer } from 'lucide-react';

export default function EnergizingFutureSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden text-left border-y border-gray-100">
      {/* Background Pattern - tech network nodes */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23e5e7eb' stroke-width='1.5'%3E%3Cpath d='M30 30l60 60M90 30L30 90M60 0v120M0 60h120'/%3E%3Ccircle cx='60' cy='60' r='12' fill='%23ffffff' stroke='%23e5e7eb' stroke-width='2'/%3E%3Ccircle cx='30' cy='30' r='6' fill='%23ffffff' stroke='%23e5e7eb' stroke-width='2'/%3E%3Ccircle cx='90' cy='90' r='6' fill='%23ffffff' stroke='%23e5e7eb' stroke-width='2'/%3E%3Ccircle cx='90' cy='30' r='6' fill='%23ffffff' stroke='%23e5e7eb' stroke-width='2'/%3E%3Ccircle cx='30' cy='90' r='6' fill='%23ffffff' stroke='%23e5e7eb' stroke-width='2'/%3E%3Ccircle cx='60' cy='0' r='4' stroke='%23e5e7eb' stroke-width='2'/%3E%3Ccircle cx='60' cy='120' r='4' stroke='%23e5e7eb' stroke-width='2'/%3E%3Ccircle cx='0' cy='60' r='4' stroke='%23e5e7eb' stroke-width='2'/%3E%3Ccircle cx='120' cy='60' r='4' stroke='%23e5e7eb' stroke-width='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-[2.5rem] font-sans font-bold text-[#003366] leading-tight tracking-tight mb-4">
              <span className="font-semibold">01</span> Electronics - Energizing The<br />Future!
            </h2>
            <div className="w-12 h-1 bg-[#005599] mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              As a powerhouse of three power providing leaders, Borri, Legrand & 
              Elcos, we're committed to supplying your industry with clean, 
              uninterrupted and renewable energy supply.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10">
            {/* Item 1 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-2">
                <CircuitBoard className="w-12 h-12 text-[#005599] stroke-[1.5]" />
              </div>
              <div className="border-l-2 border-[#005599] pl-6 py-2">
                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                  With the combined power of three industry leaders: Legrand, Borri 
                  and Elcos, we're are devoted to serving businesses and transforming 
                  industries all over Egypt and GCC with world-class power 
                  technologies.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-2">
                <Timer className="w-12 h-12 text-[#005599] stroke-[1.5]" />
              </div>
              <div className="border-l-2 border-[#005599] pl-6 py-2">
                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                  Our Business is about improving yours, and we believe that clean 
                  and stable energy is the key of your industry revolution.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
