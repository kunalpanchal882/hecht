import About from '@/components/About'
import Customized from '@/components/Customized'
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
      <Customized/>
    </div>
  )
}

export default page