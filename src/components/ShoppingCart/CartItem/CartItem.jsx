import Count from "../Count/Count";
import { IoCloseOutline } from "react-icons/io5";
import "./CartItem.scss";

const CartItem = () => {
  return (
    <div className="shopping_cart_item">
      <div className="img"></div>
      <p className="item_name">Apple iPhone 14 Pro Max 128Gb Deep Purple</p>
      <Count />
      <p className="item_price">$1399</p>
      <IoCloseOutline className="remove_item" />
    </div>
  );
};

export default CartItem;
