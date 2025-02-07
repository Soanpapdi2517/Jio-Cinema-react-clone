import styles from "./Header.module.css";
import JcLogo from "../../../assets/jc_logo_v2.svg";
import crown from "../../../assets/crown.svg";
import searchIcon from "../../../assets/ic_search.svg";
import voiceSearch from "../../../assets/voice-search.svg";
import profileAvatar from "../../../assets/personImage.svg";
const Header = () => {
  const navLinks = ["Home", "Sports", "Movies", "TV Shows", "More"];
  return (
    <header className={styles.Header}>
      <nav className={styles.Navigation}>
        <div className={styles.logo}>
          <img src={JcLogo} alt="Jio Cinema logo" className={styles.jcLogo} />
          <div className={styles.premium}>
            <img src={crown} alt="" className={styles.crown} />
            <span>GoPremium</span>
          </div>
        </div>

        <ul className={styles.navlinks}>
          {navLinks.map((links) => (
            <li key={links} className={styles.navlink}>
              {links}
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.SearchArea}>
        <div className={styles.SearchBox}>
          <div className={styles.SearchIcon}>
            <img src={searchIcon} alt="search" />
          </div>

          <input
            type="text"
            placeholder="Movies, Shows and more..."
            className={styles.inputBox}
          />
          <div className={styles.SearchIcon}>
            <img src={voiceSearch} alt="voice-search" />
          </div>
        </div>
      </div>
      <img src={profileAvatar} alt="" className={styles.personIcon} />
    </header>
  );
};

export default Header;
