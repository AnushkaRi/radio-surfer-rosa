import { useState, useEffect } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import apiClient from "../../services/Spotify";
import styles from "./styles.module.css";

const UserBadge = () => {
  const [data, setData] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    apiClient.get("me").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  const onBadgeClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <div className={styles.badge_container}>
      <button type="button" className={styles.badge} onClick={onBadgeClick}>
        <div className={styles.avatar_container}>
          <img src={data?.images?.[0].url} alt="" className={styles.avatar} />
          <div>{data?.display_name}</div>
        </div>
        {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <button className={styles.menu_btn} type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserBadge;
