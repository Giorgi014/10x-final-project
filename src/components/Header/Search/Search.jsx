import { CiSearch } from "react-icons/ci";
import { SearchedItem } from "./SearchedItem/SearchedItem";
import { useData } from "../../Context/DataContext";
import { useState } from "react";
import "./Search.scss";

export const Search = () => {
  const { data } = useData();
  const [searchItem, setSearchItem] = useState("");

  const allImages = data?.allImages || [];

  const filteredItems = allImages.filter((i) =>
    (i.description || i.name || i.item_name)
      ?.toLowerCase()
      .includes(searchItem.toLowerCase())
  );

  return (
    <article className="search">
      <input
        type="text"
        className="search_input"
        placeholder="Search"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <CiSearch className="search_icon" />
      <div className="searched_item">
        {searchItem && filteredItems.length > 0
          ? filteredItems.map((item) => (
              <SearchedItem key={item.id} item={item} />
            ))
          : searchItem && <p className="not_found">Items not found</p>}
      </div>
    </article>
  );
};
