import React from 'react'

function News() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Be a NITHian */}
          <div>
            <h2 className="text-4xl font-bold text-[#631012] mb-8 border-b-4 border-[#631012] pb-2 inline-block">
              Be a NITHian
            </h2>
            <div className="space-y-6">
              {/* B.Tech Card */}
              <div className="border-2 border-[#631012] rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-[#631012] mb-2">B.Tech</h3>
                <p className="text-gray-600">Undergraduate Program</p>
              </div>
              
              {/* M.Tech, M.Sc, MBA Card */}
              <div className="border-2 border-[#631012] rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-[#631012] mb-2">M.Tech, M.Sc, MBA</h3>
                <p className="text-gray-600">Postgraduate Program</p>
              </div>
              
              {/* Ph.D Card */}
              <div className="border-2 border-[#631012] rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-[#631012] mb-2">Ph.D</h3>
                <p className="text-gray-600">Doctorate Program</p>
              </div>
            </div>
          </div>

          {/* Right side - NEWS Section */}
          <div>
            <h2 className="text-4xl font-bold text-[#631012] mb-8 border-b-4 border-[#631012] pb-2 inline-block">
              NEWS Section
            </h2>
            <div className="space-y-6">
              {/* News Item 1 */}
              <div className="border border-gray-300 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="bg-[#631012] text-white rounded-lg p-3 text-center min-w-[60px]">
                    <div className="text-lg font-bold">30</div>
                    <div className="text-xs">OCT</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Lorem ipsum dolor sit amet</h3>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet consectetur. Lacus risus dui est fringilla dis. 
                      Pellentesque risus habitasse turpis sit. Ornare convallis ut adipiscing ut tellus.
                    </p>
                  </div>
                </div>
              </div>

              {/* News Item 2 */}
              <div className="border border-gray-300 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="bg-[#631012] text-white rounded-lg p-3 text-center min-w-[60px]">
                    <div className="text-lg font-bold">30</div>
                    <div className="text-xs">OCT</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Lorem ipsum dolor sit amet</h3>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet consectetur. Lacus risus dui est fringilla dis. 
                      Pellentesque risus habitasse turpis sit. Ornare convallis ut adipiscing ut tellus.
                    </p>
                  </div>
                </div>
              </div>

              {/* News Item 3 */}
              <div className="border border-gray-300 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="bg-[#631012] text-white rounded-lg p-3 text-center min-w-[60px]">
                    <div className="text-lg font-bold">30</div>
                    <div className="text-xs">OCT</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Lorem ipsum dolor sit amet</h3>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet consectetur. Lacus risus dui est fringilla dis. 
                      Pellentesque risus habitasse turpis sit. Ornare convallis ut adipiscing ut tellus.
                    </p>
                  </div>
                </div>
              </div>

              {/* News Item 4 */}
              <div className="border border-gray-300 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="bg-[#631012] text-white rounded-lg p-3 text-center min-w-[60px]">
                    <div className="text-lg font-bold">30</div>
                    <div className="text-xs">OCT</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Lorem ipsum dolor sit amet</h3>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet consectetur. Lacus risus dui est fringilla dis. 
                      Pellentesque risus habitasse turpis sit. Ornare convallis ut adipiscing ut tellus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
