import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import "./BrowseDetails.scss";

export const BrowseDetails = () => {
  const [showUp, setShoUp] = useState(false);

  const toogleShow = (e) => {
    e.stopPropagation();
    setShoUp(!showUp);
  };

  return (
    <div className="brand_container" onClick={toogleShow}>
      <div className={`brand ${showUp ? "show" : "hide"}`}>
        <p className="brand_text">Brand</p>
        {showUp ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>
    </div>
  );
};
