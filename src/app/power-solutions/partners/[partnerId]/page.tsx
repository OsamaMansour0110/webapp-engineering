import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Mock data for the partners to show on their detail pages
const partnerDetails: Record<string, { name: string, description: string, specialty: string, color: string, headerColor: string }> = {
  legrand: {
    name: 'Legrand',
    description: 'Legrand is the global specialist in electrical and digital building infrastructures. Its comprehensive offering of solutions for commercial, industrial and residential markets makes it a benchmark for customers worldwide. Legrand offers solutions for energy distribution, building control, and IT infrastructure.',
    specialty: 'Panel builders and UPS distribution',
    color: 'border-red-600',
    headerColor: 'bg-red-50 text-red-700'
  },
  borri: {
    name: 'Borri',
    description: 'Borri is a global provider of power electronics systems and solutions for harsh industrial and demanding commercial and ICT applications. With over 80 years of experience, they provide highly reliable and efficient UPS systems, rectifiers, and inverters.',
    specialty: 'Commercial and industrial UPS systems',
    color: 'border-blue-600',
    headerColor: 'bg-blue-50 text-blue-700'
  },
  elcos: {
    name: 'Elcos',
    description: 'Elcos researches and develops systems for the generation of electrical energy. They manufacture diesel generators intended for agricultural, industrial, residential, and emergency applications globally, focusing on innovation and environmental sustainability.',
    specialty: 'Diesel generating sets with premium reliability',
    color: 'border-gray-800',
    headerColor: 'bg-gray-100 text-gray-800'
  }
};

export default async function PartnerPage({ params }: { params: Promise<{ partnerId: string }> }) {
  // Await the params to resolve the Next.js 15 asynchronous constraints
  const { partnerId } = await params;
  const details = partnerDetails[partnerId];

  if (!details) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Partner Not Found</h1>
        <Link href="/power-solutions" className="text-blue-600 hover:underline">
          Return to Power Solutions
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-24 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link href="/power-solutions" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#005599] transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Back to Power Solutions
        </Link>
        
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden relative">
          <div className={`absolute top-0 left-0 w-full h-2 ${details.color}`}></div>
          <div className="p-8 md:p-14 lg:p-20">
            <h1 className="text-4xl md:text-6xl font-black text-[#003366] tracking-tight mb-6">
              {details.name}
            </h1>
            
            <div className={`inline-block px-5 py-2.5 rounded-full text-sm font-semibold mb-10 ${details.headerColor}`}>
              Specialty: {details.specialty}
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="leading-relaxed text-xl">
                {details.description}
              </p>
              <div className="h-px w-full bg-gray-100 my-8"></div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-4 font-sans">Why We Partner with {details.name}</h3>
              <p className="leading-relaxed">
                As a proud partner of {details.name}, 01 Electronics is fully equipped to supply, install, and maintain their industry-leading power solutions. By integrating their cutting-edge technology into our portfolio, we ensure your operations run flawlessly, with clean and stable energy tailored to your specific industrial needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
