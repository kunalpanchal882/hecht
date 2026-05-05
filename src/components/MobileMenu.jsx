'use client'
import Image from 'next/image'
import React from 'react'
import style from '../styles/mobilemanu.module.css'
import { useState } from 'react'

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`${style.mobile_view} ${menuOpen ? style.active : ''}`}>
      <div className={style.mobile_view_container}>
        <div className={style.logo_section}>
          <div className={style.logo_in_mobile}>
            <div className={style.logo}>
              <Image
                src="/assets/icons/logo.png"
                alt="logo"
                width={40}
                height={40}
              />
              <div className={style.logo_icon}></div>
            </div>

            <div className={style.logo_text}>
              <span className={style.logo_header}>
                <div className={style.single_logo_header}>
                  <Image src="/assets/icons/logo_h.png" alt="" width={20} height={20} />
                </div>
                <div className={style.single_logo_header}>
                  <Image src="/assets/icons/logo_e.png" alt="" width={20} height={20} />
                </div>
                <div className={style.single_logo_header}>
                  <Image src="/assets/icons/logo_c.png" alt="" width={20} height={20} />
                </div>
                <div className={style.single_logo_header}>
                  <Image src="/assets/icons/logo_h.png" alt="" width={20} height={20} />
                </div>
                <div className={style.single_logo_header}>
                  <Image src="/assets/icons/logo_t.png" alt="" width={20} height={20} />
                </div>
              </span>

              <span className={style.logo_para}>
                <div className={style.single_logo_para}>
                  <Image src="/assets/icons/s.png" alt="" width={14} height={14} />
                </div>
                <div className={style.single_logo_para}>
                  <Image src="/assets/icons/i.png" alt="" width={14} height={14} />
                </div>
                <div className={style.single_logo_para}>
                  <Image src="/assets/icons/c.png" alt="" width={14} height={14} />
                </div>
                <div className={style.single_logo_para}>
                  <Image src="/assets/icons/h.png" alt="" width={14} height={14} />
                </div>
                <div className={style.single_logo_para}>
                  <Image src="/assets/icons/t.png" alt="" width={14} height={14} />
                </div>
                <div className={style.single_logo_para}>
                  <Image src="/assets/icons/b.png" alt="" width={14} height={14} />
                </div>
                <div className={style.single_logo_para}>
                  <Image src="/assets/icons/a.png" alt="" width={14} height={14} />
                </div>
                <div className={style.single_logo_para}>
                  <Image src="/assets/icons/r.png" alt="" width={14} height={14} />
                </div>
                <div className={style.single_logo_para}>
                  <Image src="/assets/icons/b.png" alt="" width={14} height={14} />
                </div>
                <div className={style.single_logo_para}>
                  <Image src="/assets/icons/e.png" alt="" width={14} height={14} />
                </div>
                <div className={style.single_logo_para}>
                  <Image src="/assets/icons/small_s.png" alt="" width={14} height={14} />
                </div>
                <div className={style.single_logo_para}>
                  <Image src="/assets/icons/small_s.png" alt="" width={14} height={14} />
                </div>
                <div className={style.single_logo_para}>
                  <Image src="/assets/icons/e.png" alt="" width={14} height={14} />
                </div>
                <div className={style.single_logo_para}>
                  <Image src="/assets/icons/r.png" alt="" width={14} height={14} />
                </div>
              </span>
            </div>
          </div>

          <i className={`ri-close-large-fill ${style.cross}`}
           onClick={() => setMenuOpen(false)}
          ></i>
        </div>

        <div className={style.route_pagaes}>
          <a className={style.active_page} href="#header">Home</a>
          <a href="#header">About US</a>
          <a href="#header">Resources</a>
          <a href="#header">Technology</a>
          <a href="#header">Products</a>
          <a href="#header">Contact US</a>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu