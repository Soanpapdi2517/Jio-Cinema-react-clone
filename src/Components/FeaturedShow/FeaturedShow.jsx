import styles from "./Featured.module.css";
const FeaturedShow = ({index, Singledata}) => {
  return (
    <img
      key={index}
      className={styles.shows}
      src={Singledata.image}
      alt={`Featured ${index + 1}`}
    />
  );
};

export default FeaturedShow;
