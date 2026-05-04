'use client'

import React, { useEffect } from "react";
import style from "../styles/customer.module.css";
import customerImage from "../../public/image/customer_image.svg";
import Image from "next/image";
import profile1 from "../../public/image/customer_profile_1.svg";
import profile2 from "../../public/image/customer_profile_2.svg";
import profile3 from "../../public/image/customer_profile_3.svg";
import profilecardIcon from '../../public/image/review_card_image_1.svg'
import { useState } from "react";

const Customer = () => {
  const reviews = [
    {
      name: "JOHN M.",
      role: "Optician",
      text: "Hecht Contactlinsen contact lenses have revolutionized my practice.",
      image: profile1 ,
    },
    {
      name: "SARAH L.",
      role: "Lens Specialist",
      text: "The precision and quality of Hecht Contactlinsen lenses are unmatched.",
      image: profile2 ,
    },
    {
      name: "DR. MARKUS K.",
      role: "Optometrist",
      text: "Partnering with Hecht has been a game changer for our business.",
      image: profile3 ,
    },
  ];

   const [index, setIndex] = useState(0);
   const [transition, setTransition] = useState(true);

   const extendedReviews = [...reviews,...reviews,...reviews, reviews[0]];

   useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  useEffect(() => {
  if (index === reviews.length) {
    setTimeout(() => {
      setTransition(false);
      setIndex(0);
    }, 700);

    setTimeout(() => {
      setTransition(true);
    }, 750);
  }
}, [index]);

  return (
    <div className={style.customer_section}>
      <div className={style.customer_inner_section}>
        <div className={style.customer_container}>
            
          <div className={style.heading_Conatainer}>
            <div className={style.heading_left_Conatainer}>
              <Image
                src={customerImage}
                alt="customer image"
                className={style.heading_left_Conatainer_image}
              />
            </div>
            <div className={style.heading_right_Conatainer}>
              <h2 className="second_heading">
                Over 2,500 Satisfied Customers <br /> Trust Us
              </h2>
              <p className="pera">
                Join the thousands of satisfied opticians who rely on Hecht
                Contactlinsen for superior quality and unmatched comfort.
              </p>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className={style.sliderWrapper}>
            <div className={style.slider} style={{ 
                transform: `translateX(-${index * 33.33}%)`,
                 transition: transition ? "0.7s ease" : "none",
                }}>
              {extendedReviews.map((item, i) => (
                <div className={style.card} key={i}>
                  <span className={style.stars}>★★★★★</span>
                  <p>{item.text}</p>

                  <div className={style.bottom}>
                    <div className={style.profilename}><div className={style.avatar}>
                        <Image src={item.image} alt="reviwe profile"/>
                    </div>
                    <div className={style.avatar_bio}>
                      <h4>{item.name}</h4>
                      <span>{item.role}</span>
                    </div></div>
                    <div className={style.icon}>
                        <Image src={profilecardIcon} alt="reviwe profile"/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTES */}
            <div className={style.dots}>
                {reviews.map((_,i) => (
                    <span key={i} className={index === i ? style.active : ""} onClick={() => setIndex(i)}></span>
                ))}
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Customer;
