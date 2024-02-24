import { Header_image } from "../constants";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.pic}>
          <img className={styles.logo} src={Header_image} alt="header" />
        </div>
      </div>
    </>
  );
};

export default Header;
