import CurrentTrack from "../CurrentTrack/CurrentTrack";
import PlayerControls from "../PlayerControls/PlayerControls";
import Volume from "../Volume/Volume";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </div>
  );
};

export default Footer;
