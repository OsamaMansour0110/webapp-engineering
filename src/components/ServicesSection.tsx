import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Power Solutions",
    slogan: "Energizing the Future!",
    image: "/power.png",
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Construction Solutions",
    slogan: "Constructing the Future!",
    image: "/construction.png",
    color: "from-green-500/20 to-transparent",
  },
  {
    title: "Software Solutions",
    slogan: "Digitalizing the Future!",
    image: "/software.png",
    color: "from-purple-500/20 to-transparent",
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 container mx-auto">
      <h2 className="text-5xl font-serif font-bold text-center mb-16 text-white tracking-widest uppercase">Our Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative h-[500px] rounded-2xl overflow-hidden glass transition-all duration-500 hover:scale-[1.02] border-white/5 shadow-2xl"
          >
            <Image 
              src={service.image} 
              alt={service.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay gradient */}
            <div className={`absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500`} />
            
            {/* Center Title Box */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="glass px-10 py-5 rounded-lg border border-white/10 backdrop-blur-md shadow-lg group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500">
                <h3 className="text-3xl font-bold font-serif text-white tracking-wide text-center">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Bottom Slogan Box */}
            <div className="absolute bottom-6 right-6">
              <div className="bg-black/80 px-4 py-2 rounded-md border border-white/5 backdrop-blur-sm shadow-md">
                <p className="text-sm font-semibold text-white/90 tracking-wider">
                  {service.slogan}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
