import styles from "./styles.module.css";

const CurrentTrack = ({ track }) => {
  if (!track) {
    return <div>&nbsp;</div>;
  }

  return (
    <div className={styles.track_container}>
      <div className={styles.track_image}>
        <img src={track.album?.images?.[1].url}></img>
      </div>
      <div className={styles.track_info} key={track.id}>
        <span className={styles.track_name}>{track.name}</span>
        <span className={styles.artist}>
          {" "}
          {track.artists?.map((artist) => artist.name).join(" & ")}{" "}
        </span>
      </div>
    </div>
  );
};

export default CurrentTrack;
