/* eslint-disable prettier/prettier */
import "./Header.css";
import header from "../../../../assets/header.jpg";

const Header = () => {
  return (
    <section className="header">
      <img src={header} alt="header" className="header-img" />
      <p className="header-text">Test Text Test Text Test Text Test Text Test Text Test Text</p>
    </section>
  );
};

export default Header;
