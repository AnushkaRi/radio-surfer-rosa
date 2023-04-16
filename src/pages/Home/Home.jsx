import { useState, useEffect } from "react";

import apiClient from "../../services/Spotify";
import { showTimeOfDay } from "../../helpers/TimeOfDay";
import styles from "./styles.module.css";

const Home = () => {
  const [topArtists, setTopArtist] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const timeOfday = showTimeOfDay();

  useEffect((limit = 6, timeRange = "medium_term") => {
    apiClient.get(`me/top/artists?limit=${limit}&time_range=${timeRange}`).then((response) => {
      setTopArtist(
        response.data.items.map((artist) => {
          return {
            image: artist.images[1].url,
            name: artist.name,
            type: artist.type,
          };
        }),
      );
      console.log(response.data);
    });

    apiClient.get(`me/top/tracks?limit=${limit}&time_range=${timeRange}`).then((response) => {
      setTopTracks(
        response.data.items.map((track) => {
          return {
            name: track.name,
            album: track.album.name,
            artist: track.artists.map((artist) => artist.name).join(" & "),
            image: track.album.images[1].url,
          };
        }),
      );
      console.log(response.data);
    });
  }, []);

  return (
    <div className={styles.home_container}>
      <div className={styles.greeting}>
        <h1>Good {timeOfday}</h1>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
