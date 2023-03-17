import styles from "./styles.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className={styles.radio_container}>
      <Sidebar />
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Layout;
