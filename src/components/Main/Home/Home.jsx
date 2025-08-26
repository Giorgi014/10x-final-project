import Category from "./Category/Category";
import Discount from "./Discount/Discount";
import MainBanner from "./MainBanner/MainBanner";
import Products from "./Products/Products";
import SummerSales from "./SummerSales/SummerSales";

const Home = () => {
  return (
    <main className="home_container">
      <MainBanner />
      <Category />
      <Products />
      <Discount />
      <SummerSales />
    </main>
  );
};

export default Home;
