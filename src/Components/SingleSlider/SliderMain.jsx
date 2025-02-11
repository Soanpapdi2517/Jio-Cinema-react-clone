import styles from "./SliderMain.module.css";

const SliderMain = ({ series }) => {
  return (
    <div className={styles.serieContainer}>
      <img src={series.image} className={styles.singleImageSeries} alt="" />
      <span className={styles.contentTitle}>
        {series.title}{" "}
        <span className={styles.description}>{series.description}</span>
        <div className={styles.runtime}>
          {" "}
          Runtime: <span className={styles.mins}>{series.runtime}</span>{" "}
          <span className={styles.time}>mins</span>
        </div>
        <div className={styles.seasons}>
          {" "}
          Seasons: <span className={styles.episodeCount}>{series.seasons}</span>
        </div>
        <div className={styles.episodes}>
          Episodes: <span className={styles.episodeCount}>{series.episodes}</span>
        </div>
      </span>
      <span className={styles.rating}>imdb: ⭐{series.imdb_rating}/10</span>
    </div>
  );
};

export default SliderMain;
