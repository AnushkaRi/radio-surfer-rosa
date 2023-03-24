import { useState, useEffect } from "react";
import Login from "../Login/Login";
import Layout from "../Layout/Layout";
import { setClientToken } from "../../services/Authorization";

const Redirect = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
    console.log(token);
  }, []);

  return !token ? <Login /> : <Layout />;
};
export default Redirect;
