import "./ItemImage.scss";

export const ItemImage = () => {
  return (
    <article className="image_container">
      <section className="small_imgs">
        <div className="min_img"></div>
        <div className="min_img"></div>
        <div className="min_img"></div>
        <div className="min_img"></div>
      </section>
      <section className="big_img">
        <div className="max_img"></div>
      </section>
    </article>
  );
};
