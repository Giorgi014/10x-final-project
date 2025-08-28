import { Button } from "../../../Route";

const PopularItemsCard = ({ id, url, name, description, className }) => {
  return (
    <div key={id} className={`popular_item_card ${className}`}>
      <img src={url} alt={name} />
      <p className="popular_item_name">{name}</p>
      <p className="popular_item_description">{description}</p>
      <Button variant="shop_black">
        <span>Shop Now</span>
      </Button>
    </div>
  );
};

export default PopularItemsCard;
