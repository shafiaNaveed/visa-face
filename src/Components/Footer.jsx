import React from 'react'

function Footer() {
  return (
    <div className='w-[1440px] h-[496px] relative top-[218px]'>
        <img src="src/assets/banner.svg" alt="" />
        <div className='flex flex-col w-[1440px] text-white h-[391px] gap-32 items-center bg-[rgba(53,3,60,1)]'>
            <div className='flex flex-row w-[1280px] relative top-10 h-[163px] justify-between'>
                <div className='flex flex-col w-[210px] h-[99px] gap-5'>
                    <h1 className='w-[83px] h-7 relative top-3'>Follow us</h1>
                    <div className='flex flex-row w-[208px] h-10 gap-4'>
                        <img src="src/assets/facebook.svg" alt="" />
                        <img src="src/assets/twitter.svg" alt="" />
                        <img src="src/assets/instagram.svg" alt="" />
                        <img src="src/assets/youtube.svg" alt="" />
                    </div>
                </div>
                <div className='flex flex-row w-[506px] h-[163px] gap-9'>
                    <div className='flex flex-col w-[162px] h-[163px] gap-4'>
                        <h1 className='w-[105px] h-7 font-[700] text-[18px] leading-[100%] tracking-[0%]'>Quick Links</h1>
                        <ul className='w-[162px] h-[120px] gap-2 flex flex-col'>
                            <li>Explore by Category</li>
                            <li>Upcoming Event</li>
                            <li>Download App</li>
                            <li>News and Blog</li>
                        </ul>
            </div>
            <div className='flex flex-col w-[93px] h-[131px] gap-4'>
                        <h1 className='w-[93px] h-7 font-[700] text-[18px] leading-[100%] tracking-[0%]'>Company</h1>
                        <ul className='w-[93px] h-[88px] gap-2 flex flex-col'>
                            <li>About us</li>
                            <li>Career</li>
                            <li>Event</li>
                        </ul>
            </div>
            <div className='flex flex-col w-[91px] h-[99px] gap-4'>
                        <h1 className='w-[75px] h-7 font-[700] text-[18px] leading-[100%] tracking-[0%]'>Support</h1>
                        <ul className='w-[91px] h-[56px] gap-2 flex flex-col'>
                            <li>FAQ</li>
                            <li>Call center</li>
                        </ul>
            </div>
            </div>
            </div>
            <div className='flex flex-row w-[1280px] h-[56px] items-center gap-40 justify-between'>
                <img className='w-[201px] h-9' src="src/assets/visaface-logo.svg" alt="" />
                <h1 className='w-[307px] h-7 font-[500] text-[18px] leading-[100%] tracking-[0%]'>VisaFace 2025. All rights reserved.</h1>
            </div>
        </div>
    </div>

  )
}

export default Footer