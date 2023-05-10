import { FaVolumeUp } from "react-icons/fa";
import styles from "./styles.module.css";

const Volume = () => {
  const setVolume = async () => {
    apiClient.put(`me/player/volume?volume_percent=50'`).then((response) => {
      return response;
    });
  };

  return (
    <div className={styles.volume_container}>
      <div className={styles.volume_icon}>
        <FaVolumeUp color="white" />
      </div>
      <div className={styles.volume_slider}>
        <input type="range" min={0} max={100} onMouseUp={(e) => setVolume(e.target.value)}></input>
      </div>
    </div>
  );
};

export default Volume;
