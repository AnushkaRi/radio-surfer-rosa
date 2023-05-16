import styles from "./styles.module.css";

const ProgressBar = () => {
  return (
    <div className={styles.progress_container}>
      <div className={styles.current_time}>00:00</div>
      <input type="range" className={styles.progress_bar} />
      <div className={styles.duration}>00:00</div>
    </div>
  );
};

export default ProgressBar;
