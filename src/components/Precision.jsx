import React from "react";
import style from "../styles/precision.module.css";
import Image from "next/image";
import health from "../../public/assets/icons/health_icon.svg";
import PrecisionImage from "../../public/image/precision_image.png";
const Precision = () => {
  return (
    <div className={style.Precision_section}>
      <div className={style.Precision_container}>
        <div className={style.Precision_left_container}>
          <Image
            src={PrecisionImage}
            alt="precision image"
            className={style.Precision_image}
          />
          <div className={style.Precision_empity_container}></div>
          <div className={style.Precision_health_certificate_container}>
            <div className={style.health_icon_container}>
              <div className={style.health_iconss_container}>
                <Image
                  src={health}
                  alt="health icon"
                  className={style.healthcare_icon}
                />
              </div>
              <i
                className={`ri-arrow-up-s-line ${style.common_arrow}  ${style.healthcare_arrow_icon_1}`}
              ></i>
              <i
                className={`ri-arrow-up-s-line ${style.common_arrow}  ${style.healthcare_arrow_icon_2}`}
              ></i>
              <i
                className={`ri-arrow-up-s-line ${style.common_arrow}  ${style.healthcare_arrow_icon_3}`}
              ></i>
              <i
                className={`ri-arrow-up-s-line ${style.common_arrow}  ${style.healthcare_arrow_icon_4}`}
              ></i>
            </div>
            <p className={`pera  ${style.health_icon_container_para}`}>
              Hecht Contactlinsen: Providing Quality Vision Solutions Since 1990
            </p>
            <h2>1984</h2>
          </div>
        </div>

        <div className={style.Precision_right_container}>
          <h4 className="second_subheadig">PRECISION</h4>
          <div className={style.precision_text_headings}>
            <h2 className="second_heading">
              Providing quality and tradition in
            </h2>
            <h2 className="second_heading">
              <span className="contact_lence">Contact Lenses</span>{" "}
              customization for{" "}
            </h2>
            <h2 className="second_heading">over 40 years.</h2>
          </div>
          <p className="pera">Hecht Contactlinsen GmbH, a traditional company from the Black Forest, is committed to delivering precise and customized contact lenses to opticians. With a focus on quality and a history spanning over 50 years, we have become a trusted name in the industry.</p>
           
           <button className='explore_btn'>
            <div className='explore_btn_wrapper'>
              <span className='explore_btn_text top'>
                Explore Our Products
              </span>
              <span className='explore_btn_text bottom'>
                Let’s Go
              </span>
            </div>

            <Image src="/assets/icons/arrow.png" width={21} height={14} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Precision;
