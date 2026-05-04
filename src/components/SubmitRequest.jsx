import React from 'react'
import style from '../styles/request.module.css'
import mapImage from '../../public/image/map.svg'
import Image from 'next/image'

const SubmitRequest = () => {
  return (
    <div className={style.request_section}>
        <div className={style.request_container}>
            <div className={style.mapContainer}>
                <Image
                src={mapImage}
                alt='map image'
                className={style.mapImage}
                />
            </div>
            <div className={style.submitRequest}>
                    <h1 className={style.form_Heading}>Submit your request</h1>
                <form className={style.form}>
                    <div className={style.name}>
                        <input type="text"  placeholder='Name' />
                        <input type="text"  placeholder='Email' />
                        <input type="text"  placeholder='Contact No' />
                    </div>
                    <textarea className={style.textarea} name="message" id="message" placeholder='Your Message'></textarea>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SubmitRequest