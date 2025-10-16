import React from 'react'

function Header() {
  return (
    <div className='flex flex-col '>
       {/* it consist of three section */}
         {/*upper links area */}
         <div className='bg-[#631012] flex flex-row justify-end items-center text-white p-2 gap-5'>
            <div>
                <span>A+</span>
                <span>A-</span>
                <span>Toggle Contrast</span>
                <span>Grey Scale</span>
                <span>Reset</span>
            </div>
            
            <div className='flex flex-row gap-2 justify-end items-center gap-5 ml-20px'>
                        <div className='flex flex-row gap-3'>
                            <span>Home</span>
                            <span>Internet</span>
                            <span>eOffice</span>
                            <span>Directory</span>
                            <span>Faculty Portfolio</span>
                        </div>
                        <div className='ring-2 ring-white p-2'>
                        english
                        </div>
            </div>
         </div> 
         {/*middle refion for logo and name */}
         <div>
              <div className='flex flex-row justify-between'>
                <div>
                     <img src="logo.png" width={20} height={20} alt="" />
                </div>
                <div>
                    <h1>National Institute of Technology Hamirpur</h1>
                    <h1></h1>
                </div>

              </div>
            
        </div>  
         {/* down region for main links */}
        <div className='bg-[#631012] flex flex-row justify-end items-center text-white p-2 gap-5'>
            <div className='flex flex-row gap-10'>
                <div>About NITH</div>
                <div>Authorities</div>
                <div>Administration</div>
                <div>Departments</div>
                <div>Academics</div>
                <div>Student</div>
                <div>Faculty</div>
                <div>Alumni</div>
            </div>

        </div>
      
    </div>
  )
}

export default Header
