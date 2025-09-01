import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../Context/AuthContext";

export const UserCart = () => {
  const { logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  return (
    <div className="user_cart_container">
      <p className="logout_text" onClick={handleLogOut}>
        <FiLogOut className="logout_icon" />
        Log Out
      </p>
    </div>
  );
};
