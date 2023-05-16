import { useEffect, useRef, useState } from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";

import apiClient from "../../services/Spotify";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./styles.module.css";

const PlayerControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleChangeTrack = async (type) => {
    apiClient.post(`me/player/${type}`).then((response) => {
      return response;
    });

    apiClient.get(`me/player/currently-playing`).then((response) => {
      return response;
    });
  };

  const changeState = () => {
    const state = isPlaying ? "pause" : "play";
    setIsPlaying(!isPlaying);
    apiClient.put(`me/player/${state}`).then((response) => {
      return response;
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls_container}>
        <div className={styles.previous} onClick={() => handleChangeTrack("previous")}>
          <CgPlayTrackPrev />
        </div>
        <div className={styles.state}>
          {isPlaying ? <BsFillPauseCircleFill onClick={changeState} /> : <BsFillPlayCircleFill onClick={changeState} />}
        </div>
        <div className={styles.next} onClick={() => handleChangeTrack("next")}>
          <CgPlayTrackNext />
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
