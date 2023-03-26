import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { setClientToken } from "../../services/Spotify";

const Redirect = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
      navigate("/home");
    } else if (token) {
      setToken(token);
      setClientToken(token);
      navigate("/home");
    } else {
      navigate("/");
    }
    console.log(token);
  }, []);

  return <div>Redirect!</div>;
};
export default Redirect;
