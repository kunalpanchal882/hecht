import About from '@/components/About'
import Accuracy from '@/components/Accuracy'
import Articals from '@/components/Articals'
import Customer from '@/components/Customer'
import Customized from '@/components/Customized'
import Discovery from '@/components/Discovery'
import Enhance from '@/components/Enhance'
import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import NumberSection from '@/components/NumberSection'
import Precision from '@/components/Precision'
import Social from '@/components/Social'
import SubmitRequest from '@/components/SubmitRequest'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <NumberSection/>
      <About/>
      <Customized/>
      <Precision/>
      <Enhance/>
      <Accuracy/>
      <Discovery/>
      <Social/>
      <Customer/>
      <Articals/>
      <Faq/>
      <SubmitRequest/>
    </div>
  )
}

export default page