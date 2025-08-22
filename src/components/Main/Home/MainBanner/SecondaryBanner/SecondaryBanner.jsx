import {
  Playstation,
  Airpod,
  Applervision,
  Macbookair,
} from "../../../../RoutImages";
import { Button } from "../../../../Route";
import "./SecondaryBanner.scss";

const images = [
  {
    id: 1,
    src: Playstation,
    alt: "Playstation",
    title: "Playstation 5",
    description:
      "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
    className: "playstation_img",
  },
  {
    id: 2,
    src: Airpod,
    alt: "Airpod",
    title: "Apple AirPods Max",
    description: "Computational audio. Listen, it's powerful",
    className: "airpod_img",
  },
  {
    id: 3,
    src: Applervision,
    alt: "Applervision",
    title: "Apple Vision Pro",
    description: "An immersive way to experience entertainment",
    className: "applervision_img",
  },
  {
    id: 4,
    src: Macbookair,
    alt: "Macbook Air",
    title: "Macbook Air",
    description:
      "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.",
    className: "Macbookair_img",
  },
];

const SecondaryBanner = () => {
  const rightSection = images.find((img) => img.id === 4);

  return (
    <article className="secondary_banner_container">
      <section className="left_section">
        {images
          .filter(({ id }) => id !== 4)
          .map(({ id, src, className, alt, title, description }) => (
            <div key={id} className={`left ${className}`}>
              <img src={src} alt={alt} className={className} />
              <div className="product_name">
                <h3 className={className}>{title}</h3>
                <p className={className}>{description}</p>
              </div>
            </div>
          ))}
      </section>
      <section className="right_section">
        {rightSection && (
          <div className="right">
            <div className="product_name">
              <h3 className={rightSection.className}>{rightSection.title}</h3>
              <p className={rightSection.className}>
                {rightSection.description}
              </p>
              <Button variant="shop_black">
                <span>Shop Now</span>
              </Button>
            </div>
            <img
              src={rightSection.src}
              alt={rightSection.alt}
              // className={rightSection.className}
            />
          </div>
        )}
      </section>
    </article>
  );
};

export default SecondaryBanner;
