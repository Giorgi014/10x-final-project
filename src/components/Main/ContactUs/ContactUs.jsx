import { useEffect } from "react";
import { useLoader } from "../../Context/LoaderContext";
import "./ContactUs.scss";

const ContactUs = () => {
  const { setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(true);

    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);
  return (
    <article className="contact_us_container">
      <h2>Maintenance work in progress</h2>
    </article>
  );
};

export default ContactUs;
