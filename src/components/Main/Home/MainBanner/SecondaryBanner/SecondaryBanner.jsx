import {
  Playstation,
  Airpod,
  Applervision,
  Macbook_air,
} from "../../../../Images";
import "./SecondaryBanner.scss";

const images = [
  {
    id: 1,
    src: Playstation,
    alt: "Playstation",
    className: "playstation_img",
  },
  {
    id: 2,
    src: Airpod,
    alt: "Airpod",
    className: "airpod_img",
  },
  {
    id: 3,
    src: Applervision,
    alt: "Applervision",
    className: "applervision_img",
  },
  {
    id: 4,
    src: Macbook_air,
    alt: "Macbook Air",
    className: "macbook_air_img",
  },
];

const SecondaryBanner = () => {
  const rightSection = images.find((img) => img.id === 4);

  return (
    <article className="secondary_banner_container">
      <section className="left_section">
        {images
          .filter(({ id }) => id !== 4)
          .map(({ id, src, className, alt }) => (
            <div key={id} className={className}>
              <img src={src} alt={alt} />
            </div>
          ))}
      </section>
      <section className="right_section">
        {rightSection && (
          <div className={rightSection.className}>
            <img src={rightSection.src} alt={rightSection.alt} />
          </div>
        )}
      </section>
    </article>
  );
};

export default SecondaryBanner;
