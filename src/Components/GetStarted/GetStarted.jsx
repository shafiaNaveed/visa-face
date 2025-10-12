import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Get from './Get'
import Platform from './Platform'
import Credential from './Credential'
import Connected from './Connected'
import Header from '../Header'


function GetStarted({setPage}) {
  const handleCancel = () => {
    setPage("header");
};
  const steps = ["get-started", "platform", "credentials", "connected"];
  const [stepIndex, setStepIndex] = useState(0);

  const navigate = useNavigate();

  const handleState = (newStep) => {
  const index = steps.indexOf(newStep);
  if (index !== -1) {
    setStepIndex(index);
  }
};

const goBack = () => {
  if (stepIndex > 0) {
    setStepIndex(prev => prev - 1);
  }
};

const renderPage = () => {
  const currentStep = steps[stepIndex];
  switch (currentStep) {
    case "get-started":
      return <Get />;
    case "platform":
      return <Platform />;
    case "credentials":
      return <Credential />;
    case "connected":
      return <Connected />;
    default:
      return <Get />;
  }
};

  return (
    <div className='w-[1440px] h-[891px] flex flex-col relative text-3xl text-white bg-gradient-to-r from-fuchsia-950 via-slate-500 to-fuchsia-900'>
      <div className='w-[1440px] h-[825px] flex flex-row gap-72 bg-gradient-to-r from-fuchsia-950 via-slate-600 to-fuchsia-900 rounded-tr-[30px] rounded-tl-[30px]'>
        <div className='w-[180px] h-[95px] relative top-8 left-6'>
          <button onClick={goBack} className='w-[150px] h-10 rounded-[32px] text-[18px] font-[700] flex flex-row gap-10 relative top-2 left-3'>
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
        <button onClick={handleCancel} className='w-[150px] h-10 text-[18px] font-[700] relative top-9'>Cancel</button>
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