import { useState } from "react";
import styles from "./tags.module.css";
import arrowLeft from "../../../assets/arrow-left.svg"
import arrowRight from "../../../assets/arrow-right.svg"
const Tags = () => {
  const [tagsArr, setTagsArr] = useState([
    "For You",
    "Premium",
    "Laughter Chefs",
    "Cricket",
    "MTV Roadies XX",
    "Free Movies",
    "Bigg Boss",
    "News",
    "BBK",
    "Kids & Family",
    "AUS vs IND",
    "FREE Anime",
    "ISL",
  ]);
  return (
    <>
      <div className={styles.tags}>
        <div className={styles.ArrowTags}>
        <img src={arrowLeft} alt="" />
        </div>
        
        {tagsArr.map((posts) => (
          <button className={styles.tagArr}>{posts}</button>
        ))}
        <div className={styles.ArrowTags}>
        <img src={arrowRight} alt="" />
        </div>
      </div>
    </>
  );
};

export default Tags;
