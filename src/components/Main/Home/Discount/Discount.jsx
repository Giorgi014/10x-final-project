import { Cart } from "../../../Cart/Cart";
import { useData } from "../../../Context/DataContext";
import "./Discount.scss";

const Discount = () => {
  const { data } = useData();

  if (!data) return null;

  const discountProducts = data.discount
    .map((id) => data.allImages.find((img) => img.id === id))
    .filter(Boolean);

  return (
    <article className="discount_container">
      <h2 className="discount_title">Discounts up to -50%</h2>
      <section className="carts">
        {discountProducts.map(({ id, url, description, price }) => (
          <Cart
            key={id}
            id={id}
            url={url}
            description={description}
            price={price}
          />
        ))}
      </section>
    </article>
  );
};

export default Discount;