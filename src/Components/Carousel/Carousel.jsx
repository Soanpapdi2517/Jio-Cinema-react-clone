import SliderMain from "../SingleSlider/SliderMain";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styles from "./Caraousel.module.css";
const Carousel = ({ SeriesData }) => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <>
      <section className={styles.Carousel}>
        <div className={styles.SeriesContainer}>
          <Slider {...settings} className={styles.imagesContainer}>
            {SeriesData.map((show, index) => (
              <SliderMain series={show} key={index} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Carousel;
