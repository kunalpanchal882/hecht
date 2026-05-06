import React from "react";
import EnhanceImage from "../../public/image/enhance_image.png";
import Image from "next/image";
import style from '../styles/enhance.module.css'

const Enhance = () => {
  return (
    <div className={style.enhance_section}>
      <div className={style.enhance_Container}>

        <div className={style.enhance__left_Container}>
          <h4 className="second_subheadig">ENHANCE</h4>
          <h2 className="second_heading">
            Discover the Benefits of Customized{" "}
            <span className="contact_lence">Contact Lenses</span>{" "}
          </h2>
          <p className="pera">
            Experience improved vision and comfort with our customized contact lenses. Designed specifically for opticians and their clients, our lenses offer a perfect fit and optimal visual performance.
          </p>
          <button className="explore_btn">
            <div className="explore_btn_wrapper">
              <span className="explore_btn_text Btntop">Explore Our Products</span>
              <span className="explore_btn_text Btnbottom">Let’s Go</span>
            </div>

            <Image
              src="/assets/icons/arrow.png"
              width={21}
              height={14}
              alt=""
            />
          </button>
        </div>

        <div className={style.enhance__right_Container}>
            <div className={style.enhance_empity_Container}></div>
            <Image
                src={EnhanceImage}
                alt="enhance image"
            />
        </div>
      </div>
    </div>
  );
};

export default Enhance;
