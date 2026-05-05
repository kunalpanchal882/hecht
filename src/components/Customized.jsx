import React from "react";
import style from "../styles/customized.module.css";
import Image from "next/image";

const Customized = () => {
  const cards = [
    { 
        img: "/image/customized_image_1.png",
         title: "Superior Comfort" ,
        heading:"Superior Comfort and Optimal Vision" ,
        para:"Our contact lenses are crafted with utmost care to ensure maximum comfort and clarity. Say goodbye to dryness, irritation, and compromised vision"   
    },
    {
         img: "/image/customized_image_2.png", 
         title: "Seamless Integration" ,
        heading:"Seamless Integration for Active Lifestyles",
        para:"Designed for those with active lifestyles, our contact lenses provide a secure and stable fit, allowing you to enjoy your favorite activities without any restrictions"
        },
    { img: "/image/customized_image_3.png", 
        title: "Easy Maintenance" ,
        heading:"Easy Maintenance and Long-Lasting Durability",
        para:"With our contact lenses, you can enjoy hassle-free maintenance and extended usage. Experience lenses that are built to last"

    },
  ];

  return (
    <div className={style.CustomizedSection}>
      <div className={style.CustomizedContainer}>
        <div className={style.Customized_text_container}>
          <div className={style.Customized_text_left_container}>
            <h4 className="second_subheadig">CUSTOMIZED</h4>
            <h2 className="second_heading">
              Enhance Your Vision with Personalized{" "}
              <span className="contact_lence">Contact Lenses</span>{" "}
            </h2>
          </div>
          <div className={style.Customized_text_right_container}>
            <p className={`pera ${style.Customized_para}`}>
              Experience the difference of personalized contact lenses today -
              customized for the perfect fit, exceptional comfort, and
              crystal-clear vision with advanced technology and precise
              measurements.
            </p>
          </div>
        </div>

        <div className={style.Customized_card}>
          {cards.map((item, index) => (
            <div key={index} className={style.Customized_images_card}>
              <Image src={item.img} fill alt={item.title} className={style.card_img} />
              <div className={style.Customized_arrow_icons}>
              <i className={`ri-arrow-right-long-line ${style.arrow}`}></i>
            </div>
            <div className={style.card_heading}>
              <h3 className={style.card_heading_header}>{item.heading}</h3>
              <p className={`pera ${style.Customized_card_para}`}>
             {item.para}
              </p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customized;
