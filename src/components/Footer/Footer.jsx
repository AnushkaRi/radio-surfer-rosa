import CurrentTrack from "../CurrentTrack/CurrentTrack";
import PlayerControls from "../PlayerControls/PlayerControls";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <CurrentTrack />
      <PlayerControls />
    </div>
  );
};

export default Footer;
