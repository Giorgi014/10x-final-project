import Category from "./Category/Category";
import MainBanner from "./MainBanner/MainBanner";

const Home = () => {
  return (
    <main className="home_container">
      <MainBanner />
      <Category />
    </main>
  );
};

export default Home;
