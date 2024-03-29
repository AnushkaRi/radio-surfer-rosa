import { useEffect, useState, useCallback } from "react";

import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { apiClient } from "../../services/spotify";
import styles from "./styles.module.css";

const Volume = () => {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = useCallback(async () => {
    const response = await apiClient.put(
      `me/player/volume?volume_percent=${volume}`
    );
    return response;
  }, [volume]);

  const handleMute = () => {
    setVolume((pv) => (pv === 0 ? 50 : 0));
  };

  useEffect(() => {
    handleVolumeChange();
  }, [handleVolumeChange]);

  return (
    <div className={styles.volume_container}>
      <div className={styles.volume_icon} onClick={handleMute}>
        {volume === 0 ? (
          <FaVolumeMute color="white" />
        ) : (
          <FaVolumeUp color="white" />
        )}
        {volume === 0 ? (
          <span className={styles.tooltip}>Unmute</span>
        ) : (
          <span className={styles.tooltip}>Mute</span>
        )}
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
