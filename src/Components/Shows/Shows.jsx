import styles from "./Shows.module.css";

const Shows = ({ SingleShow }) => {
  return (
    <div className={styles.showContainer}>
      <img
        src={SingleShow.image}
        className={styles.shows}
        alt={SingleShow.title}
      />
      <span className={styles.contentTitle}>
        {SingleShow.title}{" "}
        <span className={styles.description}>{SingleShow.description}</span>
        <div className={styles.runtime}>
          {" "}
          Runtime: <span className={styles.mins}>
            {SingleShow.runtime}
          </span>{" "}
          <span className={styles.time}>mins</span>
        </div>
      </span>

      <span className={styles.rating}>imdb: ⭐{SingleShow.imdb_rating}/10</span>
    </div>
  );
};

export default Shows;
