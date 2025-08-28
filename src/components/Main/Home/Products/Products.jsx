import { useEffect, useState } from "react";
import { Cart } from "../../../Cart/Cart";
import { useData } from "../../../Context/DataContext";
import "./Products.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Products = () => {
  const { data } = useData();

  const [isNarrow, setIsNarrow] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 500;
  });

  useEffect(() => {
    const onResize = () => setIsNarrow(window.innerWidth <= 500);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (!data) return null;

  const newArrivalProducts = data.newArrival
    .map((id) => data.allImages.find((img) => img.id === id))
    .filter(Boolean);

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
        {newArrivalProducts.map(({ id, url, description, price }) => (
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

export default Products;
