import PageBanner from "@/components/PageBanner";
import PartnersSection from "@/components/PartnersSection";

export default function PartnersPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageBanner
        title="Our Partners"
        backgroundImage="/software.png" // Using existing known-working placeholder
        breadcrumbs={[
          { label: "Home", href: "/power-solutions" },
          { label: "Partners" },
        ]}
      />

      <main className="w-full">
        {/* Title above the PartnersSection */}
        <div className="pt-24 pb-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#005599] tracking-tight">
            Happy To Work With
          </h2>
        </div>
        
        {/* We wrap the existing component and override its large top padding to balance the layout */}
        <div className="-mt-16">
          <PartnersSection />
        </div>
      </main>
    </div>
  );
}
