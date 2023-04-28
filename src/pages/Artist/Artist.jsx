import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { msToMinutesAndSeconds } from "../../services/Spotify";

import apiClient from "../../services/Spotify";
import Card from "../../components/Card/Card";
import CardGrid from "../../components/CardGrid/CardGrid";
import styles from "./styles.module.css";

const Artist = () => {
  const params = useParams();
  const [artist, setArtist] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    apiClient.get(`artists/${params.id}`).then((response) => {
      setArtist(response.data);
      console.log(response);
    });

    apiClient.get(`artists/${params.id}/top-tracks?market=US`).then((response) => {
      setTracks(
        response.data.tracks.map((track) => {
          return {
            id: track.id,
            image: track.album.images[2].url,
            name: track.name,
            duration: track.duration_ms,
          };
        }),
      );
      console.log(response);
    });

    apiClient.get(`artists/${params.id}/albums?include_groups=album`).then((response) => {
      setAlbums(
        response.data.items.map((album) => {
          return {
            image: album.images[1].url,
            title: album.name,
            year: album.release_date.split("-")[0],
            artist: album.artists[0].name,
            id: album.id,
          };
        }),
      );
      console.log(response);
    });
  }, []);

  return (
    <div className={styles.artist_container}>
      <div className={styles.cover} key={artist.id}>
        <img src={artist.images?.[0].url} />
        <div className={styles.info}>
          <span className={styles.name}>{artist?.name}</span>
        </div>
      </div>

      <div className={styles.tracks_container}>
        <div className={styles.section_title}>Popular</div>
        {tracks &&
          tracks.map((track, index) => {
            return (
              <div className={styles.track_row}>
                <div className={styles.col}>
                  <span>{index + 1}</span>
                </div>
                <div className={styles.track_details} key={track.id}>
                  <img src={track.image} />
                  <div className={styles.col}>
                    <span className={styles.track_name}>{track.name}</span>
                  </div>
                </div>
                <div className={styles.col}>
                  <span>{msToMinutesAndSeconds(track.duration)}</span>
                </div>
              </div>
            );
          })}
      </div>

      <div className={styles.album_container}>
        <div className={styles.section_title}>Discography</div>
        <CardGrid>
          {albums &&
            albums.map((album) => (
              <Card
                key={album.id}
                imageUrl={album.image}
                title={album.title}
                description={album.year}
                name={album.artist}
                // link={`/album/${album.id}`}
              />
            ))}
        </CardGrid>
      </div>
    </div>
  );
};

export default Artist;
