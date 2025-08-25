import { Cart } from "../../../Cart/Cart";
import { discountImages } from "./DicsountImages"
import "./Discount.scss";

const Discount = () => {
  return (
    <article className="discount_container">
      <h2 className="discount_title">Discounts up to -50%</h2>
      <section className="carts">
        {discountImages.map(({id, src, title, price, className}) => (
          <Cart
            key={id}
            src={src}
            title={title}
            price={price}
            className={className}
          />
        ))}
      </section>
    </article>
  );
};

export default Discount;
