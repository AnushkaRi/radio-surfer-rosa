import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Card = ({ link, imageUrl, title, description, name }) => {
  return (
    <Link to={link} className={styles.link_text}>
      <div className={styles.card}>
        <div className={styles.image_container}>
          <img src={imageUrl} alt="" className={styles.image}></img>
        </div>
        <div className={styles.title_container}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.description_container}>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
