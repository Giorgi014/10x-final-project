import { BrowseDetails } from "./BrowseDetails/BrowseDetails";
import "./BrowseCategory.scss";

const BrowseCategory = () => {

  return (
    <article className="browse_category_container">
      <section className="browse_category_items">
        <BrowseDetails />
      </section>
    </article>
  );
};

export default BrowseCategory;
