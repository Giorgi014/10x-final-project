import { LogIn } from "./LogIn";
import { Autherizationimage } from "../RoutImages";
import { IoCloseOutline } from "react-icons/io5";
import "./Authorization.scss";

export const Authorization = ({ onClose }) => {
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <article className="authorization_container" onClick={handleContainerClick}>
      <section className="authorization">
        <img
          src={Autherizationimage}
          alt="Authorization"
          className="authorization_image"
        />
        <LogIn />
      </section>
      <div className="close_icon" onClick={onClose}>
        <IoCloseOutline />
      </div>
    </article>
  );
};
