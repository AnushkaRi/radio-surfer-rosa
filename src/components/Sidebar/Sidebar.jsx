import styles from "./styles.module.css";
import { MdHomeFilled, MdSearch, MdWaves } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.header}>
        <MdWaves />
        <span>Radio Surfer Rosa</span>
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
    </div>
  );
};

export default Sidebar;
