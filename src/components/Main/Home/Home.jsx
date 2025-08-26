import Category from "./Category/Category";
import Discount from "./Discount/Discount";
import MainBanner from "./MainBanner/MainBanner";
import PopularItems from "./PopularItems/PopularItems";
import Products from "./Products/Products";
import SummerSales from "./SummerSales/SummerSales";

const Home = () => {
  return (
    <main className="home_container">
      <MainBanner />
      <Category />
      <Products />
      <PopularItems />
      <Discount />
      <SummerSales />
    </main>
  );
};

export default Home;
