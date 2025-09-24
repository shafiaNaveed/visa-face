import React from 'react'

function Section() {
  return (
    <div className='flex flex-col w-[1280px] h-[1118px] relative top-36 left-20 gap-20'>
        <div className='flex flex-row w-[1280px] h-[101px] gap-12'>
            <div className='flex flex-col w-[883px] h-[101px] gap-2'>
                <div className='w-[883px] h-7'>
                    <h1 className='font-[700] text-[18px] text-blue-500 leading-[100%] tracking-[0%] items-center'>UPCOMING EVENT</h1>
                </div>
                <div className='w-[883px] h-[66px]'>
                    <h1 className='font-[700] text-[44px] text-white leading-[100%] tracking-[0%] items-center'>Big Events on the Horizon</h1>
                </div>
            </div>
            <div className='flex flex-row w-[349px] h-[58px] relative top-4 gap-6'>
                <div className='flex flex-row w-[179px] h-[59px] rounded-[32px] p-4 gap-2 bg-[rgba(195,195,195,0.5)] blur-[20]'>
                    <button className='flex flex-row h-7 text-[18px] gap-3 text-white w-[130px]'>All Category
                        <img className='w-4 h-2 relative top-3' src="src/assets/drop.svg" alt="" />
                    </button>
                </div>
                <div className='flex flex-row w-[150px] h-[59px] rounded-[32px] p-4 gap-2 bg-[rgba(195,195,195,0.5)] blur-[20]'>
                    <button className='flex flex-row h-7 text-[18px] gap-3 text-white w-[130px]'>All Dates
                        <img className='w-4 h-2 relative top-3' src="src/assets/drop.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 w-[1279px] gap-5 h-[878px]'>
            <div className='flex flex-row w-[405px] h-[423px] rounded-[16px] gap-[10px] bg-[rgba(285,285,285,0.3)] bg-[url(src/assets/5.jpg)]'>
            <div className='flex flex-row w-[144px] h-[43px] rounded-[32px] pt-2 pr-6 pb-2 pl-6 shadow-sm shadow-slate-400 relative top-2 left-1 bg-[rgba(185,185,185,0.3)]'>
                <h1 className='w-[96px] h-[27px] font-[700] text-[18px] leading-[100%] tracking-[0%] text-white justify-center items-start'>$50 - $150</h1>
            </div>
            <div className='flex flex-col relative right-[154px] w-[405px] h-[199px] bg-[rgba(185,185,185,0.3)] top-56 p-6 rounded-bl-2xl rounded-br-2xl gap-4'>
                <div className='flex flex-row relative right-3 w-[375px] h-[79px] gap-4'>
                    <div className='flex flex-row w-[79px] h-[79px] bg-white rounded-lg p-2'>
                        <div className='flex flex-col w-[262px] h-[63px] text-center font-[700] items-center'>
                            <h1 className='text-[18px]'>Feb</h1>
                            <h1 className='text-[24px]'>10</h1>
                        </div>
                    </div>
                    <div className='flex flex-col w-[180px] h-[68px] gap-2 text-white'>
                        <h1 className='w-[180px] h-9 font-[700] text-[18px] leading-[100%] tracking-[0%] items-center'>NYC Jazz Festival</h1>
                        <h1 className='w-[180px] flex flex-row gap-2 h-9 font-[500] text-[16px] leading-[150%] tracking-[0%] items-center'>
                            <img className='w-[13px] h-4' src="src/assets/loc.svg" alt="" />
                             Lincoln Center
                            </h1>
                    </div>
                </div>
                <div className='flex flex-row w-[375px] h-[56px] rounded-[32px] pt-4 pr-6 pb-4 pl-6 bg-white relative right-3'>
                    <button className='w-[81px] h-[24px] text-[16px] relative left-32 font-[700] leading-[100%] tracking-[0%]'>Book Now</button>
                </div>
            </div>
            </div>
            <div className='flex flex-row w-[405px] h-[423px] rounded-[16px] gap-[10px] bg-[rgba(285,285,285,0.3)] bg-[url(src/assets/1.webp)]'>
            <div className='flex flex-row w-[144px] h-[43px] rounded-[32px] pt-2 pr-6 pb-2 pl-6 shadow-sm shadow-slate-400 relative top-2 left-1 bg-[rgba(185,185,185,0.3)]'>
                <h1 className='w-[96px] h-[27px] font-[700] text-[18px] leading-[100%] tracking-[0%] text-white justify-center items-start'>$50 - $150</h1>
            </div>
            <div className='flex flex-col relative right-[154px] w-[405px] h-[199px] bg-[rgba(185,185,185,0.3)] top-56 p-6 rounded-bl-2xl rounded-br-2xl gap-4'>
                <div className='flex flex-row w-[375px] h-[79px] gap-4'>
                    <div className='flex flex-row w-[79px] h-[79px] bg-white rounded-lg p-2'>
                        <div className='flex flex-col w-[262px] h-[63px] text-center font-[700] items-center'>
                            <h1 className='text-[18px]'>Mar</h1>
                            <h1 className='text-[24px]'>12</h1>
                        </div>
                    </div>
                    <div className='flex flex-col w-[180px] h-[68px] gap-2 text-white'>
                        <h1 className='w-[180px] h-9 font-[700] text-[18px] leading-[100%] tracking-[0%] items-center'>New York Tech Expo</h1>
                        <h1 className='w-[180px] flex flex-row gap-2 h-9 font-[500] text-[16px] leading-[150%] tracking-[0%] items-center'>
                            <img className='w-[13px] h-4' src="src/assets/loc.svg" alt="" />
                             Javits Center
                            </h1>
                    </div>
                </div>
                <div className='flex flex-row w-[375px] h-[56px] rounded-[32px] pt-4 pr-6 pb-4 pl-6 bg-white relative right-3'>
                    <button className='w-[81px] h-[24px] text-[16px] relative left-32 font-[700] leading-[100%] tracking-[0%]'>Book Now</button>
                </div>
            </div>
            </div>
            <div className='flex flex-row w-[405px] h-[423px] rounded-[16px] gap-[10px] bg-[url(src/assets/3.jpg)]'>
            <div className='flex flex-row w-[144px] h-[43px] rounded-[32px] pt-2 pr-6 pb-2 pl-6 shadow-sm shadow-slate-400 relative top-2 left-1 bg-[rgba(185,185,185,0.3)]'>
                <h1 className='w-[96px] h-[27px] font-[700] text-[18px] leading-[100%] tracking-[0%] text-white justify-center items-start'>$50 - $150</h1>
            </div>
            <div className='flex flex-col relative right-[154px] w-[405px] h-[199px] bg-[rgba(185,185,185,0.3)] top-56 p-6 rounded-bl-2xl rounded-br-2xl gap-4'>
                <div className='flex flex-row w-[375px] h-[79px] gap-4'>
                    <div className='flex flex-row w-[79px] h-[79px] bg-white rounded-lg p-2'>
                        <div className='flex flex-col w-[262px] h-[63px] text-center font-[700] items-center'>
                            <h1 className='text-[18px]'>Mar</h1>
                            <h1 className='text-[24px]'>20</h1>
                        </div>
                    </div>
                    <div className='flex flex-col w-[180px] h-[68px] gap-2 text-white'>
                        <h1 className='w-[180px] h-9 font-[700] text-[18px] leading-[100%] tracking-[0%] items-center'>NYC Film Festival</h1>
                        <h1 className='w-[180px] flex flex-row gap-2 h-9 font-[500] text-[16px] leading-[150%] tracking-[0%] items-center'>
                            <img className='w-[13px] h-4' src="src/assets/loc.svg" alt="" />
                             Tribeca Film Center
                            </h1>
                    </div>
                </div>
                <div className='flex flex-row w-[375px] h-[56px] rounded-[32px] pt-4 pr-6 pb-4 pl-6 bg-white relative right-3'>
                    <button className='w-[81px] h-[24px] relative left-32 text-[16px] font-[700] leading-[100%] tracking-[0%]'>Book Now</button>
                </div>
            </div>
            </div>
            <div className='flex flex-row w-[405px] h-[423px] rounded-[16px] bg-[rgba(285,285,285,0.3)] gap-[10px] bg-[url(src/assets/2.jpg)]'>
            <div className='flex flex-row w-[144px] h-[43px] rounded-[32px] pt-2 pr-6 pb-2 pl-6 shadow-sm shadow-slate-400 relative top-2 left-1 bg-[rgba(185,185,185,0.3)]'>
                <h1 className='w-[96px] h-[27px] font-[700] text-[18px] leading-[100%] tracking-[0%] text-white justify-center items-start'>$50 - $150</h1>
            </div>
            <div className='flex flex-col relative right-[154px] w-[405px] h-[199px]  bg-[rgba(185,185,185,0.3)] top-56 p-6 rounded-bl-2xl rounded-br-2xl gap-4'>
                <div className='flex flex-row w-[275px] h-[79px] gap-4'>
                    <div className='flex flex-row w-[79px] h-[79px] bg-white rounded-lg p-2'>
                        <div className='flex flex-col w-[63px] h-[63px] text-center font-[700] items-center'>
                            <h1 className='text-[18px]'>Apr</h1>
                            <h1 className='text-[24px]'>05</h1>
                        </div>
                    </div>
                    <div className='flex flex-col w-[180px] h-[68px] gap-2 text-white'>
                        <h1 className='w-[180px] h-9 font-[700] text-[18px] leading-[100%] tracking-[0%] items-center'>Brooklyn Street Art..</h1>
                        <h1 className='w-[180px] flex flex-row gap-2 h-9 font-[500] text-[16px] leading-[150%] tracking-[0%] items-center'>
                            <img className='w-[13px] h-4' src="src/assets/loc.svg" alt="" />
                             Williamsburg
                            </h1>
                    </div>
                </div>
                <div className='flex flex-row w-[375px] h-[56px] rounded-[32px] pt-4 pr-6 pb-4 pl-6 bg-white relative right-3'>
                    <button className='w-[81px] h-[24px] text-[16px] relative left-32 font-[700] leading-[100%] tracking-[0%]'>Book Now</button>
                </div>
            </div>
            </div>
            <div className='flex flex-row w-[405px] h-[423px] rounded-[16px] gap-[10px] bg-[rgba(285,285,285,0.3)] bg-[url(src/assets/9.webp)]'>
            <div className='flex flex-row w-[144px] h-[43px] rounded-[32px] pt-2 pr-6 pb-2 pl-6 shadow-sm shadow-slate-400 relative top-2 left-1 bg-[rgba(185,185,185,0.3)]'>
                <h1 className='w-[96px] h-[27px] font-[700] text-[18px] leading-[100%] tracking-[0%] text-white justify-center items-start'>$50 - $150</h1>
            </div>
            <div className='flex flex-col relative right-[154px] w-[405px] h-[199px] bg-[rgba(185,185,185,0.3)] top-56 p-6 rounded-bl-2xl rounded-br-2xl gap-4'>
                <div className='flex flex-row w-[375px] h-[79px] gap-4'>
                    <div className='flex flex-row w-[79px] h-[79px] bg-white rounded-lg p-2'>
                        <div className='flex flex-col w-[262px] h-[63px] text-center font-[700] items-center'>
                            <h1 className='text-[18px]'>Apr</h1>
                            <h1 className='text-[24px]'>18</h1>
                        </div>
                    </div>
                    <div className='flex flex-col w-[180px] h-[68px] gap-2 text-white'>
                        <h1 className='w-[180px] h-9 font-[700] text-[18px] leading-[100%] tracking-[0%] items-center'>Queens Internation..</h1>
                        <h1 className='w-[240px] flex flex-row gap-2 h-9 font-[500] text-[16px] leading-[150%] tracking-[0%] items-center'>
                            <img className='w-[13px] h-4' src="src/assets/loc.svg" alt="" />
                             Flushing Meadows Corona P..
                            </h1>
                    </div>
                </div>
                <div className='flex flex-row w-[375px] h-[56px] rounded-[32px] pt-4 pr-6 pb-4 pl-6 bg-white relative right-3'>
                    <button className='w-[81px] h-[24px] text-[16px] relative left-32 font-[700] leading-[100%] tracking-[0%]'>Book Now</button>
                </div>
            </div>
            </div>
            <div className='flex flex-row w-[405px] h-[423px] rounded-[16px] gap-[10px] bg-[rgba(285,285,285,0.3)] bg-[url(src/assets/8.jpg)]'>
            <div className='flex flex-row w-[144px] h-[43px] rounded-[32px] pt-2 pr-6 pb-2 pl-6 shadow-sm shadow-slate-400 relative top-2 left-1 bg-[rgba(185,185,185,0.3)]'>
                <h1 className='w-[96px] h-[27px] font-[700] text-[18px] leading-[100%] tracking-[0%] text-white justify-center items-start'>$50 - $150</h1>
            </div>
            <div className='flex flex-col relative right-[154px] w-[405px] h-[199px] bg-[rgba(185,185,185,0.3)] top-56 p-6 rounded-bl-2xl rounded-br-2xl gap-4'>
                <div className='flex flex-row w-[375px] h-[79px] gap-4'>
                    <div className='flex flex-row w-[79px] h-[79px] bg-white rounded-lg p-2'>
                        <div className='flex flex-col w-[262px] h-[63px] text-center font-[700] items-center'>
                            <h1 className='text-[18px]'>May</h1>
                            <h1 className='text-[24px]'>16</h1>
                        </div>
                    </div>
                    <div className='flex flex-col w-[180px] h-[68px] gap-2 text-white'>
                        <h1 className='w-[190px] h-9 font-[700] text-[18px] leading-[100%] tracking-[0%] items-center'>NY Fashion Week Ru..</h1>
                        <h1 className='w-[180px] flex flex-row gap-2 h-9 font-[500] text-[16px] leading-[150%] tracking-[0%] items-center'>
                            <img className='w-[13px] h-4' src="src/assets/loc.svg" alt="" />
                             Spring Studios
                            </h1>
                    </div>
                </div>
                <div className='flex flex-row w-[375px] h-[56px] rounded-[32px] pt-4 pr-6 pb-4 pl-6 bg-white relative right-3'>
                    <button className='w-[81px] h-[24px] text-[16px] relative left-32 font-[700] leading-[100%] tracking-[0%]'>Book Now</button>
                </div>
            </div>
            </div>
        </div>
        <div className='flex flex-row relative left-[550px] bottom-10 w-[188px] h-[59px] rounded-[32px] pt-4 pr-6 pb-4 pl-6 gap-2 bg-blue-600 text-white'>
            <button className='w-[110px] flex flex-row h-7 font-[700] text-[16px] leading-[100%] tracking-[0%] relative gap-3 left-2'>
                Laod More
                <img className='w-[15px] h-[18px]' src="src/assets/Arrow.png" alt="" />
            </button>
        </div>
    </div>
  )
}

export default Section