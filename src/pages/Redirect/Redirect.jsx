import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import style from "./styles.module.css";

const Redirect = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    let token = hash
      .substring(1)
      .split("&")
      .find((elem) => elem.startsWith("access_token"))
      .split("=")[1];

    if (token) {
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      navigate("/home");
    } else {
      navigate("/");
    }
    setToken(token);
    console.log(token);
  }, []);

  return (
    <div className={style.redirect_container}>
      <div className={style.message}>Redirecting to Radio Surfer Rosa!</div>
    </div>
  );
};

export default Redirect;
