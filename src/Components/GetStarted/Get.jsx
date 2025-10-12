import React from 'react'

function Get({setShow}) {
  return (
        <div className='w-[1440px] flex flex-col text-center items-center h-[3793px] bg-gradient-to-tr from-blue-300 via-white to-orange-300 relative rounded-tr-[30px] rounded-tl-[30px]'>
          <div className='w-[400px] relative h-10 top-72'>
            <h1 className='font-[700] text-black text-[18px] leading-[30px]'>Let’s connect your ticketing platform</h1>
          </div>
          <div className='flex flex-col w-[400px] h-[200px] relative top-80'>
            <div className='flex flex-row w-[400px] gap-6 h-[100px] bg-[rgba(0,0,0,0.05)] rounded-[20px]'>
              <img className='relative left-3' src="/images/lock.svg" alt="" />
              <div className='flex flex-col relative top-4 gap-2 left-3 items-start justify-start w-[290px] h-16'>
                <h1 className='text-[24px] font-[700] text-orange-600 leading-[100%]'>secure</h1>
                <h1 className='text-[14px] font-[600] leading-[100%] text-black'>Transfer of your ticket data is encrypted end-to-end.</h1>
              </div>
            </div>
            <div className='flex flex-row w-[400px] gap-6 h-[100px] bg-[rgba(0,0,0,0.05)] relative top-3 rounded-[20px]'>
              <img className='relative left-3' src="/images/lock.svg" alt="" />
              <div className='flex flex-col relative top-4 gap-2 left-3 items-start justify-start w-[290px] h-16'>
                <h1 className='text-[24px] font-[700] text-orange-600 leading-[100%]'>Private</h1>
                <h1 className='text-[14px] font-[600] leading-[100%] text-black'>This application will never able to access your credentials.</h1>
              </div>
            </div>
          </div>
          <div className='w-[400px] items-center rounded-[32px] flex flex-row h-[55px] relative top-96 bg-blue-600'>
            <button className='text-[20px] w-[340px] h-[40px]'>
              Continue
              <img className='w-4 h-4 relative left-60 rotate-[43deg] bottom-6' src="/images/Arrow.png" alt="" />
            </button>
          </div>
          <div className='w-[340px] h-20 relative top-[400px]'>
            <h1 className='w-[340px] h-9 text-[16px] text-black font-[600]'>By selecting "Continue," you agree to the Plaid</h1>
            <h1 className='w-[340px] h-9 text-[17px] text-orange-500 font-[700]'>Privacy Policy</h1>          
          </div>
      </div>
  )
}

export default Get