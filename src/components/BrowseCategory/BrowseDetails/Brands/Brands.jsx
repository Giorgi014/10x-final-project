import "./Brands.scss";

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

  const stopPropagation = (e) => {
    e.stopPropagation();
  }

  const toogleBrands = (brand) => {
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
            onChange={() => toogleBrands(brand)}
          />
          <p className="brand">{brand.charAt(0).toUpperCase() + brand.slice(1)}</p>
        </div>
      ))}
    </div>
  );
};
