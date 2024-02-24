import { useState, useEffect } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ nextPage, prevPage, next, prev }) => {
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    setLoading(false);
  }, [next, prev]);

  const handleNextPageClick = () => {
    setLoading(true);
    nextPage();
  };

  const handlePrevPageClick = () => {
    setLoading(true);
    prevPage();
  };

  return (
    <div className={styles.pagination}>
      {loading ? (
        <div className={styles.loader}></div>
      ) : (
        <>
          {prev && <button onClick={handlePrevPageClick}>Previous</button>}
          {next && <button onClick={handleNextPageClick}>Next</button>}
        </>
      )}
    </div>
  );
};

export default Pagination;
