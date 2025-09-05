import "./ItemImage.scss";

export const ItemImage = ({ url }) => {
  return (
    <article className="image_container">
      <section className="small_imgs">
        <img src={url} alt="thumb-1" className="min_img" />
        <img src={url} alt="thumb-2" className="min_img" />
        <img src={url} alt="thumb-3" className="min_img" />
        <img src={url} alt="thumb-4" className="min_img" />
      </section>

      <section className="big_img">
        <img src={url} alt="product" className="max_img" />
      </section>
    </article>
  );
};
