import styles from "./Featured.module.css";
import arrowRight from "../../../assets/arrow-right.svg";
import FeaturedShow from "../FeaturedShow/FeaturedShow";
const Featured = ({Featured}) => {
  return (
    <>
      <section className={styles.Featured}>
        <h1 className={styles.Title}>Hot Right Now ️‍🔥</h1>
        <div className={styles.FeaturedContainer}>
          <div className={styles.imageContainer}>
            {Featured.map((data, index) => (
              <FeaturedShow Singledata={data} key={index}></FeaturedShow>
            ))}
            ;
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
