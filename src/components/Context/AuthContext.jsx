import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = Cookies.get("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const register = (name, email, password) => {
    const newUser = { name, email, password };
    setUser(newUser);
    Cookies.set("user", JSON.stringify(newUser), { expires: 7 });
  };

  const login = (email, password) => {
    const savedUser = Cookies.get("user");
    if (!savedUser) return false;

    const parsedUser = JSON.parse(savedUser);
    if (parsedUser.email === email && parsedUser.password === password) {
      setUser(parsedUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
