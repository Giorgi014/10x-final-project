import { Color } from "./Color/Color";
import { ItemImage } from "./ItemImage/ItemImage";
import { Storage } from "./Storage/Storage";
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { Button } from "../Button/Button";
import "./ProductDetails.scss";

const ProductDetails = () => {
  return (
    <article className="product_details_container">
      <section className="product_details">
        <ItemImage />
        <div className="choose_item_container">
          <h2>Apple iPhone 14 Pro Max</h2>
          <p className="price">$1900</p>
          <div className="color_container">
            <p className="select_color"></p>
            <Color />
          </div>
          <div className="item_details_container">
            <Storage />
            <ItemDetail />
            <p className="description">
              Enhanced capabilities thanks toan enlarged display of 6.7
              inchesand work without rechargingthroughout the day. Incredible
              photosas in weak, yesand in bright lightusing the new systemwith
              two cameras
            </p>
          </div>
          <div className="buttons">
            <Button variant="favorites">
              <span>Add to Wishlist</span>
            </Button>
            <Button variant="card">
              <span>Add to Card</span>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ProductDetails;
