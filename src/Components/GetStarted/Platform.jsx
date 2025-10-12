import React from 'react'
import Get from './Get'
import Main from '../Main'

function Platform() {
  return (
    <div className='w-[1440pxpx] h-[3793px] flex flex-col text-center items-center relative rounded-tr-[30px] rounded-tl-[30px] bg-gradient-to-tr from-blue-400 via-white to-orange-400'>
      <div className='w-[400px] relative h-10 top-72'>
        <h1 className='font-[700] text-black text-[18px] leading-[30px]'>Select your platform</h1>
      </div>
      <div className='flex flex-col w-[400px] h-[450px] relative top-80'>
            <div className='flex flex-row w-[400px] gap-7 h-[100px] bg-[rgba(0,0,0,0.12)] rounded-[20px]'>
              <img className='relative left-5' src="/images/search.svg" alt="" />
                <h1 className='text-[19px] relative top-10  left-6 font-[600] leading-[100%] text-black'>Search . . .</h1>
            </div>
            <div className='flex flex-row w-[400px] gap-6 h-[100px] bg-[rgba(0,0,0,0.05)] relative top-3 rounded-[20px]'>
              <img className='relative left-3' src="/images/Ellipse1.svg" alt="" />
              <div className='flex flex-col relative top-4 gap-2 left-3 items-start justify-start w-[290px] h-16'>
                <h1 className='text-[24px] font-[700] text-orange-600 leading-[100%]'>Ticketmaster</h1>
                <h1 className='text-[14px] font-[600] leading-[100%] text-black'>www.ticketmaster.com</h1>
              </div>
            </div>
            <div className='flex flex-row w-[400px] gap-6 relative top-6 h-[100px] bg-[rgba(0,0,0,0.05)] rounded-[20px]'>
              <img className='relative left-3' src="/images/Ellipse3.svg" alt="" />
              <div className='flex flex-col relative top-4 gap-2 left-3 items-start justify-start w-[290px] h-16'>
                <h1 className='text-[24px] font-[700] text-orange-600 leading-[100%]'>Island E-Tickets</h1>
                <h1 className='text-[14px] font-[600] leading-[100%] text-black'>www.islandetickets.com</h1>
              </div>
            </div>
            <div className='flex flex-row w-[400px] gap-6 h-[100px] bg-[rgba(0,0,0,0.05)] relative top-9 rounded-[20px]'>
              <img className='relative left-3' src="/images/Ellipse2.svg" alt="" />
              <div className='flex flex-col relative top-4 gap-2 left-3 items-start justify-start w-[290px] h-16'>
                <h1 className='text-[24px] font-[700] text-orange-600 leading-[100%]'>Ally</h1>
                <h1 className='text-[14px] font-[600] leading-[100%] text-black'>www.ally.com</h1>
              </div>
            </div>
          </div>
           <div className='w-[400px] items-center rounded-[32px] flex flex-row h-[55px] top-[400px] relative bg-blue-600'>
            <button className='text-[20px] w-[340px] h-[40px]'>
              Continue
              <img className='w-4 h-4 relative left-60 rotate-[43deg] bottom-6' src="/images/Arrow.png" alt="" />
            </button>
          </div>
    </div>
  )
}

export default Platform