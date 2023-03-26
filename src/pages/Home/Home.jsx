import { useState, useEffect } from "react";

import apiClient from "../../services/Spotify";
import { showTimeOfDay } from "../../helpers/TimeOfDay";
import styles from "./styles.module.css";

const Home = () => {
  const [topArtists, setTopArtist] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const timeOfday = showTimeOfDay();

  /*  useEffect(() => {
    apiClient.get("artists/id/top-tracks").then((response) => {
      setTopTracks(response.data);
      console.log(response.data);
    });
  }, []); */
  return (
    <div className={styles.home_container}>
      <div className={styles.greeting}>
        <h1>Good {timeOfday}</h1>
      </div>
    </div>
  );
};

export default Home;
