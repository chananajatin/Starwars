import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import ResidentCard from "./ResidentCard";
import NoResiPage from "./NoResiPage";

const Modal = ({ onClose, planet }) => {
  const [residentData, setResidentData] = useState([]);
  const [loading, setLoading] = useState("true");
  console.log(loading);
  useEffect(() => {
    const fetchResidentData = async () => {
      const data = await Promise.all(
        planet.residents.map(async (residentUrl) => {
          const response = await fetch(residentUrl);
          return response.json();
        })
      );
      setResidentData(data);
      setLoading(false);
    };
    console.log(loading);

    fetchResidentData();
  }, [planet.residents, loading]);

  return ReactDOM.createPortal(
    <div className={styles.modaloverlay}>
      <div className={styles.modal}>
        <button className={styles.closebutton} onClick={onClose}>
          &#215;
        </button>

        <div className={styles.modalcontent}>
          <h2>{planet.name} Residents</h2>
          {loading ? (
            <p>Loading...</p>
          ) : residentData.length > 0 ? (
            <div className={styles.residentlist}>
              {residentData.map((resident, index) => (
                <ResidentCard key={index} resident={resident} />
              ))}
            </div>
          ) : (
            <NoResiPage />
          )}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
