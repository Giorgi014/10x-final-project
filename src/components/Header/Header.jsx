import { Logo } from "../Route";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header_container">
      <img src={Logo} alt="Logo" className="header_logo" />
      <HeaderMenu />
    </header>
  );
};

export default Header;
