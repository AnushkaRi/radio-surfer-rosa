import { FaClock } from "react-icons/fa";

import { msToMinutesAndSeconds } from "../../services/Spotify";
import TrackItem from "../TrackItem/TrackItem";
import styles from "./styles.module.css";

const PlaylistResults = ({ selectedPlaylist }) => {
  return (
    <div className={styles.playlist_container}>
      <div className={styles.playlist_details}>
        <div className={styles.image}>
          <img src={selectedPlaylist.images?.[0].url}></img>
        </div>
        <div className={styles.details}>
          <div className={styles.type}>PLAYLIST</div>
          <h2 className={styles.title}> {selectedPlaylist.name}</h2>
        </div>
      </div>
      <div className={styles.list_container}>
        <div className={styles.list}>
          <div className={styles.header}>
            <div className={styles.col}>
              <span>#</span>
            </div>
            <div className={styles.col}>
              <span>Title</span>
            </div>
            <div className={styles.col}>
              <span>Album</span>
            </div>
            <div className={styles.col}>
              <span>
                <FaClock color="white" />
              </span>
            </div>
          </div>
        </div>

        {selectedPlaylist.tracks?.items?.map(({ track }, index) => (
          <TrackItem
            key={track.id}
            index={index + 1}
            imageUrl={track.album?.images?.[2].url}
            title={track.name}
            artist={track.artists?.map((artist) => artist.name).join(" & ")}
            album={track.album?.name}
            duration={msToMinutesAndSeconds(track.duration_ms)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaylistResults;
