const ProductCard = ({ id, src, title, price, className }) => {
  return (
    <div key={id} className={`product-card ${className}`}>
      <img src={src} alt={title} />
      <p>{title}</p>
      <p>{`$${price}`}</p>
    </div>
  );
};

export default ProductCard;
