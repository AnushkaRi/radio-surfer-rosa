import { useState, useEffect } from "react";

import styles from "./styles.module.css";

const Playlist = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  return <div className={styles.playlist_container}>Playlist</div>;
};

export default Playlist;
