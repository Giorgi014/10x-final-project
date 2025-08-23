import { productImages } from "./ProductImages";
import CategoryCard from "./CategoryCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import "./Category.scss";
import { useRef } from "react";

const Category = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <article className="category_container">
      <section className="browse_section">
        <h2 className="browse_title">Browse By Category</h2>
        <div className="browse_arrows">
          <FaChevronLeft style={{ cursor: "pointer" }} onClick={scrollLeft} />
          <FaChevronRight style={{ cursor: "pointer" }} onClick={scrollRight} />
        </div>
      </section>
      <section className="category_items" ref={sliderRef}>
        {productImages.map(({ id, src, alt, title, className }) => (
          <CategoryCard
            key={id}
            src={src}
            alt={alt}
            title={title}
            className={className}
          />
        ))}
      </section>
    </article>
  );
};

export default Category;
