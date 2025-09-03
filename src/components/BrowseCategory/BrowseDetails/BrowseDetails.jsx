import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { Brands } from "./Brands/Brands";
import "./BrowseDetails.scss";

export const BrowseDetails = ({ selectedBrands, setSelectedBrands }) => {
  const [showUp, setShoUp] = useState(false);

  const toggleShow = () => {
    setShoUp(!showUp);
  };

  return (
    <article className="brand_container" onClick={toggleShow}>
      <section className="brand_section">
        <p className="brand_text">Brand</p>
        {showUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </section>
      <div className={`brands ${showUp ? "show" : "hide"}`}>
        <Brands selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} />
      </div>
    </article>
  );
};
