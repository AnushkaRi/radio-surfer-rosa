import PlayButton from "../PlayButton/PlayButton";
import styles from "./styles.module.css";

const TrackItem = ({ index, imageUrl, title, artist, album, duration }) => {
  return (
    <div className={styles.tracks}>
      <div className={styles.track_row}>
        <div className={styles.col}>{index && <span className={styles.index}>{index}</span>}</div>
        <div className={styles.track_details}>
          {imageUrl && <img src={imageUrl} alt="track"></img>}
          <div className={styles.col}>
            <span className={styles.track_name}>{title}</span>
            <span>{artist}</span>
          </div>
        </div>
        <div className={styles.col}>{album && <span>{album}</span>}</div>
        <div className={styles.col}>
          <span>{duration}</span>
        </div>
        <div className={styles.track_playbtn}>
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export default TrackItem;
