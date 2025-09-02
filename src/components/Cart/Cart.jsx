import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "../Button/Button";
import "./Cart.scss";

export const Cart = ({ id, url, description, price }) => {
  return (
    <div key={id} className="product_card" title={description}>
      <div className="icons_cont">
        <IoIosHeartEmpty className="heart_icon" />
        <IoCartOutline className="cart_icon"/>
      </div>
      <div className="product">
        <img src={url} alt={description} />
        <p className="product_title">{description}</p>
        <p className="product_price">{`$${price}`}</p>
      </div>
      <Button variant="buy_now">
        <span>Buy Now</span>
      </Button>
    </div>
  );
};
