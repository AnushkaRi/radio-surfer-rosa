import { authorize } from "../../services/Authorization";

import styles from "./styles.module.css";

const Login = () => {
  return (
    <div className={styles.login_container}>
      <div className={styles.header}>Radio Surfer Rosa</div>
      <button className={styles.btn_login} onClick={authorize}>
        Login
      </button>
    </div>
  );
};

export default Login;
