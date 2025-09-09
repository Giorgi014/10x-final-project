import Count from "../Count/Count";
import { IoCloseOutline } from "react-icons/io5";
import { useData } from "../../Context/DataContext";
import "./CartItem.scss";

const CartItem = ({ item }) => {
  const { removeFromCart, setCartItems } = useData();
  const { id, url, description, price, quantity } = item;

  const handleQuantityChange = (newQuantity) => {
    setCartItems((prev) =>
      prev.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity: newQuantity } : cartItem
      )
    );
  };

  return (
    <div className="shopping_cart_item">
      <img className="img" src={url} alt={description} />
      <p className="item_name">{description}</p>
      <Count quantity={quantity} onChangeQuantity={handleQuantityChange} />
      <p className="item_price">${(price * quantity).toFixed(2)}</p>
      <IoCloseOutline
        className="remove_item"
        onClick={() => removeFromCart(id)}
      />
    </div>
  );
};

export default CartItem;
