import { useEffect } from "react";
import { useLoader } from "../../Context/LoaderContext";
import "./GiftCards.scss";

const GiftCards = () => {
  const { setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(true);

    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="gift_cards_container">
      <h2>Maintenance work in progress</h2>
    </article>
  );
};

export default GiftCards;
