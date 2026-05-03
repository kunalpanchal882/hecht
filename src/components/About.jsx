import React from "react";
import style from "../styles/about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={style.about_section}>
      <div className={style.about_background}>
        <Image
          src="/image/background_2.png"
          width={1920}
          height={1271}
          alt="aman"
        ></Image>
      </div>
      {/* <main className={style.about_container}> */}
      <div className={style.about_empityContainer}></div>
      <div className={style.about_conatiner_image}>
        <Image
          src="/image/about-2.png"
          width={705}
          height={894}
          alt="about image"
        ></Image>
      </div>
      <div className={style.aboutUS_Conatiner}>
        <div className={style.about_container_text}>
          <h4 className="second_subheadig">ABOUT US</h4>
          <h2 className="second_heading">
            Experience the Uniqueness of Customized{" "}
            <span className="contact_lence">Contact Lenses</span>{" "}
          </h2>
          <p className="pera">
            At Hecht Contactlinsen GmbH, we combine tradition and innovation to
            create customized contact lenses that perfectly fit your needs. Our
            team of experts utilizes advanced technology and years of experience
            to deliver exceptional quality and comfort.
          </p>
          {/* <div className={style.empity_conatiner_reponsivce}></div> */}
        </div>

        <div className={style.about_card}>
          <div className={style.about_single_card}>
            <div className={style.aboutUS_icons}>
              <Image
                src="/assets/icons/about_img_1.png"
                width={80}
                height={80}
                alt="customize solution"
              ></Image>
            </div>
            <h3>Customized Solution</h3>
            <p className="pera">
              ailor-made contact lenses designed to meet the specific needs of
              each patient.
            </p>
            <div className={style.about_learn_more}>
              <p>Learn More</p>
              <i className={`ri-arrow-right-long-line ${style.arrow}`}></i>
            </div>
          </div>

          <div className={style.about_single_card}>
            <div className={style.aboutUS_icons}>
              <Image
                src="/assets/icons/about_img_2.png"
                width={80}
                height={80}
                alt="Quality"
              ></Image>
            </div>
            <h3>Quality</h3>
            <p className="pera">
              Our commitment to excellence ensures that every pair of contact
              lenses meets the highest standards
            </p>
            <div className={style.about_learn_more}>
              <p>Learn More</p>
               <i className={`ri-arrow-right-long-line ${style.arrow}`}></i>
            </div>
          </div>

          <div className={style.about_single_card}>
            <div className={style.aboutUS_icons}>
              <Image
                src="/assets/icons/about_img_5.png"
                width={80}
                height={80}
                alt="Advanced Technology"
              ></Image>
            </div>
            <h3>Advanced Technology</h3>
            <p className="pera">
              Utilization of the latest innovations in contact lens
              manufacturing and design
            </p>
            <div className={style.about_learn_more}>
              <p>Learn More</p>
               <i className={`ri-arrow-right-long-line ${style.arrow}`}></i>
            </div>
          </div>

          <div className={style.about_single_card}>
            <div className={style.aboutUS_icons}>
              <Image
                src="/assets/icons/about_img_4.png"
                width={80}
                height={80}
                alt="customize solution"
              ></Image>
            </div>
            <h3>Customer Support</h3>
            <p className="pera">
              Our commitment to excellence ensures that every pair of contact
              lenses meets the highest standards
            </p>
            <div className={style.about_learn_more}>
              <p>Learn More</p>
               <i className={`ri-arrow-right-long-line ${style.arrow}`}></i>
            </div>
          </div>
        </div>
      </div>

        {/* duplicate dic for responsive design  */}
     

      {/* <div className={style.about_conatiner_image_2}>
        <Image
          src="/image/about-2.png"
          width={705}
          height={894}
          alt="about image"
        />
      </div> */}

      <div className={style.aboutUS_Conatiner_2}>
        <div className={style.about_container_text_2}>
          <h4 className="second_subheadig">ABOUT US</h4>

          <h2 className="second_heading">
            Experience the Uniqueness of Customized
            <span className="contact_lence">Contact Lenses</span>
          </h2>

          <p className="pera">
            At Hecht Contactlinsen GmbH, we combine tradition and innovation to
            create customized contact lenses that perfectly fit your needs. Our
            team of experts utilizes advanced technology and years of experience
            to deliver exceptional quality and comfort.
          </p>
        </div>

        <div className={style.about_card_2}>

          <div className={style.about_single_card_2}>
            <div className={style.aboutUS_icons_2}>
              <Image
                src="/assets/icons/about_img_1.png"
                width={80}
                height={80}
                alt="customize solution"
              />
            </div>

            <h3>Customized Solution</h3>

            <p className="pera">
              Tailor-made contact lenses designed to meet the specific needs of
              each patient.
            </p>

            <div className={style.about_learn_more_2}>
              <p>Learn More</p>
              <i className={`ri-arrow-right-long-line ${style.arrow}`}></i>
            </div>
          </div> 

          <div className={style.about_single_card_2}>
            <div className={style.aboutUS_icons_2}>
              <Image
                src="/assets/icons/about_img_2.png"
                width={80}
                height={80}
                alt="Quality"
              />
            </div>

            <h3>Quality</h3>

            <p className="pera">
              Our commitment to excellence ensures that every pair of contact
              lenses meets the highest standards
            </p>

            <div className={style.about_learn_more_2}>
              <p>Learn More</p>
              <i className={`ri-arrow-right-long-line ${style.arrow}`}></i>
            </div>
          </div>

          <div className={style.about_single_card_2}>
            <div className={style.aboutUS_icons_2}>
              <Image
                src="/assets/icons/about_img_5.png"
                width={80}
                height={80}
                alt="Advanced Technology"
              />
            </div>

            <h3>Advanced Technology</h3>

            <p className="pera">
              Utilization of the latest innovations in contact lens
              manufacturing and design
            </p>

            <div className={style.about_learn_more_2}>
              <p>Learn More</p>
              <i className={`ri-arrow-right-long-line ${style.arrow}`}></i>
            </div>
          </div>

          <div className={style.about_single_card_2}>
            <div className={style.aboutUS_icons_2}>
              <Image
                src="/assets/icons/about_img_4.png"
                width={80}
                height={80}
                alt="customize solution"
              />
            </div>

            <h3>Customer Support</h3>

            <p className="pera">
              Our commitment to excellence ensures that every pair of contact
              lenses meets the highest standards
            </p>

            <div className={style.about_learn_more_2}>
              <p>Learn More</p>
              <i className={`ri-arrow-right-long-line ${style.arrow}`}></i>
            </div>
          </div>

        </div>

        <div className={style.about_conatiner_image_2}>
        <Image
          src="/image/about-2.png"
          width={705}
          height={894}
          alt="about image"
        />
      </div>

       <div className={style.about_empityContainer_2}></div>
      </div>
      {/* </main> */}
    </div>
  );
};

export default About;
