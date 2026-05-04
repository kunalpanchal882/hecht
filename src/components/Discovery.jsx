import React from 'react'
import style from '../styles/discovery.module.css'
import discoveryBackground from '../../public/image/discovery_image.jpg'
import Image from 'next/image'

const Discovery = () => {
  return (
    <div className={style.Discovery_section}>
        <div className={style.discovery_container}>
            <div className={style.Discovery_background_image}>
                <Image src={discoveryBackground}  alt="discovery background image"  className={style.bg_image}/>
            </div>

            <div className={style.Discovery_overlay_content}>
            <div className={style.Discovery_overlay_heading}>
                 <h2 className={`second_heading ${style.Discovery_heading}`}>
             Discover Our Amazing{" "} <br />
            </h2>
                <span className={`contact_lence ${style.Discovery_contact_lense}`}>Contact Lenses</span>{" "}
          </div>
            <p className={`pera ${style.discovery_para}`}>Experience the perfect fit and clarity with our customized contact lenses.</p>
          <button className="explore_btn">
                      <div className="explore_btn_wrapper">
                        <span className="explore_btn_text top">Explore Our Products</span>
                        <span className="explore_btn_text bottom">Let’s Go</span>
                      </div>
          
                      <Image
                        src="/assets/icons/arrow.png"
                        width={21}
                        height={14}
                        alt=""
                      />
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Discovery