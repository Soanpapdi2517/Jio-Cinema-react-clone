import styles from "./Header.module.css";
import JcLogo from "../../../assets/jc_logo_v2.svg";
import crown from "../../../assets/crown.svg";
import searchIcon from "../../../assets/ic_search.svg";
import voiceSearch from "../../../assets/voice-search.svg";
import profileAvatar from "../../../assets/personImage.svg";
import { useState } from "react";
import { useEffect } from "react";
import Shows from "../Shows/Shows";
const Header = ({ content }) => {
  const navLinks = ["Home", "Sports", "Movies", "TV Shows", "More"];
  const [searching, setSearching] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const allContent = [...content.movies, ...content.anime, ...content.series];
    if (searching !== "") {
      const filteredData = allContent.filter((content) => {
        return content.title.toUpperCase().includes(searching.toUpperCase());
      });
      setFilteredData(filteredData);
    } else {
      setFilteredData([]);
    }
  }, [searching]);
  return (
    <>
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
              <img className={styles.icon} src={searchIcon} alt="search" />
            </div>

            <input
              type="text"
              placeholder="Movies, Shows and more..."
              className={styles.inputBox}
              onChange={(event) => {
                setSearching(event.target.value);
              }}
            />
            <div className={styles.SearchIcon}>
              <img
                className={styles.icon}
                src={voiceSearch}
                alt="voice-search"
              />
            </div>
          </div>
        </div>
        <img src={profileAvatar} alt="" className={styles.personIcon} />
      </header>
      {filteredData.length !== 0 && (
        <div className={styles.SearchResult}>
          {filteredData.map((SingleShow) => {
            return <Shows SingleShow={SingleShow} />;
          })}
        </div>
      )}
    </>
  );
};

export default Header;
