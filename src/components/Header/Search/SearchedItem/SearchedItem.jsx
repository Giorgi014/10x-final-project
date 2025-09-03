import "./SearchedItem.scss";

export const SearchedItem = ({ item }) => {
  return (
    <div className="searched_item_contaner">
      <img
        src={item.url}
        alt={item.item_name || item.description}
        className="searched_img"
      />
      <p className="searched_item_info">{item.item_name || item.description}</p>
    </div>
  );
};
