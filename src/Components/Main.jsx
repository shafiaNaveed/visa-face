import React from 'react'
import Hero from './Hero'
import Section from './Section'
import Action from './Action'
import Footer from './Footer'


function Main() {
  return (
    <div className='bg-gradient-to-r from-fuchsia-950 via-slate-500 to-fuchsia-900'>
        <Hero />
        <Section/>
        <Action/>
        <Footer/>
    </div>
  )
}

export default Main