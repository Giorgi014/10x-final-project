import { CiLogout } from "react-icons/ci";
import { useAuth } from "../../Context/AuthContext";

export const UserCart = () => {
  const { logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  return (
    <div className="user_cart_container">
      <p className="logout_text" onClick={handleLogOut}>
        <CiLogout className="logout_icon" />
        Log Out
      </p>
    </div>
  );
};
