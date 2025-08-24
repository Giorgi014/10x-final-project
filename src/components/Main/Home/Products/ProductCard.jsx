import { IoIosHeartEmpty } from "react-icons/io";
import { Button } from "../../../Button/Button";

const ProductCard = ({ id, src, title, price, className }) => {
  return (
    <div key={id} className={`product_card ${className}`}>
      <IoIosHeartEmpty className="heart_icon" />
      <div className="product">
        <img src={src} alt={title} />
        <p className="product_title">{title}</p>
        <p className="product_price">{`$${price}`}</p>
      </div>
      <Button variant="buy_now">
        <span>Buy Now</span>
      </Button>
    </div>
  );
};

export default ProductCard;
