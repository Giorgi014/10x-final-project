import { CiSearch } from "react-icons/ci";
import "./Search.scss";

export const Search = () => {
  return (
    <div className="search">
      <CiSearch />
      <input type="text" className="search_input" placeholder="Search" />
    </div>
  );
};

