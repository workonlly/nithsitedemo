import React from 'react'

function Aboutus() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left side - About Us content */}
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold !text-[#631012] mb-6 border-b-4 border-[#631012] pb-2 inline-block">
              About Us
            </h2>
            <p className="!text-gray-700 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet consectetur. In sed odio ultrices 
              tellus vel vel sed in. Elementum sagittis dictumst nibh amet 
              sed odio. Nunc gravida convallis porttitor commodo morbi 
              amet potenti. Augue purus vitae vitae neque eget vitae 
              egestas arcu. Tincidunt ultrices vestibulum sed quis pretium. 
              Diam rhoncus quam iaculis morbi scelerisque nisl nunc.
            </p>
          </div>

          {/* Right side - Statistics grid spanning 2 columns */}
          <div className="md:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 text-center shadow-sm">
                <div className="text-5xl font-bold text-[#631012] mb-2">97</div>
                <div className="text-xl font-semibold text-gray-800 mb-1">Placements</div>
                <div className="text-sm text-gray-600">
                  Statistics on placements<br />
                  and internships
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
