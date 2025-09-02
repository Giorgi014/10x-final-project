import { CiSearch } from "react-icons/ci";
import { SearchedItem } from "./SearchedItem/SearchedItem";
import "./Search.scss";

export const Search = () => {
  return (
    <article className="search">
      <input type="text" className="search_input" placeholder="Search" />
      <CiSearch className="search_icon" />
      <div className="searched_item">
        <SearchedItem />
      </div>
    </article>
  );
};
