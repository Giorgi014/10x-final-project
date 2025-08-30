import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { Authorization } from "../../Route";
import { useState } from "react";
import "./HeaderItems.scss";

const HeaderItems = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleUser = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="header_items">
      <div className="favorites_cont">
        <IoIosHeartEmpty className="header_icon favorites" />
        <p className="favorite_icon icons">Favorites</p>
      </div>
      <div className="cart_cont">
        <IoCartOutline className="header_icon cart" />
        <p className="cart_icon icons">Cart</p>
      </div>
      <div className="user_cont" onClick={toggleUser}>
        <FiUser className="header_icon user" />
        <p className="user_icon icons">Account</p>
        {isOpen && <Authorization onClose={handleClose} />}
      </div>
    </div>
  );
};

export default HeaderItems;
