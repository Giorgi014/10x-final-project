import { Button } from "../../../../Route";

const RightProductCard = ({ src, alt, title, description, className, responsiveClass }) => {
  return (
    <div className={`right ${className} ${responsiveClass || ""}`}>
      <div className="product_name">
        <h3 className={className}>{title}</h3>
        <p className={className}>{description}</p>
        <Button variant="shop_black">
          <span>Shop Now</span>
        </Button>
      </div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default RightProductCard;
