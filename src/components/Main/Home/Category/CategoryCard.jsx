const CategoryCard = ({ id, src, alt, title, className }) => {
  return (
    <div key={id} className={`${className}`}>
      <img src={src} alt={alt} />
      <p>{title}</p>
    </div>
  );
};

export default CategoryCard;
