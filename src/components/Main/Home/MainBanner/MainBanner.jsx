import HeadBanner from "./HeadBanner/HeadBanner";
import SecondaryBanner from "./SecondaryBanner/SecondaryBanner";
import "./MainBanner.scss";

const MainBanner = () => {
  return (
    <article className="all_banner_container">
      <HeadBanner />
      <SecondaryBanner />
    </article>
  );
};

export default MainBanner;
