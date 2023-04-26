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
      navigate("/");
    } else if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return <div>Redirecting...</div>;
};
export default Redirect;
