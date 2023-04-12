import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      navigate("/home");
    } else if (token) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  return <div>Redirect!</div>;
};
export default Redirect;
