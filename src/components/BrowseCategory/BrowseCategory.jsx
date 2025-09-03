import { BrowseDetails } from "./BrowseDetails/BrowseDetails";
import { useData } from "../Context/DataContext";
import { useParams } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { useLoader } from "../Context/LoaderContext";
import { useEffect, useState } from "react";
import "./BrowseCategory.scss";

const BrowseCategory = () => {
  const { categoryName } = useParams();
  const { data } = useData();
  const { isLoading } = useLoader();
  const [selectedBrands, setSelectedBrands] = useState([]);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  if (!data) return isLoading;

  const filteredItems = data.allImages.filter((item) => {
    const categoryMatch = item.category.toLowerCase() === categoryName.toLowerCase();
    const brandMatch = selectedBrands.length > 0 ? selectedBrands.includes(item.brand.toLowerCase()) : true;
    return categoryMatch && brandMatch;
  });

  return (
    <article className="browse_category_container">
      <section className="browse_category_items">
        <BrowseDetails selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} />
        <div className="category_products">
          {filteredItems.length > 0 ? (
            filteredItems.map(({ id, url, description, price }) => (
              <Cart
                key={id}
                id={id}
                url={url}
                description={description}
                price={price}
              />
            ))
          ) : (
            <p className="not_found">No items found for this category.</p>
          )}
        </div>
      </section>
    </article>
  );
};

export default BrowseCategory;
