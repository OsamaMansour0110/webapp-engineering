import React from 'react';
import Link from 'next/link';

const partners = [
  {
    id: 'legrand',
    name: 'Legrand',
    logo: (
      <div className="flex items-center">
        {/* Stylized text approximate to Legrand logo */}
        <div className="flex flex-col gap-[2px] mr-1">
          <div className="w-3 h-3 border-[3px] border-black border-r-0 border-b-0"></div>
          <div className="w-3 h-3 border-[3px] border-black border-l-0 border-t-0"></div>
        </div>
        <span className="text-[#e20025] font-bold text-3xl tracking-tight font-sans">legrand</span>
        <sup className="text-[#e20025] text-xs font-bold -mt-3 ml-1">®</sup>
      </div>
    )
  },
  {
    id: 'borri',
    name: 'Borri',
    logo: (
      <div className="flex items-center">
        {/* Stylized text approximate to Borri logo */}
        <span className="text-[#0033cc] font-black text-[2.5rem] tracking-tighter font-sans uppercase">
          BO<span className="text-[#0055ff]">RR</span>I
        </span>
      </div>
    )
  },
  {
    id: 'elcos',
    name: 'Elcos',
    logo: (
      <div className="flex flex-col items-center justify-center -mt-2">
        <div className="flex items-center gap-1">
          {/* Stylized text approximate to Elcos logo */}
          <div className="w-5 h-5 rounded-full border-[2.5px] border-gray-700 flex items-center justify-center ml-1">
             <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
          </div>
          <span className="text-gray-800 font-extrabold text-[1.75rem] tracking-widest font-sans uppercase ml-1">
            Elcos
          </span>
        </div>
        <span className="text-gray-500 text-[0.5rem] font-bold tracking-[0.2em] font-sans mt-0 ml-5">
          GENERATING SETS
        </span>
      </div>
    )
  }
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-24 pb-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {partners.map((partner) => (
            <Link 
              href={`/power-solutions/partners/${partner.id}`} 
              key={partner.id}
              className="group"
            >
              <div className="w-48 h-48 md:w-[220px] md:h-[220px] rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] group-hover:border-blue-100 group-hover:-translate-y-1 bg-white">
                {partner.logo}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
