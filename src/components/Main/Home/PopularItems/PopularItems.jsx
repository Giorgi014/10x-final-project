import { useEffect, useState } from "react";
import { PopularItemsImages } from "./PopularItemsImages";
import PopularItemsCard from "./PopularItemsCard";
import "./PopularItems.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const PopularItems = () => {
  const [isSlider, setIsSlider] = useState(false);

  useEffect(() => {
    const checkSlider = () => {
      setIsSlider(window.innerWidth <= 1025);
    };
    checkSlider();
    window.addEventListener("resize", checkSlider);
    return () => window.removeEventListener("resize", checkSlider);
  }, []);

  if (isSlider) {
    return (
      <div className="popular_items_container slider">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 12 },
            600: { slidesPerView: 2, spaceBetween: 14 },
            900: { slidesPerView: 3, spaceBetween: 16 },
          }}
        >
          {PopularItemsImages.map((item) => (
            <SwiperSlide key={item.id}>
              <PopularItemsCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  return (
    <div className="popular_items_container grid">
      {PopularItemsImages.map(({ id, src, name, description, className }) => (
        <PopularItemsCard
          key={id}
          src={src}
          name={name}
          description={description}
          className={className}
        />
      ))}
    </div>
  );
};

export default PopularItems;
