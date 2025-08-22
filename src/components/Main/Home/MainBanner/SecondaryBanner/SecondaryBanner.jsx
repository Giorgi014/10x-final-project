import { images } from "./imagesData";
import ProductCard from "./ProductCard";
import RightProductCard from "./RightProductCard";
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
