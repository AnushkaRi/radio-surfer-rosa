import { useState, useEffect } from "react";

import apiClient from "../../services/Spotify";
import styles from "./styles.module.css";

const Playlist = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  const playlistId = "6ovgzApDXLyQfCVomOeNWW";

  useEffect(() => {
    apiClient.get(`playlists/${playlistId}`).then((response) => {
      setSelectedPlaylist(response.data);
      console.log(response.data);

      /* const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      console.log(selectedPlaylist); */
    });
  }, [playlistId]);

  return (
    <div className={styles.playlist_container}>
      <div className={styles.image}>
        <img src={selectedPlaylist.images[0].url}></img>
      </div>
      <div className={styles.details}>
        <span className={styles.type}>PLAYLIST</span>
        <h2 className={styles.title}> {selectedPlaylist.name}</h2>
      </div>
      <div className={styles.list}></div>
    </div>
  );
};

export default Playlist;
