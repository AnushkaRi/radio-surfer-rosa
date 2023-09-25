import { Link } from "react-router-dom";

import Card from "../Card/Card";
import CardGrid from "../CardGrid/CardGrid";
import TrackItem from "../TrackItem/TrackItem";
import { msToMinutesAndSeconds } from "../../helpers/time";
import styles from "./styles.module.css";

const SearchResults = ({
  search,
  searchArtistResults,
  searchTrackResults,
  searchAlbumResults,
}) => {
  return (
    <div className={styles.results_wrapper}>
      <div className={styles.results_container}>
        <div className={styles.results}>
          {search && <h2>Top Result</h2>}

          {searchArtistResults.map((artist) => {
            return (
              <Link to={`/artist/${artist?.id}`} className={styles.link_text}>
                <div className={styles.artist_container} key={artist.id}>
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
              </Link>
            );
          })}
        </div>

        <div className={styles.results}>
          {search && <h2 className={styles.song_header}>Songs</h2>}

          {searchTrackResults.map((track, index) => (
            <div key={index} className={styles.tracks_container}>
              <TrackItem
                key={track}
                index={index + 1}
                imageUrl={track.image}
                name={track.title}
                artist={track.artist}
                duration={msToMinutesAndSeconds(track.duration)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.album_container}>
        {search && <h2>Albums</h2>}

        <CardGrid>
          {searchAlbumResults.map((album) => (
            <Card
              key={album.id}
              imageUrl={album.image}
              title={album.title}
              description={album.year}
              name={album.artist}
              link={`/album/${album.id}`}
            />
          ))}
        </CardGrid>
      </div>
    </div>
  );
};

export default SearchResults;
