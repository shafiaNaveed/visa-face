import React from 'react'

function Credential() {
  return (
    <div className='w-[1440pxpx] h-[793px] flex flex-col text-center items-center relative rounded-tr-[30px] rounded-tl-[30px] bg-gradient-to-tr from-blue-400 via-white to-orange-400'>
    <div className='w-[400px] relative h-10 top-16 justify-center items-center'>
        <h1 className='font-[700] text-black text-[22px] leading-[30px]'>Enter your credentials</h1>
      </div>
      <div className='flex flex-col w-[400px] h-[450px] relative top-24'>
            <div className='flex flex-row w-[400px] gap-7 h-[100px] bg-[rgba(153,74,0,0.3)] rounded-[20px]'>
              <img className='relative left-5' src="/images/Ellipse3.svg" alt="" />
              <div className='flex flex-col relative top-5 gap-2 left-3 items-start justify-start w-[290px] h-16'>
                <h1 className='text-[24px] font-[700] text-orange-600 leading-[100%]'>Island E-Tickets</h1>
                <h1 className='text-[14px] font-[600] leading-[100%] text-black'>www.islandetickets.com</h1>
              </div>
            </div>
            <div className='flex flex-row w-[400px] gap-6 h-[100px] bg-[rgba(0,0,0,0.06)] relative top-3 rounded-[20px]'>
              <img className='relative left-6 top-8 h-10 w-10' src="/images/user.svg" alt="" />
                <h1 className='text-[14px] font-[600] top-10 relative left-6 leading-[100%] text-black'>Username</h1>
            </div>
            <div className='flex flex-row w-[400px] gap-6 relative top-6 h-[100px] bg-[rgba(0,0,0,0.06)] rounded-[20px]'>
              <img className='relative left-6 top-8 w-10 h-10' src="/images/pswrd.svg" alt="" />
              <div className='flex flex-row relative gap-2 top-12 left-6 items-start justify-start w-[290px] h-16'>
                <h1 className='text-[14px] reative font-[600] leading-[100%] text-black'>Password</h1>
              <img className='relative left-48' src="/images/eye.svg" alt="" />
              </div>
            </div>
            <div className='w-[400px] h-8 relative top-8'>
              <h1 className='text-[16px] relative font-[600] left-32 text-orange-600'>Reset password</h1>
            </div>
          </div>
          <div className='w-[400px] items-center rounded-[32px] flex flex-row h-[55px] relative top-40 bg-blue-600'>
            <button className='text-[20px] w-[340px] h-[40px]'>
              Continue
              <img className='w-4 h-4 relative left-60 rotate-[43deg] bottom-6' src="/images/Arrow.png" alt="" />
            </button>
          </div>
    </div>
  )
}

export default Credential