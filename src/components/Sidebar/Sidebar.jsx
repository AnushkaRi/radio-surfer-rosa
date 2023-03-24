import { MdHomeFilled, MdSearch, MdWaves } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";

import styles from "./styles.module.css";
import Playlists from "../Playlists/Playlists";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.header}>
        <MdWaves />
        <div>
          Radio <span>Surfer Rosa</span>
        </div>
      </div>
      <div className={styles.sections}>
        <button className={styles.btn}>
          <MdHomeFilled />
          <span>Home</span>
        </button>
        <button className={styles.btn}>
          <MdSearch />
          <span>Search</span>
        </button>
        <button className={styles.btn}>
          <IoLibrary />
          <span>Your Library</span>
        </button>
      </div>
      <Playlists />
    </div>
  );
};

export default Sidebar;
