import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col w-[1280px] h-[755px] relative top-16 left-20 gap-10'>
      <div className='flex flex-row w-[1280px] h-[101px] gap-12'>
        <div className='flex flex-col w-[1076px] h-[101px] gap-2'>
          <div className='w-[1076px] h-7'>
            <h1 className='font-[700] text-[18px] leading-[100%] tracking-[0%] justify-center text-blue-500'>EXPLORE BY CATEGORY</h1>
          </div>
          <div className='w-[1076px] h-16'>
            <h1 className='font-[700] text-[44px] leading-[100%] tracking-[0%] justify-center text-white'>Find Your Next  VisaFace Event</h1>
          </div>
        </div>
        <div className='flex flex-row w-[156px] h-[59px] relative top-4'>
          <button className='flex flex-row pt-4 pr-6 pb-4 pl-6 bg-blue-500 rounded-[32px] text-[18px] text-white gap-3'>
            See More
            <img className='w-4 h-4 relative top-1' src="src/assets/Arrow.png" alt="" />
          </button>
        </div>
      </div>
      <div className='flex flex-row w-[1280px] h-[614px] gap-8'>
        <div className='flex flex-row w-[515px] h-[614px] gap-[10px] rounded-br-2xl rounded-bl-2xl bg-[url(src/assets/nyc.jpg)] bg-cover bg-center'>
          <div className='flex flex-col w-[515px] h-[140px] p-6 gap-2 rounded-xl bg-[rgba(102,102,102,0.3)] relative top-[475px]'>
            <div className='w-[467px] h-12'>
              <h1 className='text-[32px] font-[700] leading-[100%] tracking-[0%] text-white justify-center'>Duck Work (NYC)</h1>
            </div>
            <div className='w-[467px] h-12'>
              <h1 className='text-[24px] font-[500] leading-[100%] tracking-[0%] text-white justify-center'>1K+ Events</h1>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 w-[733px] h-[614px] gap-8 overflow-x-clip'>
          <div className='flex flex-col w-[351px] h-[291px] gap-[10px] rounded-xl bg-[url(src/assets/cul.jpg)] bg-cover bg-center'>
          <div className='w-[351px] h-[82px] gap-4 relative top-[209px] rounded-br-2xl rounded-bl-2xl bg-[rgba(102,102,102,0.3)]'>
            <div className='w-[303px] h-9'>
                <h1 className='text-[28px] font-[700] leading-[100%] tracking-[0%] text-white justify-center'>Arts and Culture</h1>
            </div>
            <div className='w-[303px] h-7'>
               <h1 className='text-[22px] font-[500] leading-[100%] tracking-[0%] text-white justify-center'>1K+ Events</h1>
            </div>
          </div>
          </div>
          <div className='flex flex-col w-[350px] h-[291px] gap-[10px] rounded-xl bg-[url(src/assets/food.jpg)] bg-cover bg-center'>
          <div className='w-[350px] h-[88px] gap-2 relative top-[205px] rounded-br-2xl rounded-bl-2xl bg-[rgba(102,102,102,0.3)]'>
            <div className='w-[350px] h-[42px]'>
            <h1 className='text-[25px] font-[700] leading-[100%] tracking-[0%] text-white justify-center'>Food and Beverage Festivals</h1>
          </div>
          <div className='w-[302px] h-7'>
            <h1 className='text-[22px] font-[500] leading-[100%] tracking-[0%] text-white justify-center'>1K+ Events</h1>
          </div>
          </div>
          </div>
          <div className='flex flex-col w-[351px] h-[291px] rounded-2xl bg-[url(src/assets/train.jpg)] bg-cover bg-center'>
          <div className='w-[350px] h-[90px] gap-2 relative top-[200px] rounded-br-2xl rounded-bl-2xl bg-[rgba(102,102,102,0.3)]'>
            <div className='w-[302px] h-9'>
            <h1 className='text-[26px] font-[700] leading-[100%] tracking-[0%] text-white justify-center'>Education and Training</h1>
          </div>
          <div className='w-[302px] h-7'>
            <h1 className='text-[22px] font-[500] leading-[100%] tracking-[0%] text-white justify-center'>1K+ Events</h1>
          </div>
          </div>
          </div>
          <div className='flex flex-col w-[351px] h-[291px] rounded-2xl bg-[url(src/assets/family.jpg)] bg-cover bg-center'>
          <div className='w-[350px] h-[90px] gap-2 relative top-[200px] rounded-br-2xl rounded-bl-2xl bg-[rgba(102,102,102,0.3)]'>
            <div className='w-[302px] h-9'>
            <h1 className='text-[28px] font-[700] leading-[100%] tracking-[0%] text-white justify-center'>Family Entertainment</h1>
          </div>
          <div className='w-[302px] h-7'>
            <h1 className='text-[22px] font-[500] leading-[100%] tracking-[0%] text-white justify-center'>1K+ Events</h1>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero