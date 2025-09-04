import { useEffect } from "react";
import { useLoader } from "../../Context/LoaderContext";
import "./ServiceContracts.scss";

const ServiceContracts = () => {
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
    <article className="service_contracts_container">
      <h2>Maintenance work in progress</h2>
    </article>
  );
};

export default ServiceContracts;
