import { useState } from "react";
import styles from "./tags.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Tags = () => {
  const [tagsArr] = useState([
    "For You",
    "Premium",
    "Laughter Chefs",
    "Cricket",
    "MTV Roadies XX",
    "Free Movies",
    "Bigg Boss",
    "News",
    "BBK",
    "Kids & Family",
    "AUS vs IND",
    "FREE Anime",
    "ISL",
  ]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={styles.TagsMain}>
    <div className={styles.tags}>
      <Slider {...settings}  className={styles.tagsWrapper}>

        {tagsArr.map((tags, index) => (
          <button key={index} className={styles.tagArr}>{tags}</button>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Tags;
