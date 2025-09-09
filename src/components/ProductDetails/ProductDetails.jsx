import { Color } from "./Color/Color";
import { ItemImage } from "./ItemImage/ItemImage";
import { Storage } from "./Storage/Storage";
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { Button } from "../Button/Button";
import { useEffect } from "react";
import { AboutProduct } from "./AboutProduct/AboutProduct";
import { useParams } from "react-router-dom";
import { useData } from "../Context/DataContext";
import { useLoader } from "../Context/LoaderContext";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, addToCart, cartItems } = useData();
  const { isLoading } = useLoader();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) return isLoading;

  const product = data.allImages.find((p) => String(p.id) === String(id));
  if (!product) return <div className="not-found">Product not found</div>;

  const colorObj = product.details.find((d) => d.color)?.color || {};
  const colors = Object.keys(colorObj);
  const storageObj = product.details.find((d) => d.storage)?.storage || {};
  const storageOptions = Object.values(storageObj).filter(
    (v) => v && v !== "—"
  );
  const screen = product.details.find((d) => d.screen)?.screen || {};
  const cpu = product.details.find((d) => d.cpu)?.cpu || "";
  const cores = product.details.find((d) => d.cores)?.cores || "";
  const mainCm = product.details.find((d) => d.mainCm)?.mainCm || "";
  const frontCm = product.details.find((d) => d.frontCm)?.frontCm || "";
  const battery = product.details.find((d) => d.battery)?.battery || "";

  const handleAddToCart = () => {
    addToCart(product);
  };

   const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <article className="product_details_container">
      <section className="product_details">
        <ItemImage url={product.url} />
        <div className="choose_item_container">
          <h2>{product.item_name || product.name || product.description}</h2>
          <p className="price">${product.price}</p>

          <div className="color_container">
            <p className="select_color">Select color :</p>
            <Color colors={colors} />
          </div>

          <div className="item_details_container">
            {storageOptions.length > 0 && (
              <Storage storageOptions={storageOptions} />
            )}
            <ItemDetail
              details={{
                screen,
                cpu,
                cores,
                mainCm,
                frontCm,
                battery,
              }}
            />
            <p className="description">
              {product.details.find((d) => d.info)?.info || product.description}
            </p>
          </div>

          <div className="buttons">
            <Button variant="favorites">
              <span>Add to Wishlist</span>
            </Button>
            <Button variant="card" onClick={handleAddToCart}>
              <span>{isInCart ? "In Cart" : "Add to Cart"}</span>
            </Button>
          </div>

          <AboutProduct />
        </div>
      </section>
    </article>
  );
};

export default ProductDetails;
