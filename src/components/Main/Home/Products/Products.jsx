import { productImages } from "./ProductsImages";
import ProductCard from "./ProductCard";
import "./Products.scss";

const Products = () => {
  return (
    <article className="products_container">
      <section className="navigate">
        <p className="new_arrival">New Arrival</p>
        <p className="bestseller">Bestseller</p>
        <p className="featured_products">Featured Products</p>
      </section>
      <section className="product_section">
        {productImages.map(({ id, src, title, price, className }) => (
          <ProductCard
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

export default Products;
