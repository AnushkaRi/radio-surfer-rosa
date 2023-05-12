import { useState } from "react";

import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import apiClient from "../../services/Spotify";
import styles from "./styles.module.css";

const Volume = () => {
  const [volume, setVolume] = useState(50);
  const [muted, setMuted] = useState(false);

  const handleVolumeChange = async () => {
    apiClient.put(`me/player/volume?volume_percent=${volume}`).then((response) => {
      return response;
    });
  };

  /*  const toggleMute = () => {
    setMuted(!muted);
  }; */

  const handleUnmute = () => {
    setMuted(!muted);
    setVolume(50);
    handleVolumeChange();
  };

  const handleMute = () => {
    setMuted(!muted);
    setVolume(0);
    handleVolumeChange();
  };

  return (
    <div className={styles.volume_container}>
      <div className={styles.volume_icon}>
        {muted ? (
          <FaVolumeMute color="white" onClick={handleUnmute} />
        ) : (
          <FaVolumeUp color="white" onClick={handleMute} />
        )}
        {muted ? <span className={styles.tooltip}>Unmute</span> : <span className={styles.tooltip}>Mute</span>}
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
