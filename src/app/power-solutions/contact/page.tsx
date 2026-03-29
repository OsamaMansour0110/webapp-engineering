import PageBanner from "@/components/PageBanner";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="bg-white min-h-screen font-sans pb-32">
      <PageBanner
        title="Contact us"
        backgroundImage="/software.png" // Placeholder banner image
        breadcrumbs={[
          { label: "Home", href: "/power-solutions" },
          { label: "Contact us" },
        ]}
      />

      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24">
        
        {/* Top Section: Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          
          {/* Left Column: Address Information */}
          <div className="space-y-12">
            
            {/* Egypt Branch */}
            <div className="pl-5 border-l-4 border-l-[#005599] space-y-3">
              <h3 className="text-2xl font-bold text-[#005599] tracking-tight">
                Egypt
              </h3>
              <p className="font-semibold text-gray-800 uppercase text-sm tracking-wider">
                01 Electronics
              </p>
              <div className="space-y-4 text-sm text-gray-600 font-medium pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#005599] w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>130, The Industrial Zone, New Cairo, Cairo, Egypt</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#005599] w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                  <span>0100 232 9153</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#005599] w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                  <span>info@01electronics.net</span>
                </div>
              </div>
            </div>

            {/* UAE Branch */}
            <div className="pl-5 border-l-4 border-l-[#005599] space-y-3">
              <h3 className="text-2xl font-bold text-[#005599] tracking-tight">
                United Arab Emirates
              </h3>
              <p className="font-semibold text-gray-800 uppercase text-sm tracking-wider">
                01 Electronics
              </p>
              <div className="space-y-4 text-sm text-gray-600 font-medium pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#005599] w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>Phase 1 - E07 - F15 - Hamriya Free Zone - Sharjah - United Arab Emirates</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#005599] w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                  <span>+971 52 516 4400</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#005599] w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                  <span>info@01electronics.net</span>
                </div>
              </div>
            </div>

            {/* Saudi Arabia Branch */}
            <div className="pl-5 border-l-4 border-l-[#005599] space-y-3">
              <h3 className="text-2xl font-bold text-[#005599] tracking-tight">
                Saudi Arabia
              </h3>
              <div className="space-y-1">
                <p className="font-semibold text-gray-800 uppercase text-sm tracking-wider">
                  01 Electronics
                </p>
                <p className="text-gray-500 font-serif text-sm">
                  مؤسسة خالد بن حمود بن سعيد العمودي للتجارة
                </p>
              </div>
              <div className="space-y-4 text-sm text-gray-600 font-medium pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#005599] w-5 h-5 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>An Nasim District, 3203 7189, Om Al-Mo&apos;mneen Safia, Jeddah 23233, Saudi Arabia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#005599] w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                  <span>info@01electronics.net</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Map Image Placeholder */}
          <div className="w-full flex items-center justify-center">
             <div className="relative w-full aspect-square md:aspect-[4/3] bg-gray-50 flex flex-col items-center justify-center rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all hover:shadow-md">
                <Globe className="text-gray-300 w-32 h-32 opacity-50" strokeWidth={1} />
                <span className="text-gray-600 mt-6 font-semibold text-lg">MENA Regional Map</span>
                <span className="text-gray-400 text-sm mt-3 text-center px-8 font-medium">
                   (Upload your high-resolution custom vector map image displaying pins across Egypt, Saudi Arabia, and UAE here.)
                </span>
             </div>
          </div>
        </div>

        {/* Bottom Section: Contact Form */}
        <div className="max-w-4xl mx-auto pt-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-serif tracking-tight">
              Send us message
            </h2>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#f4f4f4] text-gray-800 border-none rounded px-5 py-4 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#005599] transition-all text-sm font-medium"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#f4f4f4] text-gray-800 border-none rounded px-5 py-4 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#005599] transition-all text-sm font-medium"
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows={8}
                className="w-full bg-[#f4f4f4] text-gray-800 border-none rounded px-5 py-4 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#005599] transition-all text-sm font-medium resize-y"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#005599] text-white font-semibold py-4 rounded hover:bg-[#004488] transition-colors focus:ring-4 focus:ring-blue-100"
              >
                Send
              </button>
            </div>
          </form>
        </div>

      </main>
    </div>
  );
}
