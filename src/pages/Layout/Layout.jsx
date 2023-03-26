import { Outlet } from "react-router-dom";

import styles from "./styles.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
  return (
    <div className={styles.radio_container}>
      <Sidebar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
