import Navigation from "../Navigation/Navigation";
import { Search } from "../Search/Search";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import "./HeaderMenu.scss";

const HeaderMenu = () => {
  return (
    <article className="header_menu">
      <Search />
      <Navigation />
      <section className="header_menu_section">
        <IoIosHeartEmpty />
        <IoCartOutline />
        <FiUser />
      </section>
    </article>
  );
};

export default HeaderMenu;
