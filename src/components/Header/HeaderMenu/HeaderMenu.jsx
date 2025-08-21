import HeaderItems from "../HeaderItems/HeaderItems";
import Navigation from "../Navigation/Navigation";
import { Search } from "../Search/Search";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import "./HeaderMenu.scss";

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  return (
    <article className="header_menu">
      <section className={`header_menu_items ${isOpen ? "open" : "close"}`}>
        <Search />
        <Navigation />
        <HeaderItems />
      </section>
      <div className="menu_btn" onClick={toggleMenu}>
        {isOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
      </div>
    </article>
  );
};

export default HeaderMenu;
