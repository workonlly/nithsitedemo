import React from 'react'

function Hero() {
  return (
    <div className="relative h-full w-full ">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="admin.jpg" 
          alt="NIT Hamirpur Campus" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Good Education to Build A Better Future
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Pretium gravida convallis est enim nunc mi elementum auctor. 
            Lectus proin rhoncus viverra amet sagittis est vestibulum urna. Sed diam turpis gravida ullamcorper dis non sed at nullam.
          </p>
          <button className="bg-[#631012] hover:bg-[#4a0c0e] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
