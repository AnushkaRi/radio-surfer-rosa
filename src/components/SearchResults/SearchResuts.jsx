import styles from "./styles.module.css";

const SearchResults = ({ artist, track }) => {
  return (
    <div className={styles.results_container}>
      <div className={styles.artist_container}>
        <div className={styles.artist_name}>
          <span>{artist.name}</span>
        </div>
        <div className={styles.artist_type}>
          <span>{artist.type}</span>
        </div>
        <div className={styles.artist_genre}>
          <span>{artist.genre}</span>
        </div>
        <div className={styles.artist_image}>
          <img src={artist.image} alt="artist" />
        </div>
      </div>
      <div className={styles.track_container}></div>
    </div>
  );
};

export default SearchResults;
