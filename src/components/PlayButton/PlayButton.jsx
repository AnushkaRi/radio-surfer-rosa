import { useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

import styles from "./styles.module.css";

const PlayButton = () => {
  const [mode, setMode] = useState("paused");

  const toggle = () => {
    if (mode == "paused") {
      setMode("playing");
    } else {
      setMode("paused");
    }
  };

  return (
    <button type="button" className={styles.button} onClick={toggle}>
      {mode === "paused" ? <AiFillPlayCircle className={styles.icon} /> : <AiFillPauseCircle className={styles.icon} />}
    </button>
  );
};

export default PlayButton;
