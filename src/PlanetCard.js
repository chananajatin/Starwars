import { Header_image, Planet_image } from "./constants";

const PlanetCard = ({ planetdata, onClick }) => {
  const { name, climate, terrain } = planetdata;

  const handleClick = () => {
    // Call the onClick function passed from the parent component
    onClick(planetdata);
  };

  return (
    <div className="Planet-card" onClick={handleClick}>
      <img className="header-image" src={Header_image} alt="Header" />
      <h4>NAME : {name}</h4>
      <h4>Climate : {climate}</h4>
      <h4>TERRAIN: {terrain}</h4>
    </div>
  );
};

export default PlanetCard;
