import { useEffect, useState } from "react";
import PopularItemsCard from "./PopularItemsCard";
import { useData } from "../../../Context/DataContext";
import "./PopularItems.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const PopularItems = () => {
  const [isSlider, setIsSlider] = useState(false);
  const { data } = useData();

  useEffect(() => {
    const checkSlider = () => {
      setIsSlider(window.innerWidth <= 1025);
    };
    checkSlider();
    window.addEventListener("resize", checkSlider);
    return () => window.removeEventListener("resize", checkSlider);
  }, []);

  if (!data) return null;

  const popular = data.popularProducts
    .map((id) => data.allImages.find((img) => img.id === id))
    .filter(Boolean);

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
          {popular.map(({ id, url, name, description }) => (
            <SwiperSlide key={id}>
              <PopularItemsCard
                id={id}
                url={url}
                name={name}
                description={description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  return (
    <div className="popular_items_container grid">
      {popular.map(({ id, url, name, description }) => (
        <PopularItemsCard
          key={id}
          id={id}
          url={url}
          name={name}
          description={description}
        />
      ))}
    </div>
  );
};

export default PopularItems;
