import { FiUser } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { PiPackageFill } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";
import { useAuth } from "../../../Context/AuthContext";
import { FaRegStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./UserCart.scss";

export const UserCart = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
  };

  return (
    <div className="user_cart_container">
      <p className="manage_account text" onClick={() => navigate("/account")}>
        <FiUser className="user_icon icon" />
        Manage My Account
      </p>
      <p className="order_text text">
        <PiPackageFill className="order_icon icon" />
        My Order
      </p>
      <p className="ancellations_text text">
        <MdOutlineCancel className="ancellations_icon icon" />
        My Cancellations
      </p>
      <p className="reviews_text text">
        <FaRegStar className="reviews_icon icon" />
        My Reviews
      </p>
      <p className="logout_text text" onClick={handleLogOut}>
        <CiLogout className="logout_icon icon" />
        Log Out
      </p>
    </div>
  );
};
