import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import UserBadge from "../UserBadge/UserBadge";
import styles from "./styles.module.css";

const Header = () => {
  const navigate = useNavigate();

  // go back & forward
  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  return (
    <div className={styles.header_container}>
      <div className={styles.nav_btn_container}>
        <button className={styles.nav_btn} onClick={goBack}>
          <FaChevronLeft />
        </button>
        <button className={styles.nav_btn} onClick={goForward}>
          <FaChevronRight />
        </button>
      </div>

      <UserBadge />
    </div>
  );
};

export default Header;
