import { useEffect } from "react";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <article className="not_found_container">
      <p className="not_found">404 Not Found</p>
      <p className="not_found_description">
        Your visited page not found. You may go home page
      </p>
      <Button variant="not_found" onClick={handleNavigation}>
        <span>Back to home page</span>
      </Button>
    </article>
  );
};

export default NotFound;
