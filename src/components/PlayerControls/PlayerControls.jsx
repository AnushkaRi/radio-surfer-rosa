import { useState } from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsShuffle } from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";

import styles from "./styles.module.css";

const PlayerControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const changePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className={styles.controls_container}>
      <div className={styles.shuffle}>
        <BsShuffle />
      </div>
      <div className={styles.previous}>
        <CgPlayTrackPrev />
      </div>
      <div className={styles.state} onClick={changePlayPause}>
        {isPlaying ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
      </div>
      <div className={styles.next}>
        <CgPlayTrackNext />
      </div>
      <div className={styles.repeat}>
        <FiRepeat />
      </div>
    </div>
  );
};

export default PlayerControls;
