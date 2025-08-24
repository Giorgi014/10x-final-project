import { useEffect, useState } from "react";
import { productImages } from "./ProductsImages";
import ProductCard from "./ProductCard";
import "./Products.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Products = () => {
  const [isNarrow, setIsNarrow] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 500;
  });

  useEffect(() => {
    const onResize = () => setIsNarrow(window.innerWidth <= 500);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <article className="products_container">
      <section className="navigate">
        {isNarrow ? (
          <Swiper
            className="navigate_swiper"
            spaceBetween={0}
            slidesPerView={2.8}
          >
            <SwiperSlide>
              <p className="new_arrival">New Arrival</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="bestseller">Bestseller</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="featured_products">Featured Products</p>
            </SwiperSlide>
          </Swiper>
        ) : (
          <>
            <p className="new_arrival">New Arrival</p>
            <p className="bestseller">Bestseller</p>
            <p className="featured_products">Featured Products</p>
          </>
        )}
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
