import styles from "./styles.module.css";

const CardGrid = (props) => {
  return <div className={styles.grid}>{props.children}</div>;
};

export default CardGrid;
