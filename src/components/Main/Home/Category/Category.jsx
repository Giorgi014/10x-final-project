import { productImages } from "./CategoryImages";
import CategoryCard from "./CategoryCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import "./Category.scss";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Category = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

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

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
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
          <div key={id} onClick={() => handleCategoryClick(title)}>
            <CategoryCard
              src={src}
              alt={alt}
              title={title}
              className={className}
            />
          </div>
        ))}
      </section>
    </article>
  );
};

export default Category;
