import { useState } from "react";

import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import apiClient from "../../services/Spotify";
import styles from "./styles.module.css";

const Volume = () => {
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);

  const handleVolumeChange = async () => {
    apiClient.put(`me/player/volume?volume_percent=${volume}`).then((response) => {
      return response;
    });
  };

  const handleMute = () => {
    if (isMuted) {
      setVolume((prevVolume) => (prevVolume === 0 ? 50 : prevVolume));
      setIsMuted(false);
    } else {
      setVolume(0);
      setIsMuted(true);
    }
    handleVolumeChange();
  };

  return (
    <div className={styles.volume_container}>
      <div className={styles.volume_icon} onClick={handleMute}>
        {isMuted ? <FaVolumeUp color="white" /> : <FaVolumeMute color="white" />}
        {isMuted ? <span className={styles.tooltip}>Mute</span> : <span className={styles.tooltip}>Unmute</span>}
      </div>
      <div className={styles.volume_slider}>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => {
            setVolume(e.target.value);
            handleVolumeChange();
          }}
        ></input>
      </div>
    </div>
  );
};

export default Volume;
