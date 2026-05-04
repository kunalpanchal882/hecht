'use client'
import React, { useState } from "react";
import style from "../styles/faq.module.css";
import faqBackgroundImage from "../../public/image/faq_background_image.jpg";
import Image from "next/image";

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    // If the clicked item is already open, close it (null), otherwise open it
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqData = [
  {
    question: "What types of contact lenses do you offer?",
    answer:
      "We offer a wide range of customized contact lenses, including spherical lenses, toric lenses, multifocal lenses, and special lenses tailored to individual needs.",
  },
  {
    question: "How can I order customized contact lenses for my patients?",
    answer:
      "You can order through our professional portal or contact our support team directly for assistance.",
  },
  {
    question: "Do you provide resources and support for opticians?",
    answer:
      "Yes, we provide extensive technical documentation, training sessions, and dedicated support for all our partners.",
  },
  {
    question: "How do I care for my contact lenses?",
    answer:
      "Proper care involves regular cleaning with recommended solutions and following the specific replacement schedule provided by your specialist.",
  },
  {
    question: "Can I wear contact lenses if I have astigmatism?",
    answer:
      "Absolutely. We offer specialized toric lenses designed specifically to provide clear and stable vision for those with astigmatism.",
  },
  {
    question: "Are your lenses suitable for children?",
    answer:
      "Yes, we provide various options suitable for children, including specialized myopia management lenses to help support long-term eye health.",
  },
];

  return (
    <div className={style.faq_section}>
      <div className={style.faq_image_section}>
        <Image
          src={faqBackgroundImage}
          alt="faq image"
          className={style.backgroundImage}
        />
        <div className={style.question_ans_conatiner}>
          <div className={style.inner_container}>
            <div className={style.sub_inner_container}>
              <div className={style.main_faq_container}>
                <div className={style.heading_container}>
                  <h1 className={style.heading}>FAQs</h1>
                  <p className={`pera ${style.faq_para}`}>
                    Answers to Your Most Common Questions about Hecht
                    Contactlinsen Products and Services
                  </p>
                </div>

                <div className={style.faq_list}>
                  {faqData.map((item, index) => (
                    <div key={index} className={style.faq_item}>
                      <div 
                      className={style.faq_question_box}
                      onClick={() => toggleAccordion(index)}
                      >
                        <h3 className={style.faq_question}>{item.question}</h3>
                        <span className={`${style.faq_icon} ${activeIndex === index ? style.rotate : ""}`}>
                            <i className={`ri-arrow-up-s-line ${style.arrow}`}></i> 
                        </span>
                      </div>
                      {/* Only show the answer for the active item */}
                      <div className={`${style.answer_wrapper} ${activeIndex === index ? style.open : ""}`}>
                        <p className={`pera ${style.faq_answer}`}>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
