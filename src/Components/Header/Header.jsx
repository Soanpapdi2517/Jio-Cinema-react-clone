import styles from "./Header.module.css";
import JcLogo from "../../../assets/jc_logo_v2.svg";
import crown from "../../../assets/Screenshot 2025-02-06 211412.png";
import searchIcon from "../../../assets/ic_search.svg";
import voiceSearch from "../../../assets/voice-search.svg";
const Header = () => {
  const navLinks = ["Home", "Sports", "Movies", "TV Shows", "More"];
  return (
    <header className={styles.Header}>
      <nav className={styles.Navigation}>
        <div className={styles.logo}>
          <img src={JcLogo} alt="Jio Cinema logo" className={styles.jcLogo} />
          <div className={styles.premium}>
            <img src={crown} alt="" className={styles.crown} />
            <p>GoPremium</p>
          </div>
        </div>

        <ul className={styles.navlinks}>
          {navLinks.map((links) => (
            <li className={styles.navlink}>{links}</li>
          ))}
        </ul>
      </nav>
      <div className={styles.SearchArea}>
        <div className={styles.SearchBox}>
          <div></div>
          <img src={searchIcon} alt="search" className={styles.SearchIcon}/>
          <input type="text" placeholder="Movies, Shows and more..." className={styles.inputBox}/>
          <img src={voiceSearch} alt="voice-search" className={styles.VoiceSearchIcon} />
        </div>
      </div>
    </header>
  );
};

export default Header;
