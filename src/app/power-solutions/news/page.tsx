import PageBanner from "@/components/PageBanner";

export default function NewsPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <PageBanner
        title="News"
        backgroundImage="/software.png" // Placeholder
        breadcrumbs={[
          { label: "Home", href: "/power-solutions" },
          { label: "News" },
        ]}
      />

      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* First Video Card */}
          <div className="flex flex-col h-full bg-[#f4f4f4]">
            {/* Video Container */}
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/LXb3EKWsInQ?si=V1m-V9k24P8l8sF" // Assuming this is the correct link from VideoGallery.tsx
                title="01 Electronics' CEO & Sales Manager giving their opening speech in the ELECTRICX 2019 Exhibition"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Text Content */}
            <div className="p-6 md:p-8 flex-grow shadow-sm">
              <p className="text-sm md:text-base font-medium text-black leading-relaxed">
                Watch what the 01 Electronics&apos; CEO – Eng. Ayman Hammad, and our Sales Manager – 
                Eng. Ahmed Hammad had to say in the ELECTRICX 2019 Exhibition about the 
                company&apos;s start, current activities and future plans.
              </p>
            </div>
          </div>

          {/* Second Video Card */}
          <div className="flex flex-col h-full bg-[#f4f4f4]">
            {/* Video Container */}
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Bey4XXJAqS8?si=Z6I1Q9Jj-9T2wO"
                title="01 Electronics' footprint in the ELECTRICX 2019 Exhibition"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Empty Text Content to match height visually as per screenshot */}
            <div className="p-6 md:p-8 flex-grow shadow-sm min-h-[100px]">
              {/* Empty placeholder area since the screenshot does not display text for the second video. */}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
