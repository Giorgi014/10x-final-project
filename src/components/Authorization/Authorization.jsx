import { LogIn } from "./Login/LogIn";
import { Autherizationimage } from "../RoutImages";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { Registration } from "./Registration/Registration";
import "./Authorization.scss";

export const Authorization = ({ onClose }) => {
  const [isLoginView, setIsLoginView] = useState(true);

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
        <div className="login_regigration">
          {isLoginView ? (
            <>
              <LogIn />
              <div className="dont_have_account">
                <p className="question">You don't have an account?</p>
                <p
                  className="create_account"
                  onClick={() => setIsLoginView(false)}
                >
                  Sign up
                </p>
              </div>
            </>
          ) : (
            <>
              <Registration />
              <div className="already_have_account">
                <p className="question">Already have account?</p>
                <p
                  className="create_account"
                  onClick={() => setIsLoginView(true)}
                >
                  Log in
                </p>
              </div>
            </>
          )}
        </div>
      </section>
      <div className="close_icon" onClick={onClose}>
        <IoCloseOutline />
      </div>
    </article>
  );
};
