import { useEffect } from "react";
import CartItem from "./CartItem/CartItem";
import "./ShoppingCart.scss";
import { Button } from "../Button/Button";

const ShoppingCart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="shopping_cart_container">
      <h2 className="shopping_cart_title">Shopping Cart</h2>
      <section className="shopping">
        <CartItem />
        <div className="order_summary_cont">
          <p className="order_summary_text">Order Summary</p>
          <div className="subtotal_container">
            <div className="subtotal_cont">
              <p className="subtotal">Subtotal</p>
              <p className="subtotal_price">$2347</p>
            </div>
            <div className="estimated_cont">
              <p className="estimated_tax">Estimated Tax</p>
              <p className="estimated_tax_price">$50</p>
            </div>
            <div className="shipping_cont">
              <p className="shipping_tax">Estimated shipping & Handling</p>
              <p className="shipping_tax_price">$29</p>
            </div>
            <div className="total_price_cont">
              <p className="total">Total</p>
              <p className="total_price">$2426</p>
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
