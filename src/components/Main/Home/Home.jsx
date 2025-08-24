import Category from "./Category/Category";
import MainBanner from "./MainBanner/MainBanner";
import Products from "./Products/Products";

const Home = () => {
  return (
    <main className="home_container">
      <MainBanner />
      <Category />
      <Products />
    </main>
  );
};

export default Home;
