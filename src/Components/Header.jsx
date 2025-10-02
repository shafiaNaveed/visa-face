import React,{useState} from 'react'
import Main from './Main'
import GetStarted from './GetStarted/GetStarted'

function Header() {
  
  return (
    <div className='w-[1440px] h-[1024px] bg-gradient-to-r from-fuchsia-950 via-slate-500 to-fuchsia-900'>
        <div className='w-[1440px] h-[1024px]'>
        <div className='flex flex-row'>
            <div className='flex flex-col bg-[rgba(285,285,285,0.3)] w-[750px] h-[700px] relative top-[82px] left-[100px] gap-[10px]'>
            <img className='rounded-[16px]' src="images/scorch.svg" alt="scorch logo" />
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
                    <img className='w-4 h-4' src="images/arrow.svg" alt="arrow logo" />
                </button>
            </div>
        </div>
        </div>
        <div className='relative top-40'>
             <Main/>
        </div>
    </div>
    </div>
  )
}

export default Header