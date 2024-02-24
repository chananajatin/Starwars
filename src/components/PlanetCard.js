import { Header_image, Planet_image } from "../constants";
import styles from "./PlanetCard.module.css";
const PlanetCard = ({ planetdata, onClick }) => {
  const { name, climate, terrain } = planetdata;

  const handleClick = () => {
    // Call the onClick function passed from the parent component
    onClick(planetdata);
  };

  return (
    <div className={styles.Planet_Card} onClick={handleClick}>
      <img className={styles.planetimg}src={Header_image} alt="Header" />
      <h4>NAME : {name.toUpperCase()}</h4>
      <h4>Climate : {climate.toUpperCase()}</h4>
      <h4>TERRAIN: {terrain.toUpperCase()}</h4>
    </div>
  );
};

export default PlanetCard;
