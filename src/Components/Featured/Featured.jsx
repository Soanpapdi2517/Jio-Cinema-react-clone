import styles from "./Featured.module.css";
import FeaturedShow from "../FeaturedShow/FeaturedShow";
import Slider from "react-slick";
const Featured = ({FeaturedData}) => {
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
      <section className={styles.Featured}>
        <h1 className={styles.Title}>Hot Right Now ️‍🔥</h1>
        <div className={styles.FeaturedContainer}>
          <Slider {...settings} className={styles.imageContainer}>
            {FeaturedData.map((data, index) => (
              <FeaturedShow Singledata={data} key={index}></FeaturedShow>
            ))}
            
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Featured;
