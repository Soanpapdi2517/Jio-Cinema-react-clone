import styles from "./ShowList.module.css";
import Shows from "../Shows/Shows.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShowsList = ({ Titles, Content }) => {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
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
    <>
      <section className={styles.Shows}>
        <h1 className={styles.Title}>{Titles}</h1>
        <div className={styles.FeaturedContainer}>
          <Slider {...settings} className={styles.imageContainer}>
            {Content.map((show, index) => (
              <Shows SingleShow={show} key={index} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default ShowsList;
