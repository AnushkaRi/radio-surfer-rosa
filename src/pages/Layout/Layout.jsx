import { Outlet } from "react-router-dom";
import { useState } from "react";

import styles from "./styles.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
/* import { startPlayback } from "../../services/Spotify"; */

const Layout = () => {
  return (
    <div className={styles.radio_container}>
      <Sidebar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

/* const Layout = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const handleTrackClick = async (track) => {
    setCurrentTrack(track);
    try {
      await startPlayback(track.uri);
    } catch (error) {
      console.error("Error starting playback:", error);
    }
  };
  return (
    <div className={styles.radio_container}>
      <Sidebar />
      <Header />
      <Outlet onTrackClick={handleTrackClick} />
      <Footer currentTrack={currentTrack} />
    </div>
  );
};

export default Layout; */
