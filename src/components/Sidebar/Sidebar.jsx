import { MdHomeFilled, MdSearch, MdWaves } from "react-icons/md";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import apiClient from "../../services/Spotify";
import styles from "./styles.module.css";

const Sidebar = () => {
  const [playlists, setPlaylists] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    apiClient.get("me/playlists").then((response) => {
      setPlaylists(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  return (
    <div className={styles.sidebar_container}>
      <div className={styles.header}>
        <MdWaves />
        <div>
          Radio <span>Surfer Rosa</span>
        </div>
      </div>
      <div className={styles.sections}>
        <button className={styles.btn} onClick={() => navigate("/")}>
          <MdHomeFilled />
          <span>Home</span>
        </button>
        <button className={styles.btn} onClick={() => navigate("/search")}>
          <MdSearch />
          <span>Search</span>
        </button>
      </div>
      <div className={styles.playlists_container}>
        {playlists?.map((playlist) => (
          <button key={playlist.id} className={styles.btn} onClick={() => navigate(`/playlist/${playlist.id}`)}>
            {playlist.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
