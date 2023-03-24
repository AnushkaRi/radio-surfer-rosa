import { useState, useEffect } from "react";

import apiClient from "../../services/Authorization";
import styles from "./styles.module.css";

const UserBadge = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    apiClient.get("me").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className={styles.badge_container}>
      <div className={styles.avatar_container}>
        <img src={data?.images?.[0].url} alt="" className={styles.avatar} />
        <div>{data?.display_name}</div>
      </div>
    </div>
  );
};

export default UserBadge;
