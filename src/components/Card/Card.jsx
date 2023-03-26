import styles from "./styles.module.css";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <img src={imageUrl} alt="" className={styles.image}></img>
      </div>
      <div className={styles.title_container}>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.description_container}>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default Card;
