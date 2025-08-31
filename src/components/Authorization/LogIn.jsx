import { Button } from "../Route";
import { Logotext } from "../RoutImages";

export const LogIn = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <article className="login_container">
      <div className="login_header">
        <h2>Log in to</h2>
        <img src={Logotext} alt="logo" />
      </div>
      <p className="enter_details">Enter your details below</p>
      <form action="login" className="login_form">
        <div className="input_container">
          <input type="email" name="email" className="email_input" id="email" />
          <label htmlFor="email">Enter your email</label>
        </div>
        <div className="password_container">
          <input
            type="password"
            name="password"
            className="password_input"
            id="password"
          />
          <label htmlFor="password">Enter your password</label>
        </div>
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
