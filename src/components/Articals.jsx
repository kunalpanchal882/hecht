import React from "react";
import style from "../styles/articals.module.css";
import articalCardImage1 from "../../public/image/artical_card_image_1.png";
import articalCardImage2 from "../../public/image/artical_card_image_2.png";
import articalCardImage3 from "../../public/image/artical_card_image_3.png";
import Image from "next/image";

const Articals = () => {
  const articleCards = [
    {
      id: 1,
      category: "Innovation",
      title: "The Future of Contact Lenses: Innovations to Watch",
      image: articalCardImage1,
    },
    {
      id: 2,
      category: "Prevention",
      title: "Effective Myopia Management in Children",
      image: articalCardImage2,
    },
    {
      id: 3,
      category: "Comfort",
      title: "Maximizing Comfort: Tips for Contact Lens Wearers",
      image: articalCardImage3,
    },
  ];

  return (
    <div className={style.Artical_section}>
      <div className={style.artical_container}>
        <div className={style.upper}>
          <h2 className={style.heading}>
            Explore our latest articles and updates to <br /> stay ahead with{" "}
            <span className={style.spanheading}>Hecht Contactlinsen <br /> GmbH</span>
          </h2>

          <h2 className={style.reponsive_heading}>
            Explore our latest articles and updates to stay ahead with{" "}
            <span className={style.spanheading}>Hecht Contactlinsen <br /> GmbH</span>
          </h2>
        </div>
        <div className={style.lower}>
          {articleCards.map((card) => (
            <article key={card.id} className={style.cardContainer}>
              <div className={style.image_container}>
                <Image
                src={card.image}
                alt={card.title}
                className={style.cardImage}
              />
              </div>

              <p className={style.cardCategory}>{card.category}</p>

              <h3 className={style.cardTitle}>{card.title}</h3>

              <button className={style.cardIconButton}>
                <i className={`ri-arrow-right-up-line ${style.arrow}`}></i>
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articals;
