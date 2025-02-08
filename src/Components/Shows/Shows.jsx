import styles from "./Shows.module.css";

const Shows = ({ SingleShow }) => {
  return (
    <div className={styles.showContainer}>
      <img src={SingleShow.image} className={styles.shows} alt={SingleShow.title} />
      <span className={styles.contentTitle}>{SingleShow.title}</span>
    </div>
  );
};

export default Shows;
