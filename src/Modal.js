import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ResidentCard from "./ResidentCard";

const Modal = ({ onClose, planet }) => {
  const [residentData, setResidentData] = useState([]);

  useEffect(() => {
    const fetchResidentData = async () => {
      const data = await Promise.all(
        planet.residents.map(async (residentUrl) => {
          const response = await fetch(residentUrl);
          return response.json();
        })
      );
      setResidentData(data);
    };

    fetchResidentData();
  }, [planet.residents]);

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <div className="modal-content">
          <h2>{planet.name} Residents</h2>
          <div className="resident-list">
            {residentData.map((resident, index) => (
              <ResidentCard key = {index} resident = {resident}/>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
