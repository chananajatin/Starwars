import { Header_image } from "./constants";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-image">
          <img className="logo" src={Header_image}  alt = "header"/>
        </div>

      </div>
    </>
  );
};

export default Header;
