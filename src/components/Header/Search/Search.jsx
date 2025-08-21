import { CiSearch } from "react-icons/ci";
import "./Search.scss";

export const Search = () => {
  return (
    <div className="search">
      <input type="text" className="search_input" placeholder="Search" />
      <CiSearch className="search_icon"/>
    </div>
  );
};

