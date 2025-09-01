import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { Button } from "../../Route";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../../Context/LoaderContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Registration.scss";

export const Registration = () => {
  const { register } = useAuth();
  const [value, setValue] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState({});
  const { setIsLoading } = useLoader();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setValue((v) => ({ ...v, [e.target.name]: e.target.value }));
    setError((r) => ({ ...r, [e.target.name]: undefined, form: undefined }));
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    const res = await register(
      value.name.trim(),
      value.email.trim(),
      value.password
    );
    if (res.ok) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/");
      }, 1000);
    } else {
      setError(res.errors || { form: "Registration failed" });
    }
  };

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <article className="registration_container">
      <h2>Create an account</h2>
      <p className="enter_details">Enter your details below</p>
      <form action="registration" className="registration_form">
        <div className={`name_container ${error.name ? "has_error" : ""}`}>
          <input
            type="text"
            name="name"
            className="name_input"
            id="name"
            placeholder=" "
            value={value.name}
            onChange={handleChange}
            autoComplete="name"
          />
          <label htmlFor="name">Enter your name</label>
          {error.name && <span className="field_error">{error.name}</span>}
        </div>
        <div className={`input_container ${error.email ? "has_error" : ""}`}>
          <input
            type="email"
            name="email"
            className="email_input"
            id="email"
            placeholder=" "
            value={value.email}
            onChange={handleChange}
            autoComplete="email"
          />
          <label htmlFor="email">Enter your email</label>
          {error.email && <span className="field_error">{error.email}</span>}
        </div>
        <div
          className={`password_container ${error.password ? "has_error" : ""}`}
        >
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="password_input"
            id="password"
            placeholder=" "
            value={value.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
          <div className="icon" onClick={passwordVisibility}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
          <label htmlFor="password">Enter your password</label>
          {error.password && (
            <span className="field_error">{error.password}</span>
          )}
          {error.form && <div className="form_error">{error.form}</div>}
        </div>
        <Button variant="registration" onClick={handleRegistration}>
          <span>Create Account</span>
        </Button>
      </form>
    </article>
  );
};
