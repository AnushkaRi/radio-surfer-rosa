import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";

import apiClient from "../../services/Spotify";
import { msToMinutesAndSeconds } from "../../services/Spotify";
import styles from "./styles.module.css";

const Album = () => {
  const params = useParams();
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    apiClient.get(`albums/${params.id}`).then((response) => {
      setAlbum(response.data);
      console.log(response);
    });
  }, [params]);

  return (
    <div className={styles.album_container}>
      <div className={styles.cover} key={album.id}>
        <img src={album.images?.[1].url} />
        <div className={styles.info}>
          <span className={styles.type}>{album.album_type}</span>
          <span className={styles.album_name}>{album.name}</span>
          <span className={styles.artist_name}>{album.artists?.map((artist) => artist.name).join(" & ")}</span>
          <span className={styles.date}>{album.release_date?.split("-")[0]}</span>
          <span className={styles.total_tracks}>{album.total_tracks}</span>
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
        {album.tracks?.items?.map((track, index) => {
          return (
            <div className={styles.track_container}>
              <div className={styles.track_row}>
                <div className={styles.col}>
                  <span>{index + 1}</span>
                </div>
                <div className={styles.track_details} key={track.id}>
                  <div className={styles.col}>
                    <span className={styles.track_name}>{track.name}</span>
                    <span>{track.artists.map((artist) => artist.name).join(" & ")}</span>
                  </div>
                </div>
                <div className={styles.col}>
                  <span>{msToMinutesAndSeconds(track.duration_ms)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Album;
