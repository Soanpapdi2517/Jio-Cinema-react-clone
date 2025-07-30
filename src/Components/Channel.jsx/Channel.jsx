import styles from "./Channel.module.css";
import Channel1 from "../../../assets/Channel1.avif";
import Channel2 from "../../../assets/Channel2.avif";
import Channel3 from "../../../assets/Channel3.avif";
import Channel4 from "../../../assets/Channel4.avif";
import Channel5 from "../../../assets/Channel5.avif";
import Channel6 from "../../../assets/Channel6.avif";
import Channel7 from "../../../assets/Channel7.avif";
import Channel8 from "../../../assets/Channel8.avif";
import Channel9 from "../../../assets/Channel9.avif";
const Channel = () => {
  return (
    <div className={styles.Channels}>
      <img src={Channel1} alt="" />
      <img src={Channel2} alt="" />
      <img src={Channel3} alt="" />
      <img src={Channel4} alt="" />
      <img src={Channel5} alt="" />
      <img src={Channel6} alt="" />
      <img src={Channel7} alt="" />
      <img src={Channel8} alt="" />
      <img src={Channel9} alt="" />
    </div>
  );
};

export default Channel;
