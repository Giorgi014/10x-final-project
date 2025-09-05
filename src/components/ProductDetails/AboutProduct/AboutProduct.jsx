import { Delivery, Shop, Verify } from "../../RoutImages";
import "./AboutProduct.scss";

const aboutProduct = [
  { img: Delivery, label: "Free Delivery", days: "1-2 day" },
  { img: Shop, label: "In Stock", days: "Today" },
  { img: Verify, label: "Guaranteed", days: "1 year" },
];

export const AboutProduct = () => {
  return (
    <article className="about_product_container">
      {aboutProduct.map((detail, index) => (
        <section key={index} className="about_product">
          <div className="img">
            <img src={detail.img} alt={detail.label.toLowerCase()} />
          </div>
          <div className="cont">
            <p className="product_item">{detail.label}</p>
            <p className="days">{detail.days}</p>
          </div>
        </section>
      ))}
    </article>
  );
};
