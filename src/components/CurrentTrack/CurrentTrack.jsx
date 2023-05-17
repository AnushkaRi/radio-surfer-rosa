import { useState, useEffect } from "react";

import apiClient from "../../services/Spotify";
import styles from "./styles.module.css";

const CurrentTrack = ({}) => {
  const [currentTrack, setCurrentTrack] = useState([]);

  useEffect(() => {
    apiClient.get(`me/player/currently-playing`).then((response) => {
      if (response.data !== "") {
        setCurrentTrack(response.data.item);
        console.log(response);
      }
    });
  }, []);

  return (
    <div className={styles.track_container}>
      <div className={styles.track_image}>
        <img src={currentTrack.album?.images?.[1].url}></img>
      </div>
      <div className={styles.track_info} key={currentTrack.id}>
        <span className={styles.track_name}>{currentTrack.name}</span>
        <span className={styles.artist}> {currentTrack.artists?.map((artist) => artist.name).join(" & ")} </span>
      </div>
    </div>
  );
};

export default CurrentTrack;

/* */
