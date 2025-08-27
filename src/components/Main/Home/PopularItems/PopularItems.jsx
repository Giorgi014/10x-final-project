import { PopularItemsImages } from "./PopularItemsImages";
import PopularItemsCard from "./PopularItemsCard";
import "./PopularItems.scss";

const PopularItems = () => {
  return (
    <div className="popular_items_container">
      {PopularItemsImages.map(({ id, src, name, description, className }) => (
        <PopularItemsCard
          key={id}
          src={src}
          name={name}
          description={description}
          className={className}
        />
      ))}
    </div>
  );
};

export default PopularItems;
