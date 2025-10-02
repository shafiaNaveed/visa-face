import React from 'react'

function Navbar({setPage}) {
  return (
    <div className='w-[1440px] bg-gradient-to-r from-fuchsia-950 via-slate-500 to-fuchsia-900'>
         <div className='w-[1440px] h-[104px] relative text-white -top-[18px] flex flex-col pt-16 pb-6 ga-[34px]'>
                    <div className='flex relative left-10 flex-row w-[1280px] h-[56px] justify-between'>
                        <div className=''>
                            <img className='w-[201px] h-9' src='/images/visaface-logo.svg' alt="VisaFace Logo"/>
                        </div>
                        <div>
                        <ul className='flex flex-row w-[377px] h-[31px] gap-10 cursor-pointer'>
                            <li className='w-[55px] h-7 font-[700] text-[18px] tracking-[0%] leading-[150%] justify-center items-center'>Home</li>
                            <li className='w-[55px] h-7 font-[700] text-[18px] tracking-[0%] leading-[150%] justify-center items-center'>Profile</li>
                            <li className='w-[107px] h-7 font-[600] text-[18px] tracking-[0%] leading-[150%] justify-center items-center'>Connection</li>
                            <li className='w-[37px] h-7 font-[700] text-[18px] tracking-[0%] leading-[150%] justify-center items-center'>FAQ</li>
                        </ul>
                        </div>
                        <div className='w-[166px] h-[56px]'>
                            <button onClick={()=> setPage("getStarted")} className='flex flex-row leading-[100%] rounded-[32px] pt-4 pr-6 pb-4 pl-6 gap-2 font-[700] text-[16px] tracking-[0%] bg-white text-black'>
                                Get started
                                <img className='w-4 h-4 gap-2' src="/images/arrow.svg" alt="arrow logo" />
                            </button>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Navbar