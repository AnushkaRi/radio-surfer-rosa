import { authorize } from "../../services/Authorization";

import style from "./styles.module.css";

const Login = () => {
  return (
    <div className={style.login_container}>
      <div className={style.header}>
        Radio <span>Surfer Rosa</span>
      </div>
      <button className={style.btn_login} onClick={authorize}>
        Login
      </button>
    </div>
  );
};

export default Login;
