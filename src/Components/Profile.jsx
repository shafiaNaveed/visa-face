import React from 'react'

function Profile() {
  return (
     <div className='w-[1440px] h-[3793px] bg-slate-200'>
        <div className='flex flex-row w-[150px] h-[80px] gap-6 relative left-[1200px] top-6'>
            <div className='w-[52px] h-[52px] rounded-[16px] bg-white relative top-6 left-2'>
                <img src="/images/bell.svg" alt="" />
            </div>
            <div className='w-[52px] h-[52px] rounded-[9px] bg-gray-400 relative top-6 left-2'>
                <img className='w-6 h-6 relative top-3 left-3' src="/images/gallery.png" alt="" />
            </div>
        </div>
       <div className='w-[1282px] h-[856px] rounded-[10px] bg-white relative top-[55px] left-[70px]'>
        <div className='w-[1282px] h-[100px]'></div>
        <div className='w-[1282px] h-[100px] relative top-6 flex flex-row'>
            <div className='w-[100px] h-[100px] rounded-[60px] bg-slate-300'>
                <img className='w-7 h-7 relative top-9 left-9' src="/images/gallery.png" alt="" />
            </div>
            <div className='flex flex-col w-[180px] h-[70px] relative top-5 left-4'>
                <h1 className='text-[20px] font-[500] leading-[100%] w-[132px] h-[35px]'>Alexa Rawles</h1>
                <h1 className='w-[180px] text-[16px] font-[400] leading-[100%] h-6'>alexarawles@gmail.com</h1>
            </div>
                <button className='bg-blue-600 w-[93px] h-[44px] text-white relative top-7 rounded-[8px] left-[880px]'>Edit</button>
        </div>
        <div className='w-[1282px] h-[500px] relative top-14 flex flex-row'>
            <div className='flex flex-col w-[641px] h-[500px] gap-3'>
                <div className='flex flex-col w-[600px] h-[90px] relative left-4 top-2 gap-3'>
                    <h1 className='w-[79px] font-[400] text-[18px] h-6'>FullName</h1>
                    <input className='bg-slate-100 w-[593px] rounded-[8px] h-[52px] relative' type="text" placeholder='Your First Name' />
                </div>
                <div className='flex flex-col w-[600px] h-[90px] relative left-4 top-2 gap-3'>
                    <h1 className='w-[79px] font-[400] text-[18px] h-6 font-mono'>Gender</h1>
                    <input className='bg-slate-100 w-[593px] rounded-[8px] h-[52px] relative' type="text" placeholder='Your First Name' />
                </div>
                <div className='flex flex-col w-[600px] h-[90px] relative left-4 top-2 gap-3'>
                    <h1 className='w-[79px] font-[400] text-[18px] font-mono h-6'>Language</h1>
                    <input className='bg-slate-100 w-[593px] rounded-[8px] h-[52px] relative' type="text" placeholder='Your First Name' />
                </div>
                <h1 className='w-[162px] font-[400] text-[18px] h-7 relative top-3 left-5'>My Email Address</h1>
                <div className='flex flex-row relative top-3'>
                    <div className='w-[40px] h-[40px] rounded-[60px] relative top-1 left-4 bg-slate-300'>
                <img className='w-5 h-5 relative top-[9px] left-[9px]' src="/images/msg.png" alt="" />
            </div>
            <div className='flex flex-col w-[180px] h-[70px] relative top-1 left-7'>
                <h1 className='text-[16px] font-[500] leading-[100%] w-[132px] h-[30px]'>alexarawles@gmail.com</h1>
                <h1 className='w-[180px] text-[14px] font-[400] leading-[100%] h-5'>1 month ago</h1>
            </div>
            </div>
            <button className='bg-blue-100 border-2 text-[14px] font-[400] border-blue-500 w-[160px] h-[44px] text-black relative left-4 top-1 rounded-[8px]'>+Add Email Address</button>
            </div>
            <div className='flex flex-col w-[641px] h-[500px] gap-3'>
                <div className='flex flex-col w-[600px] h-[90px] relative left-4 top-2 gap-3'>
                    <h1 className='w-[79px] font-[400] text-[18px] h-6'>Birthday</h1>
                    <input className='bg-slate-100 w-[593px] rounded-[8px] h-[52px] relative' type="text" placeholder='Your First Name' />
                </div>
                <div className='flex flex-col w-[600px] h-[90px] relative left-4 top-2 gap-3'>
                    <h1 className='w-[79px] font-[400] text-[18px] h-6'>Country</h1>
                    <input className='bg-slate-100 w-[593px] rounded-[8px] h-[52px] relative' type="text" placeholder='Your First Name' />
                </div>
                <div className='flex flex-col w-[600px] h-[90px] relative left-4 top-2 gap-3'>
                    <h1 className='w-[79px] font-[400] text-[18px] h-6'>Timezone</h1>
                    <input className='bg-slate-100 w-[593px] rounded-[8px] h-[52px] relative' type="text" placeholder='Your First Name' />
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Profile