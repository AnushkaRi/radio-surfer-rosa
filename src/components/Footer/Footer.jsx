import CurrentTrack from "../CurrentTrack/CurrentTrack";
import PlayerControls from "../PlayerControls/PlayerControls";
import Volume from "../Volume/Volume";

import styles from "./styles.module.css";
import { useContext, useEffect } from "react";
import { PlayerContext, PlayerDispatchContext } from "../../PlayerContext";
import { getCurrentlyPlayingTrack } from "../../services/spotify";

const Footer = () => {
  const player = useContext(PlayerContext);
  const dispatch = useContext(PlayerDispatchContext);

  useEffect(() => {
    const fetchAndDispatch = async () => {
      const currentlyPlaying = await getCurrentlyPlayingTrack();
      dispatch({
        type: "change-track",
        track: currentlyPlaying.item,
        isPlaying: currentlyPlaying.is_playing,
        progress: currentlyPlaying.progress_ms,
      });
    };
    fetchAndDispatch();
  }, [dispatch]);

  return (
    <div className={styles.footer_container}>
      <CurrentTrack track={player?.track} />
      <PlayerControls player={player} />
      <Volume />
    </div>
  );
};

export default Footer;
