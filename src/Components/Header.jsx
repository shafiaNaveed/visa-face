import React from 'react'

function Header() {
  return (
    <div className='w-[1440px] h-[1024px] '>
        <div className='w-[1440px] h-[144px] relative text-white -top-[18px] flex flex-col pt-16 pb-6 ga-[34px]'>
            <div className='flex relative left-10 flex-row w-[1280px] h-[56px] justify-between'>
                <div className=''>
                    <img className='w-[201px] h-9' src="src/assets/visaface-logo.svg" alt="" />
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
                    <button className='flex flex-row leading-[100%] rounded-[32px] pt-4 pr-6 pb-4 pl-6 gap-2 font-[700] text-[16px] tracking-[0%] bg-white text-black'>
                        Get started
                        <img className='w-4 h-4 gap-2' src="src/assets/arrow.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
        <div className='flex flex-row'>
            <div className='flex flex-col w-[750px] h-[700px] relative top-[82px] left-[100px] gap-[10px]'>
            <img className='rounded-[16px]' src="src/assets/scorch.svg" alt="" />
        </div>
        <div className='flex flex-col w-[610px] h-[430px] relative top-[220px] bg-[rgba(54,3,60,0.5)] right-14 rounded-2xl p-[56px] gap-8'>
            <div className='flex flex-col w-[530px] h-[270px] gap-6'>
                <div className='w-[530px] h-[30px]'>
                    <h2 className='font-[700] leading-[100%] tracking-[0%] text-[18px] text-white items-center'>VISAFACE</h2>
                </div>
                <div className='w-[530px] h-[150px]'>
                    <h1 className='font-[700] leading-[130%] tracking-[0%] text-[58px] items-center text-white'>Effortless Access. Every Time. </h1>
                </div>
                <div className='w[530px] h-7'>
                    <h2 className='font-[7500] leading-[100%] tracking-[0%] text-[18px] text-white items-center'>Experience a new, secure and seamless way to enter.</h2>
                </div>
            </div>
            <div className='flex flex-row w-[530px] h-[59px] gap-6'>
                <button className='flex flex-row bg-white w-[280px] gap-3 text-[18px] font-[700] tracking-[0%] items-center leading-[100%] h-[59px] rounded-[32px] pt-4 pr-6 pb-4 pl-6'>
                    Connect your Account
                    <img className='w-4 h-4' src="src/assets/arrow.svg" alt="" />
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header