import { LogIn } from "./LogIn";
import { Autherizationimage } from "../RoutImages";
import "./Authorization.scss";

export const Authorization = () => {
  return (
    <article className="authorization_container">
      <section className="authorization">
        <img
          src={Autherizationimage}
          alt="Authorization"
          className="authorization_image"
        />
        <LogIn />
      </section>
    </article>
  );
};
