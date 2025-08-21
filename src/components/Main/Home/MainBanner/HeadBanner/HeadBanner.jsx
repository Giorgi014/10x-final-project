import { Banner_img, Button } from "../../../../Route";
import "./HeadBanner.scss";

const HeadBanner = () => {
  return (
    <article className="head_banner_container">
      <section className="banner_section">
        <div className="product_info">
          <p className="title">Pro.Beyond.</p>
          <h2 className="product_name">
            IPhone 14 <span>Pro</span>
          </h2>
          <p className="description">
            Created to change everything for the better. For everyone
          </p>
          <Button variant="shop"><span>Shop Now</span></Button>
        </div>
        <img src={Banner_img} alt="iphone 14 pro" className="banner_img" />
      </section>
    </article>
  );
};

export default HeadBanner;
