import CurrentTrack from "../CurrentTrack/CurrentTrack";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <CurrentTrack />
    </div>
  );
};

export default Footer;
