import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./styles.module.css";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

const Playlists = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }

    /*  const getPlaylistsData = () => {
      axios
        .get(PLAYLISTS_ENDPOINT, {
          headers: {
            Authorization: "Bearer" + token,
          },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPlaylistsData(); */
  }, []);

  return <div className={styles.playlist_container}>Playlists</div>;
};

export default Playlists;
