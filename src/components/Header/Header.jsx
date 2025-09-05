import { Logo } from "../Route";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <header className="header_container">
      <img src={Logo} alt="Logo" className="header_logo" onClick={handleNavigate} />
      <HeaderMenu />
    </header>
  );
};

export default Header;
