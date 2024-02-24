import { end_page } from "../constants";
import styles from "./NoResiPage.module.css"
const NoResiPage = () => {
  return (
    <>
      <div className={styles.endpagecard}>
        <img className={styles.endpage} src={end_page} alt="end-page" />
      </div>

      <div className={styles.tagline}>
        <h1>NO RESIDENTS</h1>
      </div>
    </>
  );
};

export default NoResiPage;
