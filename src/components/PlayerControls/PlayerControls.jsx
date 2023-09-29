import { useState, useContext, useEffect } from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";

import { apiClient } from "../../services/spotify";
import { getCurrentlyPlayingTrack } from "../../services/spotify";
import { PlayerDispatchContext } from "../../PlayerContext";
import { msToMinutesAndSeconds } from "../../helpers/time";
import styles from "./styles.module.css";

const PlayerControls = ({ player }) => {
  const dispatch = useContext(PlayerDispatchContext);
  const [progress, setProgress] = useState(player.progress ?? 0);

  const handleChangeTrack = async (type) => {
    await apiClient.post(`me/player/${type}`);
    const currentlyPlaying = await getCurrentlyPlayingTrack();
    dispatch({
      type: "change-track",
      track: currentlyPlaying.item,
      isPlaying: currentlyPlaying.is_playing,
    });
    setProgress(0);
  };

  useEffect(() => {
    if (player.isPlaying) {
      if (player.progress) {
        setProgress(player.progress);
      }

      const intervalId = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress > player.track?.duration_ms) {
            clearInterval(intervalId);
            return 0;
          }

          return prevProgress + 1000;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [player.progress, player.isPlaying, player.track?.duration_ms]);

  const togglePlayback = () => {
    const state = player.isPlaying ? "pause" : "play";

    apiClient.put(`me/player/${state}`);

    dispatch({
      type: player.isPlaying ? "stop-playback" : "start-playback",
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls_container}>
        <div
          className={styles.previous}
          onClick={() => handleChangeTrack("previous")}
        >
          <CgPlayTrackPrev />
        </div>
        <div className={styles.state}>
          {player.isPlaying ? (
            <BsFillPauseCircleFill onClick={togglePlayback} />
          ) : (
            <BsFillPlayCircleFill onClick={togglePlayback} />
          )}
        </div>
        <div className={styles.next} onClick={() => handleChangeTrack("next")}>
          <CgPlayTrackNext />
        </div>
      </div>
      <div className={styles.progress_container}>
        <div className={styles.current_time}>
          {msToMinutesAndSeconds(progress)}
        </div>
        <input
          type="range"
          className={styles.progress_bar}
          min={0}
          max={player.track?.duration_ms ?? 100}
          defaultValue={progress}
        />
        <div className={styles.duration}>
          {player.track?.duration_ms
            ? msToMinutesAndSeconds(player.track?.duration_ms)
            : "--:--"}
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
