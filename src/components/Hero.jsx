import React from 'react'
import Image from 'next/image'
import style from '../styles/hero.module.css'

const Hero = () => {
  return (
    <header className={style.header}>
      <div className={style.header_image}>
        <Image src="/image/Rectangle 33.png" fill priority alt="eye care" />
      </div>

      <section className={style.heroSection_content}>
        <h1>Customized Contact Lenses for Perfect Vision</h1>

        <div className={style.exclusive_clients}>
          <div className={style.exclusive_client}>
            <p className={style.eclusive_client_para}>10k+ Exclusive Clients</p>

            <div className={style.clients_profiles}>
              <div className={style.client_profile}>
                <Image src="/assets/profile/header_client_profile.png" width={100} height={100} alt="" />
              </div>

              <div className={style.client_profile}>
                <Image src="/assets/profile/header_client_profile_1.png" width={50} height={50} alt="" />
              </div>

              <div className={style.client_profile}>
                <Image src="/assets/profile/header_client_profile_2.png" width={50} height={50} alt="" />
              </div>

              <div className={style.client_profile}>
                <Image src="/assets/profile/header_client_profile_3.png" width={50} height={50} alt="" />
              </div>

              <div className={`${style.client_profile} ${style.tenk_circle}`}>
                <p className={style.tenk}>10k+</p>
              </div>
            </div>
          </div>

          <div className={style.arrow}>
            <Image src="/assets/icons/twisted_arrow.png" width={273} height={100} alt="" />
          </div>
        </div>

        <div className={style.explore_contaier}>
          <p className={style.explore_para}>
            Experience the perfect fit and clarity with our customized contact lenses
          </p>

          <button className={style.explore_btn}>
            <div className={style.explore_btn_wrapper}>
              <span className={`${style.explore_btn_text} ${style.top}`}>
                Explore Our Products
              </span>
              <span className={`${style.explore_btn_text} ${style.bottom}`}>
                Let’s Go
              </span>
            </div>

            <Image src="/assets/icons/arrow.png" width={21} height={14} alt="" />
          </button>
        </div>

        <div className={style.socialmedia_icons}>
          <div className={`${style.socialmedia_icon} ${style.active}`}>
            <Image src="/assets/icons/ri_facebook-fill.png" width={100} height={100} alt="facebook" />
          </div>

          <div className={style.socialmedia_icon}>
            <Image src="/assets/icons/instagram2.png" width={100} height={100} alt="instagram" />
          </div>

          <div className={style.socialmedia_icon}>
            <Image src="/assets/icons/linkdin.png" width={100} height={100} alt="linkdin" />
          </div>

          <div className={style.socialmedia_icon}>
            <Image src="/assets/icons/twitter.png" width={100} height={100} alt="twitter" />
          </div>
        </div>

      </section>
    </header>
  )
}

export default Hero