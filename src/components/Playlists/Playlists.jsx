import { useState, useEffect } from "react";

import apiClient from "../../services/Authorization";
import styles from "./styles.module.css";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

const Playlists = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    apiClient.get("me/playlists").then((response) => {
      setPlaylists(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  return (
    <ul className={styles.playlists_container}>
      {playlists?.map((playlist) => (
        <li>{playlist.name}</li>
      ))}
    </ul>
  );
};

export default Playlists;
