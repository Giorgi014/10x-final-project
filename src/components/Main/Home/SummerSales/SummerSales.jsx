import { Button } from "../../../Button/Button";
import { Banner2 } from "../../../RoutImages";
import "./SummerSales.scss";

const SummerSales = () => {
  return (
    <article className="summer_sales_container">
      <section className="summer_sales">
        <p className="summer_sale_head">
          Big Summer <span>Sale</span>
        </p>
        <p className="summer_sale_description">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <Button variant="shop">
          <span>Shop Now</span>
        </Button>
      </section>
      <img src={Banner2} alt="banner" className="banner_image" />
    </article>
  );
};

export default SummerSales;
