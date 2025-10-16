import React from 'react'

function Event() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#631012] mb-8 border-b-4 border-[#631012] pb-2 inline-block">
          Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="border border-gray-300 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#631012] mb-3">Upcoming Event {index + 1}</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur. Event details and description will be displayed here.
              </p>
              <div className="text-sm text-gray-500">Date: Coming Soon</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Event
