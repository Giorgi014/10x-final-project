import "./Brands.scss";
import { useData } from "../../../Context/DataContext";
import { useParams } from "react-router-dom";

export const Brands = ({ selectedBrands, setSelectedBrands }) => {
  const brands = [
    "apple",
    "samsung",
    "xiaomi",
    "poco",
    "oppo",
    "honor",
    "motorola",
    "nokia",
    "realme",
  ];

  const { data } = useData();
  const { categoryName } = useParams();

  if (!data) return null;

  const categoryItems = data.allImages.filter(
    (item) => item.category.toLowerCase() === categoryName.toLowerCase()
  );

  const getBrandCount = (brand) => {
    return categoryItems.filter(
      (item) => item.brand.toLowerCase() === brand.toLowerCase()
    ).length;
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const toggleBrands = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <div className="brands_container" onClick={stopPropagation}>
      {brands.map((brand) => (
        <div className="brand_cont" key={brand}>
          <input
            type="checkbox"
            id={`checked_${brand}`}
            className="checked"
            checked={selectedBrands.includes(brand)}
            onChange={() => toggleBrands(brand)}
          />
          <div className="all_brand">
            <p className="brand">
              {brand.charAt(0).toUpperCase() + brand.slice(1)}
            </p>
            <p className="brand_number">({getBrandCount(brand)})</p>
          </div>
        </div>
      ))}
    </div>
  );
};
