import { Link } from "react-router-dom";
import "./SearchedItem.scss";

export const SearchedItem = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="searched_item_contaner">
      <img
        src={item.url}
        alt={item.item_name || item.description}
        className="searched_img"
      />
      <p className="searched_item_info">{item.item_name || item.description}</p>
    </Link>
  );
};
