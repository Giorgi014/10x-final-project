import { CiSearch } from "react-icons/ci";
import { SearchedItem } from "./SearchedItem/SearchedItem";
import { useData } from "../../Context/DataContext";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Search.scss";

export const Search = () => {
  const { data } = useData();
  const [searchItem, setSearchItem] = useState("");
  const containerRef = useRef(null);
  const location = useLocation();

  const allImages = data?.allImages || [];

  useEffect(() => {
    setSearchItem("");
  }, [location.pathname]);

  useEffect(() => {
    const handleOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setSearchItem("");
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") setSearchItem("");
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const filteredItems = allImages.filter((i) =>
    (i.description || i.name || i.item_name)
      ?.toLowerCase()
      .includes(searchItem.toLowerCase())
  );

  return (
    <article className="search" ref={containerRef}>
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
