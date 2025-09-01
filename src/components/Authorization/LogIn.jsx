import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Button } from "../Route";
import { Logotext } from "../RoutImages";

export const LogIn = () => {
  const { login } = useAuth();
  const [value, setValue] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setValue((v) => ({ ...v, [e.target.name]: e.target.value }));
    setError((r) => ({ ...r, [e.target.name]: undefined, form: undefined }));
    setSuccessMsg("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const res = login(value.email.trim(), value.password);
    if (res.ok) {
      setError({});
      setSuccessMsg("Logged in successfully ✅");
    } else {
      setSuccessMsg("");
      setError(res.error || { form: "Login failed" });
    }
  };

  return (
    <article className="login_container">
      <div className="login_header">
        <h2>Log in to</h2>
        <img src={Logotext} alt="logo" />
      </div>
      <p className="enter_details">Enter your details below</p>
      <form action="login" className="login_form">
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
            autoComplete="current-password"
          />
          <label htmlFor="password">Enter your password</label>
          {error.password && (
            <span className="field_error">{error.password}</span>
          )}
        </div>
        {error.form && <div className="form_error">{error.form}</div>}
        {successMsg && <div className="form_success">{successMsg}</div>}
        <div className="login_actions">
          <Button variant="login" onClick={handleLogin}>
            <span>Log In</span>
          </Button>
          <p className="forgot_password">Forgot password?</p>
        </div>
      </form>
    </article>
  );
};
