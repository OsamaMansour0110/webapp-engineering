import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800 pb-24">
      <PageBanner
        title="About Us"
        backgroundImage="/software.png" // Placeholder, replaces with actual banner image later
        breadcrumbs={[
          { label: "Home", href: "/power-solutions" },
          { label: "About Us" },
        ]}
      />

      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24">
        
        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/power.png" // Placeholder that we know works locally from previous step
              alt="01 Electronics Technician"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-[#003366] font-bold leading-tight">
              01 Electronics – Energizing The Future!
            </h2>
            <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
              <p>
                As a powerhouse of three power providing leaders,{" "}
                <Link href="#" className="text-[#0088cc] hover:underline font-medium">Legrand</Link>, the French integrated power specialist,{" "}
                <Link href="#" className="text-[#0088cc] hover:underline font-medium">Borri</Link>, the Italian UPS manufacturer, and{" "}
                <Link href="#" className="text-[#0088cc] hover:underline font-medium">Elcos</Link>, the Italian power generators. We&apos;re committed to supplying your industry with clean, uninterrupted and reliable energy supply.
              </p>
              <p>
                Discover who we are, our family of brands, the leadership team and our strategic sponsorships to understand how 01 Electronics is powering the next industry revolution.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="max-w-4xl mx-auto space-y-12 text-sm md:text-base text-gray-700 leading-relaxed font-sans">
          
          {/* Who We Are */}
          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#003366] font-serif">
              Who We Are
            </h3>
            <p>
              As an industrial and commercial power products supplier, 01 Electronics supports industries, local governments and public sector organizations through every step of their industrial development.
            </p>
            <p>
              We, 01 Electronics, serving all over Egypt since 2006, and in UAE as of 2022, are{" "}
              <Link href="#" className="text-[#0088cc] hover:underline font-medium">Borri</Link> commercial and industrial UPS sole agents in Egypt,{" "}
              <Link href="#" className="text-[#0088cc] hover:underline font-medium">Elcos</Link> sole agents in Egypt for diesel gensets (generator sets), and{" "}
              <Link href="#" className="text-[#0088cc] hover:underline font-medium">panel builders</Link> and{" "}
              <Link href="#" className="text-[#0088cc] hover:underline font-medium">UPS distributor</Link> of{" "}
              <Link href="#" className="text-[#0088cc] hover:underline font-medium">Legrand</Link>.
            </p>
          </section>

          {/* Our Mission */}
          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#003366] font-serif">
              Our Mission
            </h3>
            <p>
              With the combined power of three industry leaders:{" "}
              <Link href="#" className="text-[#0088cc] hover:underline font-medium">Legrand</Link>,{" "}
              <Link href="#" className="text-[#0088cc] hover:underline font-medium">Borri</Link> and{" "}
              <Link href="#" className="text-[#0088cc] hover:underline font-medium">Elcos</Link>, we&apos;re are devoted to serving businesses and transforming industries all over Egypt and GCC with world-class power technologies.
            </p>
          </section>

          {/* Our Vision */}
          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#003366] font-serif">
              Our Vision
            </h3>
            <p>
              We believe that the peak of the industrial and commercial revolution comes from getting the engineering values, skills and manpower it requires, and from getting the eligible energy and power it deserves.
            </p>
          </section>

          {/* Our Promise */}
          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#003366] font-serif">
              Our Promise
            </h3>
            <p>
              Our Business is about developing and improving yours, and we believe that state-of-art technology, top-notch engineering skills, and clean and stable energy is the key of your industry revolution.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
