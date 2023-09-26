import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";

import TrackItem from "../../components/TrackItem/TrackItem";
import { getAlbum } from "../../services/spotify";
import { msToMinutesAndSeconds } from "../../helpers/time";
import styles from "./styles.module.css";

const Album = () => {
  const params = useParams();
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    async function fetchAlbum() {
      const album = await getAlbum(params.id);
      setAlbum(album);
    }
    fetchAlbum();
  }, [params]);

  return (
    <div className={styles.album_container}>
      <div className={styles.cover} key={album.id}>
        <img src={album.images?.[1].url} />
        <div className={styles.info}>
          <span className={styles.type}>{album.album_type}</span>
          <span className={styles.album_name}>{album.name}</span>
          <div className={styles.info_inline}>
            <span className={styles.artist_name}>
              {album.artists?.map((artist) => artist.name).join(" & ")}
            </span>
            <span>&#x2022;</span>
            <span className={styles.date}>
              {album.release_date?.split("-")[0]}
            </span>
            <span>&#x2022;</span>
            <span className={styles.total_tracks}>
              {album.total_tracks} songs
            </span>
          </div>
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
              <span className={styles.clock}>
                <FaClock color="white" />
              </span>
            </div>
          </div>
        </div>

        {album.tracks?.items?.map((track, index) => (
          <TrackItem
            key={track.id}
            index={index + 1}
            name={track.name}
            artist={track.artists.map((artist) => artist.name).join(" & ")}
            duration={msToMinutesAndSeconds(track.duration_ms)}
            uri={track.uri}
          />
        ))}
      </div>
    </div>
  );
};

export default Album;
