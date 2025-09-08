import { useEffect } from "react";
import "./ShoppingCart.scss";

const ShoppingCart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="shopping_cart_container">
      <h2 className="shopping_cart_title">Shopping Cart</h2>
      <section className="shopping_cart"></section>
    </article>
  );
};

export default ShoppingCart;
