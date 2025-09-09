import { IoCloseOutline } from "react-icons/io5";
import { CgLogIn } from "react-icons/cg";
import "./AuthRequired.scss";

export const AuthRequired = ({ onClose, onOpenAuth }) => {
  const handleAuthRequire = (e) => {
    e.stopPropagation();
  };

  return (
    <article className="auth_required_container" onClick={onClose}>
      <section className="auth_required" onClick={handleAuthRequire}>
        <p className="required_text">
          Please register or log in to view your cart.
        </p>
        <p
          className="auth_btn"
          onClick={() => {
            onClose();
            onOpenAuth();
          }}
        >
          <CgLogIn />
          Click here to register.
        </p>
      </section>
      <div className="close_icon" onClick={onClose}>
        <IoCloseOutline />
      </div>
    </article>
  );
};
