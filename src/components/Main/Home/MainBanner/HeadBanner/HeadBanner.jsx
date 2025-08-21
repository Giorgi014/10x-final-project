import { Banner_img } from "../../../../Route";
import "./HeadBanner.scss";

const HeadBanner = () => {
  return (
    <article className="head_banner_container">
      <section className="product_info">
        <p className="title">Pro.Beyond.</p>
        <h2 className="product_name">IPhone 14 Pro</h2>
        <p className="description">
          Created to change everything for the better. For everyone
        </p>
      </section>
      <img src={Banner_img} alt="iphone 14 pro" className="banner_img" />
    </article>
  );
};

export default HeadBanner;
