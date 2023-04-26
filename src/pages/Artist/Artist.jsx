import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import apiClient from "../../services/Spotify";
import styles from "./styles.module.css";

const Artist = () => {
  const params = useParams();
  const [artist, setArtist] = useState();

  useEffect(() => {
    apiClient.get(`artists/${params.id}`).then((response) => {
      setArtist(response);
      console.log(response);
    });
  }, []);

  return <div className={styles.artist_container}></div>;
};

export default Artist;
