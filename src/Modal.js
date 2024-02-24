import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

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
  }, [planet.residents]);
 
 return ReactDOM.createPortal(
   <div className="modal-overlay">
     <div className="modal">
       <button className="close-button" onClick={onClose}>
         Close
       </button>
       <div className="modal-content">
         <h2>{planet.name} Residents</h2>
         {loading ? (
           <p>Loading...</p>
         ) : residentData.length > 0 ? (
           <div className="resident-list">
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
