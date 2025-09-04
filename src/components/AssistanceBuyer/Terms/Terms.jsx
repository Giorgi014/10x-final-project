import { useEffect } from "react";
import { useLoader } from "../../Context/LoaderContext";
import "./Terms.scss";

const Terms = () => {
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
    <article className="terms_container">
      <h2>Maintenance work in progress</h2>
    </article>
  );
};

export default Terms;
