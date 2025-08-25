import Category from "./Category/Category";
import Discount from "./Discount/Discount";
import MainBanner from "./MainBanner/MainBanner";
import Products from "./Products/Products";

const Home = () => {
  return (
    <main className="home_container">
      <MainBanner />
      <Category />
      <Products />
      <Discount />
    </main>
  );
};

export default Home;
