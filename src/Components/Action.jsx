import React from 'react'

function Action() {
  return (
    <div className='flex flex-row w-[1440px] h-[567px] relative top-[220px] bg-orange-500'>
        <div className='w-[664px] h-[140px] rounded-tr-2xl rounded-br-2xl bg-orange-600 relative top-[180px]'></div>
        <img className='relative right-[445px] w-[440px] h-[516px] top-12' src="src/assets/screen.svg" alt="" />
        <div className='flex flex-col w-[624px] h-[450px] rounded-tl-2xl justify-center rounded-tr-2xl relative top-[120px] right-[220px] gap-[10px] bg-[rgba(80,80,80,0.5)]'>
            <div className='flex flex-col w-[438px] relative left-6 text-white h-[354px] gap-10'>
                <div className='flex flex-col w-[438px] h-[228px] gap-6'>
                    <h1 className='w-[438px] h-[120px] font-[700] text-[40px] leading-[100%] tracking-[0%]'>Start Your Journey – Get Your Tickets Now!</h1>
                    <h1 className='w-[438px] h-[72px] font-[500] text-[16px] leading-[150%] tracking-[0%]'>Adventure awaits! Click to book your tickets instantly and embark on a journey of excitement. Reserve your spot now for an event that promises thrills, laughter, and incredible memories.</h1>
                </div>
                <div className='flex flex-row w-[438px] h-[86px] gap-10'>
                    <div className='flex flex-col w-[214px] h-[86px] justify-center items-center bg-black'>
                        <div className='flex flex-col w-[120px] h-[54px]'>
                            <h1 className='font-[500] text-[16px] leading-[150%] tracking-[0%]'>Download on</h1>
                            <h1 className='font-[700] text-[20px] leading-[150%] tracking-[0%]'>Apple Store</h1>
                                <img className='w-9 h-9 relative bottom-10 left-[116px]' src="src/assets/icon.svg" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col w-[214px] justify-center items-center h-86px] bg-black'>
                        <div className='flex flex-col w-[120px] h-[54px]'>
                            <h1 className='font-[500] text-[16px] leading-[150%] tracking-[0%]'>Download on</h1>
                            <h1 className='font-[700] text-[20px] leading-[150%] tracking-[0%]'>Google Play</h1>
                                <img className='w-9 h-9 relative bottom-10 left-[116px]' src="src/assets/icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Action