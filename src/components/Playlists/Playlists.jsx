import { useState, useEffect } from "react";

import apiClient from "../../services/Authorization";
import styles from "./styles.module.css";

const Playlists = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    apiClient.get("me/playlists").then((response) => {
      setPlaylists(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  return (
    <div className={styles.playlists_container}>
      {playlists?.map((playlist, id) => (
        <button key={id} className={styles.btn}>
          {playlist.name}
        </button>
      ))}
    </div>
  );
};

export default Playlists;
