import styles from "./FeaturedShow.module.css";
const FeaturedShow = ({ index, Singledata }) => {
  return (
    <div className={styles.Featuredshow}>
      <img key={index} className={styles.shows} src={Singledata.image} />
      <span className={styles.featuredTitle}>
        {Singledata.title}
        <span className={styles.description}>{Singledata.description}</span>
        <div className={styles.runtime}>
          {" "}
          Runtime: <span className={styles.mins}>
            {Singledata.runtime}
          </span>{" "}
          <span className={styles.time}>mins</span>
        </div>
      </span>
    </div>
  );
};

export default FeaturedShow;
