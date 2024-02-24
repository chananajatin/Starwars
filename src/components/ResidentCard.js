import { Header_image } from "../constants";
import styles from "./ResidentCard.module.css"

const ResidentCard = ({ resident }) => {
  console.log(resident);
  return (
    <div className={styles.Residentcard}>
      <h4>NAME : {resident.name.toUpperCase()}</h4>
      <h4>Height : {resident.height}cm</h4>
      <h4>Gender: {resident.gender.toUpperCase()}</h4>
    </div>
  );
};

export default ResidentCard;
