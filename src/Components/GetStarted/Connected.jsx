import React from 'react'

function Connected() {
  return (
    <div className='w-[1440px] flex flex-col text-center items-center h-[3793px] bg-gradient-to-tr from-blue-300 via-white to-orange-300 relative rounded-tr-[30px] rounded-tl-[30px]'>
          <div className='w-[400px] relative h-10 top-72'>
            <h1 className='font-[700] text-black text-[24px] leading-[30px]'>Now You're connected!</h1>
          </div>
          <div className='flex flex-col w-[400px] h-[200px] relative top-80'>
            <div className='flex flex-row w-[400px] gap-6 h-[100px] bg-[rgba(0,0,0,0.05)] rounded-[20px]'>
              <img className='relative left-3' src="/images/Ellipse3.svg" alt="" />
              <div className='flex flex-col relative top-4 gap-2 left-3 items-start justify-start w-[290px] h-16'>
                <h1 className='text-[24px] font-[700] text-orange-600 leading-[100%]'>Island E-Tickets</h1>
                <h1 className='text-[14px] font-[600] leading-[100%] text-black'>www.islandetickets.com</h1>
              </div>
            </div>
          </div>
          <div className='w-[400px] items-center rounded-[32px] flex flex-row h-[55px] relative top-[300px] bg-blue-600'>
            <button className='text-[20px] w-[340px] h-[40px]'>
              Back to platform
              <img className='w-4 h-4 relative left-72 rotate-[43deg] bottom-6' src="/images/Arrow.png" alt="" />
            </button>
          </div>
      </div>
  )
}

export default Connected