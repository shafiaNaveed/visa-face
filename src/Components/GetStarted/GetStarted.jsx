import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router'
import Get from './Get'
import Platform from './Platform'
import Credential from './Credential'
import Connected from './Connected'

function GetStarted() {
    const [get, setGet] = useState("get-started");
    const handleState = (newStatus) =>{
      console.log("img clicked" , newStatus);
      setGet(newStatus);
    };
    const renderPage = ()=> {
     switch (get) {
        case "get-started":
          return <h1><Get/></h1>;
          case "platform":
          return <h1><Platform/></h1>;
          case "credentials":
          return <h1><Credential/></h1>;
          case "connected":
          return <h1><Connected/></h1>;
        default:
          return <h1><Get/></h1>
      }
    };
  return (
    <div className='w-[1440px] h-[891px] flex flex-col relative text-3xl text-white bg-gradient-to-r from-fuchsia-950 via-slate-500 to-fuchsia-900'>
      <div className='w-[1440px] h-[125px] flex flex-row gap-72 bg-gradient-to-r from-fuchsia-950 via-slate-600 to-fuchsia-950 rounded-tr-[30px] rounded-tl-[30px]'>
        <div className='w-[180px] h-[55px] relative top-8 left-6'>
          <button className='w-[150px] h-10 text-[18px] font-[700] flex flex-row gap-10 relative top-2 left-3'>
            <img className='w-3 h-3 -rotate-[136deg] relative top-3 left-5' src="/images/Arrow.png" alt="Arrow logo" />
            Back
          </button>
        </div>
        <div className='w-[520px] h-[55px] flex flex-row relative top-9'>
          <div>
            <img onClick={()=>handleState("get-started")} className='cursor-pointer' src="/images/check-circle2.svg" alt="" />
            <h1 className='w-[66px] h-7 font-[700] text-[12px]'>Get Started</h1>
          </div>
          <img className='w-28 relative bottom-4 right-8' src="/images/Line.svg" alt="" />
          <div className='relative top-1 right-7'>
            <img onClick={()=>handleState("platform")} className='cursor-pointer' src="/images/check-circle 1.svg" alt="" />
            <h1 className='w-[66px] h-7 font-[700] text-[12px]'>Platform</h1>
          </div>
          <img className='w-28 relative bottom-4 right-16' src="/images/Line.svg" alt="" />
          <div className='relative top-1 right-16'>
            <img onClick={()=>handleState("credentials")} className='cursor-pointer' src="/images/check-circle 1.svg" alt="" />
            <h1 className='w-[66px] h-7 font-[700] text-[12px]'>Credentials</h1>
          </div>
          <img className='w-28 relative bottom-4 right-24' src="/images/Line.svg" alt="" />
          <div className='relative top-1 right-24'>
            <img onClick={()=>handleState("connected")} className='cursor-pointer' src="/images/check-circle 1.svg" alt="" />
            <h1 className='w-[66px] h-7 font-[700] text-[12px]'>Connected</h1>
          </div>
        </div>
        <button className='w-[150px] h-10 text-[18px] font-[700] relative top-9'>Cancel</button>
      </div>
      {/* {
        ! get ? (
          <p>{<Get/>}</p>
        ):(
          <p>{<Platform/>}</p>
        )
      } */}
       <div>{renderPage()}</div>
    </div>
  )
}

export default GetStarted