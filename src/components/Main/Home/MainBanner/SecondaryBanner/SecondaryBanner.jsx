import { images } from "./ImagesData.jsx";
import ProductCard from "./ProductCard.jsx";
import RightProductCard from "./RightProductCard.jsx";
import "./SecondaryBanner.scss";

const SecondaryBanner = () => {
  const rightSection = images.find((img) => img.id === 4);
  const mobileRightSection = images.find((img) => img.id === 8);

  return (
    <article className="secondary_banner_container">
      <section className="left_section">
        {images
          .filter(({ id }) => id !== 4 && id !== 8)
          .map((img) => (
            <ProductCard key={img.id} {...img} />
          ))}
      </section>
      <section className="right_section">
        {rightSection && <RightProductCard {...rightSection} />}
        {mobileRightSection && <RightProductCard {...mobileRightSection} />}
      </section>
    </article>
  );
};

export default SecondaryBanner;
