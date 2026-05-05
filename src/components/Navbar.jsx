'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import MobileMenu from './MobileMenu'

const Navbar = () => {

   const [menuOpen, setMenuOpen] = useState(false)

  return (

    <>
    <nav className={styles.navbar}>
      <div className={styles.navcontainer}>
        <div className={styles.logo_section}>
          <i className={`ri-menu-2-line ${styles.menuicon}`}
          onClick={() => setMenuOpen(true)}
          ></i>

          <div className={styles.logo}>
            <Image src="/assets/icons/logo.png" alt="" width={44.42} height={34.73}/>
            <div className={styles.logo_icon}></div>
          </div>

          <div className={styles.logo_text}>
            <div className={styles.logo_header}>
              <div className={styles.single_logo_header}>
                <Image src="/assets/icons/logo_h.png" alt="" width={22.73} height={22.31}/>
              </div>
              <div className={styles.single_logo_header}>
                <Image src="/assets/icons/logo_e.png" alt="" width={22.73} height={22.31}/>
              </div>
              <div className={styles.single_logo_header}>
                <Image src="/assets/icons/logo_c.png" alt="" width={22.73} height={22.31}/>
              </div>
              <div className={styles.single_logo_header}>
                <Image src="/assets/icons/logo_h.png" alt="" width={22.73} height={22.31}/>
              </div>
              <div className={styles.single_logo_header}>
                <Image src="/assets/icons/logo_t.png" alt="" width={22.73} height={22.31}/>
              </div>
            </div>

            <div className={styles.logo_para}>
              <div className={styles.single_logo_para}><Image src="/assets/icons/s.png" alt="" width={7.23} height={13.25}/></div>
              <div className={styles.single_logo_para}><Image src="/assets/icons/i.png" alt="" width={1.37} height={12.84}/></div>
              <div className={styles.single_logo_para}><Image src="/assets/icons/c.png" alt="" width={6.19} height={9.28}/></div>
              <div className={styles.single_logo_para}><Image src="/assets/icons/h.png" alt="" width={6.25} height={12.86}/></div>
              <div className={styles.single_logo_para}><Image src="/assets/icons/t.png" alt="" width={4.72} height={11.73}/></div>
              <div className={styles.single_logo_para}><Image src="/assets/icons/b.png" alt="" width={6.52} height={13.06}/></div>
              <div className={styles.single_logo_para}><Image src="/assets/icons/a.png" alt="" width={5.98} height={9.28}/></div>
              <div className={styles.single_logo_para}><Image src="/assets/icons/r.png" alt="" width={3.79} height={9.07}/></div>
              <div className={styles.single_logo_para}><Image src="/assets/icons/b.png" alt="" width={6.52} height={13.06}/></div>
              <div className={styles.single_logo_para}><Image src="/assets/icons/e.png" alt="" width={6.32} height={9.27}/></div>
              <div className={styles.single_logo_para}><Image src="/assets/icons/small_s.png" alt="" width={5.72} height={9.27}/></div>
              <div className={styles.single_logo_para}><Image src="/assets/icons/small_s.png" alt="" width={5.72} height={9.27}/></div>
              <div className={styles.single_logo_para}><Image src="/assets/icons/e.png" alt="" width={6.32} height={9.27}/></div>
              <div className={styles.single_logo_para}><Image src="/assets/icons/r.png" alt="" width={3.79} height={9.07}/></div>
            </div>
          </div>
        </div>

        <div className={styles.route_pagaes}>
          <a className={styles.active_page} href="#header">Home</a>
          <a href="#header">About US</a>
          <a href="#header">Resources</a>
          <a href="#header">Technology</a>
          <a href="#header">Products</a>
          <a href="#header">Contact US</a>
        </div>

        <div className={styles.nav_icons}>
          <div className={styles.search}>
            <Image src="/assets/icons/search.png" alt="search" width={24} height={24} />
          </div>
          <div className={styles.cart}>
            <Image src="/assets/icons/cart.png" alt="cart" width={24} height={24} />
          </div>
        </div>
      </div>
    </nav>

     <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  )
}

export default Navbar