import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "../../components/Card/Card";
import CardGrid from "../../components/CardGrid/CardGrid";
import TrackItem from "../../components/TrackItem/TrackItem";
import { msToMinutesAndSeconds } from "../../helpers/time";
import styles from "./styles.module.css";
import { getArtist, apiClient } from "../../services/spotify";

const Artist = () => {
  const params = useParams();
  const [artist, setArtist] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchArtist() {
      const artist = await getArtist(params.id);
      setArtist(artist);
    }
    fetchArtist();

    apiClient
      .get(`artists/${params.id}/top-tracks?market=US`)
      .then((response) => {
        setTracks(
          response.data.tracks.map((track) => {
            return {
              id: track.id,
              image: track.album.images[2].url,
              name: track.name,
              duration: track.duration_ms,
              uri: track.uri,
            };
          })
        );
      });

    apiClient
      .get(`artists/${params.id}/albums?include_groups=album`)
      .then((response) => {
        setAlbums(
          response.data.items.map((album) => {
            return {
              image: album.images[1].url,
              title: album.name,
              year: album.release_date.split("-")[0],
              artist: album.artists[0].name,
              id: album.id,
            };
          })
        );
      });
  }, [params.id]);

  return (
    <div className={styles.artist_container}>
      <div className={styles.cover} key={artist.id}>
        <img src={artist.images?.[0].url} />
        <div className={styles.info}>
          <span className={styles.name}>{artist?.name}</span>
        </div>
      </div>

      <div className={styles.section_title}>Popular</div>
      <div className={styles.tracks_container}>
        {tracks.map((track, index) => (
          <TrackItem
            key={track.id}
            index={index + 1}
            image={track.image}
            name={track.name}
            duration={msToMinutesAndSeconds(track.duration)}
          />
        ))}
      </div>

      <div className={styles.section_title}>Discography</div>
      <div className={styles.album_container}>
        <CardGrid>
          {albums &&
            albums.map((album) => (
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

export default Artist;
