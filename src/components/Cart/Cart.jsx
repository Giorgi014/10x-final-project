import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useData } from "../Context/DataContext";
import { useState } from "react";
import { AuthRequired } from "../Authorization/AuthRequired/AuthRequired";
import { Authorization } from "../Route";
import "./Cart.scss";

export const Cart = ({ id, url, description, price }) => {
  const navigate = useNavigate();
  const { addToCart, cartItems, removeFromCart, isAuthenticated } = useData();
  const [showAuthRequired, setShowAuthRequired] = useState(false);
  const [showAuthorization, setShowAuthorization] = useState(false);

  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };

  const isInCart = cartItems.some((item) => item.id === id);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      setShowAuthRequired(true);
      return;
    }

    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart({ id, url, description, price });
    }
  };

  const closeAuthRequired = () => setShowAuthRequired(false);
  const openAuthorization = () => setShowAuthorization(true);
  const closeAuthorization = () => setShowAuthorization(false);

  return (
    <div key={id} className="product_card" title={description}>
      <div className="icons_cont">
        <IoIosHeartEmpty className="heart_icon" />
        <IoCartOutline
          className={`cart_icon ${isInCart ? "in_cart" : ""}`}
          onClick={handleAddToCart}
        />
      </div>
      <div className="product">
        <img src={url} alt={description} />
        <p className="product_title">{description}</p>
        <p className="product_price">${price}</p>
      </div>
      <Button variant="buy_now" onClick={handleNavigate}>
        <span>Buy Now</span>
      </Button>
      {showAuthRequired && (
        <AuthRequired
          onClose={closeAuthRequired}
          onOpenAuth={openAuthorization}
        />
      )}
      {showAuthorization && <Authorization onClose={closeAuthorization} />}
    </div>
  );
};
