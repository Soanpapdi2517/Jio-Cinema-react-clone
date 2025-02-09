import styles from "./FeaturedShow.module.css";
const FeaturedShow = ({index, Singledata}) => {
  return (
    <div className={styles.Featuredshow}>
    <img
      key={index}
      className={styles.shows}
      src={Singledata.image}
      alt={`Featured ${index + 1}`}
    />
    <p className={styles.featuredTitle}>{Singledata.title}</p>
    </div>
  );
};

export default FeaturedShow;
