import React from 'react'
import style from '../styles/social.module.css'
import socialImage1 from '../../public/image/social_image_1.svg'
import socialImage2 from '../../public/image/social_image_2.svg'
import socialImage3 from '../../public/image/social_image_3.svg'
import socialImage4 from '../../public/image/social_image_4.svg'
import socialImage5 from '../../public/image/social_image_5.svg'
import socialImage6 from '../../public/image/social_image_6.svg'
import Image from 'next/image'

const Social = () => {
  return (
    <div className={style.Social_section}>
        <div className={style.Social_container}>
            <section className={style.Social_heading_container}>
                <h4 className={`second_subheadig ${style.subheading}`}>We’re Social</h4>
                <h2 className={`second_heading`}>instagram feed</h2>
            </section>

            <section className={style.Social_image_container}>
                <div className={`${style.imgaeCard} ${style.big}`}>
                    <Image src={socialImage1} alt='socail image 1' className={`${style.images} ${style.image}`}/>
                </div>
                <div className={`${style.imgaeCard} ${style.small}`}>
                    <Image src={socialImage2} alt='socail image 1' className={`${style.images} ${style.image}`}/>
                </div>
                <div className={`${style.imgaeCard} ${style.medium}`}>
                    <Image src={socialImage3} alt='socail image 1' className={`${style.images} ${style.image}`}/>
                </div>
                <div className={`${style.imgaeCard} ${style.small}`}>
                    <Image src={socialImage4} alt='socail image 1' className={`${style.images} ${style.image}`}/>
                </div>
                <div className={`${style.imgaeCard} ${style.wide}`}>
                    <Image src={socialImage5} alt='socail image 1' className={`${style.images} ${style.image}`}/>
                </div>
                <div className={`${style.imgaeCard} ${style.small} ${style.reponsive_small}`}>
                    <Image src={socialImage6} alt='socail image 1' className={`${style.images} ${style.image}`}/>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Social