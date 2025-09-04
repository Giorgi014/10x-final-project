import { useEffect } from "react";
import { useLoader } from "../../Context/LoaderContext";
import "./NonCashout.scss";

const NonCashout = () => {
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
    <article className="non_cashout_contaner">
      <h2>Maintenance work in progress</h2>
    </article>
  );
};

export default NonCashout;
