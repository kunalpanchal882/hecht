import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import NumberSection from '@/components/NumberSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <NumberSection/>
      <About/>
    </div>
  )
}

export default page