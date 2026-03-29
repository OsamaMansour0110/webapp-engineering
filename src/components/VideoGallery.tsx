import React from 'react';

export default function VideoGallery() {
  return (
    <section className="bg-gray-50 py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          
          {/* Main Large Video (Left) */}
          <div className="lg:col-span-7 lg:h-[550px] h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-md bg-gray-200">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/LXb3EKWsInQ?si=V1m-V9k24P8l8sF" 
              title="Main Feature Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Secondary Videos (Right Stacked) */}
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6 lg:h-[550px]">
            <div className="flex-1 rounded-2xl overflow-hidden shadow-md bg-gray-200 min-h-[250px] lg:min-h-0">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/Bey4XXJAqS8?si=Z6I1Q9Jj-9T2wO" 
                title="Secondary Video 1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="flex-1 rounded-2xl overflow-hidden shadow-md bg-gray-200 min-h-[250px] lg:min-h-0">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/EngW7tLk6R8?si=8Y9G_N2Tj0" 
                title="Secondary Video 2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
