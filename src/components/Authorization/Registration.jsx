import { Button } from "../Route";

export const Registration = () => {
  const handleRegistration = (e) => {
    e.preventDefault();
  };

  return (
    <article className="registration_container">
        <h2>Create an account</h2>
      <p className="enter_details">Enter your details below</p>
      <form action="registration" className="registration_form">
        <div className="name_container">
          <input type="text" name="name" className="name_input" id="name" />
          <label htmlFor="name">Enter your name</label>
        </div>
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
        <Button variant="registration" onClick={handleRegistration}>
          <span>Create Account</span>
        </Button>
      </form>
    </article>
  );
};
