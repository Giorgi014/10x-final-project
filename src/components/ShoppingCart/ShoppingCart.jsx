import { useEffect, useState } from "react";
import CartItem from "./CartItem/CartItem";
import { Button } from "../Button/Button";
import { useData } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";
import "./ShoppingCart.scss";

const ShoppingCart = () => {
  const { cartItems } = useData();
  const navigate = useNavigate();
  const [estimate] = useState(50);
  const [shipping] = useState(29);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalPrice = () => {
    return subtotal + estimate + shipping;
  }

  const handleNavigation = () => {
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <article className="shopping_cart_container">
        <h2 className="empty_shopping_cart">Shopping Cart</h2>
        <div className="empty_cart_message">
          <p>Your cart is empty</p>
          <p>Browse our products and add something to make it happy</p>
          <p className="start_shoping" onClick={handleNavigation}>
            Start Shopping
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="shopping_cart_container">
      <h2 className="shopping_cart_title">Shopping Cart</h2>
      <section className="shopping">
        <div className="cart_items_list">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="order_summary_cont">
          <p className="order_summary_text">Order Summary</p>
          <div className="subtotal_container">
            <div className="subtotal_cont">
              <p className="subtotal">Subtotal</p>
              <p className="subtotal_price">${subtotal.toFixed(2)}</p>
            </div>
            <div className="estimated_cont">
              <p className="estimated_tax">Estimated Tax</p>
              <p className="estimated_tax_price">${estimate}</p>
            </div>
            <div className="shipping_cont">
              <p className="shipping_tax">Estimated shipping & Handling</p>
              <p className="shipping_tax_price">${shipping}</p>
            </div>
            <div className="total_price_cont">
              <p className="total">Total</p>
              <p className="total_price">${totalPrice().toFixed(2)}</p>
            </div>
          </div>
          <Button variant="checkout">
            <span>Checkout</span>
          </Button>
        </div>
      </section>
    </article>
  );
};

export default ShoppingCart;
