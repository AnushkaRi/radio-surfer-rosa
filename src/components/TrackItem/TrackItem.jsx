import { useContext } from "react";

import PlayButton from "../PlayButton/PlayButton";
import styles from "./styles.module.css";
import { startPlayback } from "../../services/spotify";
import { getCurrentlyPlayingTrack } from "../../services/spotify";
import { PlayerDispatchContext } from "../../PlayerContext";

const TrackItem = ({ index, image, name, artist, album, duration, uri }) => {
  const dispatch = useContext(PlayerDispatchContext);

  const play = async () => {
    await startPlayback([uri]);
    const currentlyPlaying = await getCurrentlyPlayingTrack();
    dispatch({
      type: "change-track",
      track: currentlyPlaying.item,
      isPlaying: currentlyPlaying.is_playing,
    });
  };

  return (
    <div className={styles.tracks}>
      <div className={styles.track_row}>
        <div className={styles.col}>
          {index && <span className={styles.index}>{index}</span>}
        </div>
        <div className={styles.track_details}>
          {image && <img src={image} alt="track"></img>}
          <div className={styles.col}>
            <span className={styles.track_name}>{name}</span>
            <span>{artist}</span>
          </div>
        </div>
        <div className={styles.col}>{album && <span>{album}</span>}</div>
        <div className={styles.col}>
          <span>{duration}</span>
        </div>
        <div type="button" className={styles.track_playbtn} onClick={play}>
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export default TrackItem;
