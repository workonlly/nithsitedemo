import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#3d0f12] via-[#4d1a1d] to-[#5b2226] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* left column: logo + name + contact + map + social icons */}
          <div className="space-y-6">
            {/* Logo and Institute Name */}
            <div className="flex items-start gap-4">
              <img src="/logo.png" alt="NITH logo" className="h-16 w-16 rounded-full ring-2 ring-white bg-white p-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg leading-tight">National Institute Of Technology, Hamirpur</h3>
                <p className="text-sm text-gray-200 mt-1">NIT, Hamirpur, Himachal Pradesh 177005</p>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="flex items-center gap-3 text-gray-200">
              <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              <span className="text-sm">Phone: +91-12345-67890</span>
            </div>

            {/* Map and Social Icons Row */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* Map Thumbnail */}
              <div className="h-20 w-20 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                <img src="/map-thumb.png" alt="map" className="h-full w-full object-cover" />
              </div>
              
              {/* Social Icons and Email */}
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2 text-gray-200">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">f</div>
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">in</div>
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">x</div>
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">ig</div>
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="Write Email" 
                    className="w-full max-w-xs bg-white/10 placeholder-gray-300 text-white rounded-full px-4 py-2 text-sm border border-white/20 focus:outline-none focus:border-white/40" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* three columns of links */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="text-yellow-400 font-semibold mb-4 text-base">Rules and Reports</h4>
              <ul className="text-gray-200 text-sm space-y-2">
                {Array.from({length:8}).map((_,i)=>(<li key={i} className="hover:text-white cursor-pointer transition-colors">Recruitment Rule</li>))}
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-400 font-semibold mb-4 text-base">GOI Initiatives@nith</h4>
              <ul className="text-gray-200 text-sm space-y-2">
                {Array.from({length:8}).map((_,i)=>(<li key={i} className="hover:text-white cursor-pointer transition-colors">Recruitment Rule</li>))}
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-400 font-semibold mb-4 text-base">Important Links</h4>
              <ul className="text-gray-200 text-sm space-y-2">
                {Array.from({length:8}).map((_,i)=>(<li key={i} className="hover:text-white cursor-pointer transition-colors">Recruitment Rule</li>))}
              </ul>
            </div>
          </div>
        </div>

        {/* centered CTA at bottom */}
        <div className="mt-12 pt-8 border-t border-white/20 flex justify-center">
          <button className="bg-white/10 hover:bg-white/20 text-white rounded-full px-8 py-3 text-sm font-medium transition-colors border border-white/30">
            Thank You For Visiting Us!!!!
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
