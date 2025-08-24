import HeadBanner from "./HeadBanner/HeadBanner";
import SecondaryBanner from "./SecondaryBanner/SecondaryBanner";

const MainBanner = () => {
  return (
    <article className="all_banner_container">
      <HeadBanner />
      <SecondaryBanner />
    </article>
  );
};

export default MainBanner;
