import styles from "./styles.module.css";

const TrackItem = ({ index, imageUrl, title, artist, album, duration }) => {
  return (
    <div className={styles.tracks}>
      <div className={styles.track_row}>
        <div className={styles.col}>{index && <span>{index}</span>}</div>
        <div className={styles.track_details}>
          {imageUrl && <img src={imageUrl} alt="track"></img>}
          <div className={styles.col}>
            <span className={styles.track_name}>{title}</span>
            <span>{artist}</span>
          </div>
        </div>
        {album && (
          <div className={styles.col}>
            <span>{album}</span>
          </div>
        )}
        <div className={styles.col}>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default TrackItem;
