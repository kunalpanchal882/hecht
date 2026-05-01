import React from 'react'
import Image from 'next/image'
import style from '../styles/number.module.css'

const NumberSection = () => {
  return (
    <section className={style.number_section}>
      <div className={style.number_section_container}>
        <Image 
          src="/image/Analytics3.png" 
          alt="analytics"
          width={1920}
          height={275}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={style.analysis_number}>
        <div className={style.analysis_number_container}>

          <div className={style.analysis_single_number}>
            <h4>4.5k+</h4>
            <p>Happy Patients</p>
          </div>

          <div className={style.number_container_line}></div>


          <div className={style.analysis_single_number}>
            <h4>99%</h4>
            <p>Customer Satisfaction</p>
          </div>

          <div className={style.number_container_line}></div>

          <div className={style.analysis_single_number}>
            <h4>75k+</h4>
            <p>Store & Clinic</p>
          </div>

          <div className={style.number_container_line}></div>

          <div className={style.analysis_single_number}>
            <h4>200+</h4>
            <p>Online Appointments</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default NumberSection