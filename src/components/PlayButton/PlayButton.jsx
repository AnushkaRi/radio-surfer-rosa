import { FaPlay } from "react-icons/fa";

import styles from "./styles.module.css";

const PlayButton = () => {
  return (
    <button type="button" className={styles.button}>
      <FaPlay className={styles.icon} />
    </button>
  );
};

export default PlayButton;
