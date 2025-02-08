import styles from "./ShowList.module.css";
import arrowRight from "../../../assets/arrow-right.svg";
import Shows from "../Shows/Shows.jsx";
const ShowsList = ({ Titles, Content }) => {
  return (
    <>
      <section className={styles.Shows}>
        <h1 className={styles.Title}>{Titles}</h1>
        <div className={styles.FeaturedContainer}>
          <div className={styles.imageContainer}>
            {Content.map((show, index) => (
              <Shows SingleShow={show} key={index} />
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

export default ShowsList;
