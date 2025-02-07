import styles from "./Featured.module.css";
import Featured1 from "../../../assets/Featured1.jpg";
import Featured2 from "../../../assets/Featured2.jpg";
import Featured3 from "../../../assets/Featured3.jpg";
import Featured4 from "../../../assets/Featured4.jpg";
import Featured5 from "../../../assets/Featured5.jpg";
import arrowLeft from "../../../assets/arrow-left.svg";
import arrowRight from "../../../assets/arrow-right.svg";
import { useState } from "react";
const Featured = () => {
  const [featuredImages, setFeaturedImages] = useState([
    Featured1,
    Featured2,
    Featured3,
    Featured4,
    Featured5,
  ]);
  return (
    <>
      <section className={styles.Featured}>
        <h1 className={styles.Title}>Hot Right Now ️‍🔥</h1>
        <div className={styles.FeaturedContainer}>
          <div className={styles.imageContainer}>
            {featuredImages.map((image, index) => (
              <img key={index} className={styles.shows} src={image} alt={`Featured ${index + 1}`} />
            ))}
          </div>
          <div className={styles.ArrowTags}>
            <img src={arrowRight} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
