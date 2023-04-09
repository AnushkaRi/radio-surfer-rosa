import styles from "./styles.module.css";
import { msToMinutesAndSeconds } from "../../services/Spotify";

const SearchResults = ({ searchArtistResults, searchTrackResults }) => {
  return (
    <div className={styles.results_container}>
      <div className={styles.results}>
        <h2>Top Result</h2>
        {searchArtistResults.map((artist) => {
          return (
            <div className={styles.artist_container}>
              <div className={styles.artist_image}>
                <img src={artist.image} alt="artist" />
              </div>
              <div className={styles.artist_name}>
                <span>{artist.name}</span>
              </div>
              <div className={styles.artist_type}>
                <span>{artist.type}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.results}>
        <h2>Songs</h2>
        {searchTrackResults.map((track) => {
          return (
            <div className={styles.track_container}>
              <div className={styles.track_row}>
                <div className={styles.track_details}>
                  <img src={track.image} />
                  <div className={styles.col}>
                    <span className={styles.track_name}>{track.title}</span>
                    <span>{track.artist}</span>
                  </div>
                </div>
                <div className={styles.col}>
                  <span>{msToMinutesAndSeconds(track.duration)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
