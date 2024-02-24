import { Header_image } from "./constants";



const ResidentCard = ({resident}) => {
    console.log(resident)
  return (
    <div className="Resident-card" >
      <img className="header-image"/>
      <h4>NAME : {resident.name}</h4>
      <h4>Height : {resident.height}</h4>
      <h4>Gender: {resident.gender}</h4>
    </div>
  );
}

export default ResidentCard