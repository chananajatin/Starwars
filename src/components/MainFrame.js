import { useEffect, useState } from "react";
import PlanetCard from "./PlanetCard";
import Shimmer from "./Shimmer";
import Pagination from "./Pagination";
import Modal from "./Modal"; 
import styles from "./MainFrame.module.css";
const MainFrame = () => {
  const [planetData, setPlanetData] = useState(null);
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://swapi.dev/api/planets/?format=json");
    const json = await data.json();
    setPlanetData(json?.results);
    setNext(json.next);
    setPrev(json.prev);
  };

  const nextPage = async () => {
    const data = await fetch(next);
    const json = await data.json();
    setPlanetData(json?.results);
    setNext(json.next);
    setPrev(json.previous);
  };

  const prevPage = async () => {
    const data = await fetch(prev);
    const json = await data.json();
    setPlanetData(json?.results);
    setNext(json.next);
    setPrev(json.previous);
  };

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
    setShowModal(true);

    console.log(planet);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.mainBox}>
        {planetData === null ? (
          <Shimmer />
        ) : (
          planetData.map((planet, index) => (
            <PlanetCard
              key={index}
              planetdata={planet}
              onClick={() => handlePlanetClick(planet)}
            />
          ))
        )}
      </div>
      {showModal && selectedPlanet && (
        <Modal onClose={closeModal} planet={selectedPlanet}>
          <h2>{selectedPlanet.name} Residents</h2>
          <ul>
            {selectedPlanet.residents.map((resident, index) => (
              <li key={index}>{resident}</li>
            ))}
          </ul>
        </Modal>
      )}
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        next={next}
        prev={prev}
      />
    </>
  );
};

export default MainFrame;
