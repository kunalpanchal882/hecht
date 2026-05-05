import React from "react";
import style from "../styles/accuracy.module.css";
import AccuracyImage from '../../public/image/accuracy_image.png'
import Image from "next/image";

const Accuracy = () => {
  return (
    <div className={style.Accuracy_section}>
      <div className={style.Accuracy_container}>

        <div className={style.Accuracy_upper_container}>
          <div className={style.Accuracy_upper_left_container}>
            <h4 className="second_subheadig">ACCURACY</h4>
            <h2 className="second_heading">
              Discover the Impressive Results of Our Customized{" "} <br />
            <span className="contact_lence">Contact Lenses</span>{" "}
            </h2>
          </div>
          <div className={style.Accuracy_upper_right_container}>
            <p className="pera">Our company has achieved remarkable success in delivering effective, tailored, and innovative contact lenses to opticians, ensuring that we meet the diverse needs of their patients and provide top-notch quality in every aspect of our products and services</p>
          </div>
        </div>

        <div className={style.Accuracy_lower_container}>
            <Image
                src={AccuracyImage}
                alt="accuracy image"
                className={style.accuracy_image}
            />
            <div className={style.Accuracy_percentage_wrapper}>
                    <div className={style.Accuracy_percentage_contaienr}>
                    <h2 className={`second_heading ${style.Accuracy_percentage_heading}`}> 50% <br /> Increase</h2>
                    <p className="pera">in Optician Satisfaction with Our Customized Contact Lense</p>
                    </div>

                    <div className={style.Accuracy_percentage_contaienr}>
                    <h2 className={`second_heading ${style.Accuracy_percentage_heading}`}> 50% <br /> Increase</h2>
                    <p className="pera">in Optician Satisfaction with Our Customized Contact Lense</p>
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Accuracy;
