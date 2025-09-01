import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { Button } from "../../Route";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../../Context/LoaderContext";
import "./Registration.scss"

export const Registration = () => {
  const { register } = useAuth();
  const [value, setValue] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState({});
  const { setIsLoading } = useLoader();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue((v) => ({ ...v, [e.target.name]: e.target.value }));
    setError((r) => ({ ...r, [e.target.name]: undefined, form: undefined }));
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const res = register(value.name.trim(), value.email.trim(), value.password);
    if (res.ok) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/");
      }, 1000);
    } else {
      setError(res.error || { form: "Registration failed" });
    }
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
            type="password"
            name="password"
            className="password_input"
            id="password"
            value={value.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
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
