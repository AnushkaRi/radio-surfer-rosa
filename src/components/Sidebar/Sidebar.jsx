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
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlists />
    </div>
  );
};

export default Sidebar;
