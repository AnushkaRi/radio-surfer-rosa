import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaClock } from "react-icons/fa";

import apiClient from "../../services/Spotify";
import styles from "./styles.module.css";

const Playlist = () => {
  const params = useParams();
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  useEffect(() => {
    apiClient.get(`playlists/${params.id}`).then((response) => {
      setSelectedPlaylist(response.data);
      console.log(response.data);
    });
  }, [params.id]);

  const msToMinutesAndSeconds = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + seconds;
  };

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
                <FaClock />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.tracks}>
          {selectedPlaylist.tracks?.items?.map(({ track }, index) => (
            <div className={styles.track_row} key={track.id}>
              <div className={styles.col}>
                <span>{index + 1}</span>
              </div>
              <div className={styles.track_details}>
                <img src={track.album.images[2].url} alt="track"></img>
                <div className={styles.col}>
                  <span className={styles.track_name}>{track.name}</span>
                  <span>{track.artists.map((artist) => artist.name)}</span>
                </div>
              </div>
              <div className={styles.col}>
                <span>{track.album.name}</span>
              </div>
              <div className={styles.col}>
                <span>{msToMinutesAndSeconds(track.duration_ms)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
