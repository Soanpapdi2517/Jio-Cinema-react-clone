import styles from "./Spotlight.module.css";
import SpotLightShow from "../../../assets/SpotlightShow.jpg"
const Spotlight = () => {
  return (
    <div className={styles.Spotlight}>
      <h1 className={styles.Title}>In The Spotlight</h1>
      <img src={SpotLightShow} alt="" className={styles.image}/>
    </div>
  );
};

export default Spotlight;
