import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import { z } from "zod";

const AuthContext = createContext();

const emailSchema = z
  .string()
  .min(1)
  .email("Email is invalid")
  .regex(/@gmail\.com$/i, "Only @gmail.com emails are allowed");

const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters");

const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

const registrationSchema = z.object({
  name: z.string(),
  email: emailSchema,
  password: passwordSchema,
});

const fieldErrors = (issueList) => {
  const error = {};
  issueList.forEach((e) => {
    const key = e.path?.[0] ?? "form";
    if (!error[key]) error[key] = e.message;
  });
  return error;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = Cookies.get("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        Cookies.remove("user");
      }
    }
  }, []);

  const register = useCallback(async(name, email, password) => {
    const parsed = registrationSchema.safeParse({ name, email, password });
    if (!parsed.success) {
      return { ok: false, errors: fieldErrors(parsed.error.issues) };
    }

    const newUser = { name, email, password };
    setUser(newUser);
    Cookies.set("user", JSON.stringify(newUser), { expires: 7 });
    return { ok: true, user: newUser };
  }, []);

  const login = useCallback(async(email, password) => {
    const parsed = loginSchema.safeParse({ email, password });
    if (!parsed.success) {
      return { ok: false, errors: fieldErrors(parsed.error.issues) };
    }

    const savedUser = Cookies.get("user");
    if (!savedUser) {
      return { ok: false, errors: { form: "User not found." } };
    }

    let parsedUser;
    try {
      parsedUser = JSON.parse(savedUser);
    } catch {
      Cookies.remove("user");
      return {
        ok: false,
        errors: { form: "Corrupted session. Please register again." },
      };
    }

    if (parsedUser.email === email && parsedUser.password === password) {
      setUser(parsedUser);
      return { ok: true, user: parsedUser };
    }
    return { ok: false, errors: { form: "Email or password is incorrect." } };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    Cookies.remove("user");
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
