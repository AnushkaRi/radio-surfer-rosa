import styles from "./styles.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import Footer from "../../components/Footer/Footer";

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
