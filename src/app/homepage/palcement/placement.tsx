import React from 'react'

function Placement() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#631012] mb-8 border-b-4 border-[#631012] pb-2 inline-block">
          Placements
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Placement Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-[#631012]">95%</div>
                <div className="text-gray-600">Placement Rate</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-[#631012]">₹12L</div>
                <div className="text-gray-600">Avg Package</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Top Recruiters</h3>
            <p className="text-gray-600">
              Leading companies from various sectors visit our campus for recruitment including 
              technology giants, consulting firms, and core engineering companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Placement
