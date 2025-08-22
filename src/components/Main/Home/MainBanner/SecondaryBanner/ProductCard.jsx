const ProductCard = ({ id, src, alt, title, description, className }) => {
  return (
    <div key={id} className={`left ${className}`}>
      <img src={src} alt={alt} className={className} />
      <div className="product_name">
        <h3 className={className}>{title}</h3>
        <p className={className}>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
