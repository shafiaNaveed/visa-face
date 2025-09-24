import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Section from './Components/Section'
import Action from './Components/Action'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='w-[1440px] h-[3960px] bg-gradient-to-r from-fuchsia-950 via-slate-500 to-fuchsia-900'>
      <Header/>
      <Hero/>
      <Section/>
      <Action/>
      <Footer/>
    </div>
  )
}

export default App