import React from 'react'

function Achieve() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Achievements heading */}
        <h2 className="text-4xl font-bold text-[#631012] mb-8 border-b-4 border-[#631012] pb-2 inline-block">
          Achievements
        </h2>
        
        {/* Horizontal scrollable cards */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex-shrink-0 w-80 border-2 border-gray-300 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
                {/* Trophy icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-[#631012] rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 3V1a1 1 0 0 1 2 0v2h6V1a1 1 0 0 1 2 0v2h1a2 2 0 0 1 2 2v2H4V5a2 2 0 0 1 2-2h1zM4 9h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9zm8 6a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1z"/>
                      <path d="M12 2a7 7 0 0 1 7 7v1h-2V9a5 5 0 0 0-10 0v1H5V9a7 7 0 0 1 7-7z"/>
                      <path fillRule="evenodd" d="M7.5 14.5A1.5 1.5 0 0 1 9 13h6a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 15 19H9a1.5 1.5 0 0 1-1.5-1.5v-3zm6-7A2.5 2.5 0 0 0 11 10h2a2.5 2.5 0 0 0-2.5-2.5z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-[#631012] text-center mb-4">Title</h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Lorem ipsum dolor sit amet consectetur. In sed odio ultrices 
                  tellus vel vel sed in. Elementum sagittis dictumst nibh amet 
                  sed odio. Nunc gravida convallis porttitor commodo morbi 
                  amet potenti. Augue purus vitae vitae neque eget vitae.
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center mt-4 lg:hidden">
          <p className="text-gray-500 text-sm">← Scroll horizontally to see more →</p>
        </div>
      </div>
    </section>
  )
}

export default Achieve
