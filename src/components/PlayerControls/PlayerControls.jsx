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
    <div className={styles.wrapper}>
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
      <div className={styles.progress_container}>
        <div className={styles.current_time}>00:00</div>
        <input type="range" className={styles.progress_bar} />
        <div className={styles.duration}>00:00</div>
      </div>
    </div>
  );
};

export default PlayerControls;
