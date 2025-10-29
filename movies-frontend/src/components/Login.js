import { useState } from "react";
import Input from "./form/Input";
import { useOutletContext, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken } = useOutletContext();
  const { setAlertClassName } = useOutletContext();
  const { setAlertMessage } = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email/password", email, password);

    if (email === "admin@example.com") {
      setJwtToken("abc");
      setAlertClassName("d-none");
      setAlertMessage("");
      navigate("/");
    } else {
      setJwtToken("");
      setAlertClassName("alert-danger");
      setAlertMessage("Invalid credentials");
    }
  };
  return (
    <div className="col-md-6 offset-md-3">
      <h2 className="mt-3">Login</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <Input
          title="Email Address"
          type="email"
          className="form-control"
          name="email"
          autocomplete="email-new"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          title="Password"
          type="password"
          className="form-control"
          name="password"
          autocomplete="password-new"
          onChange={(e) => setPassword(e.target.value)}
        />

        <hr />

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </div>
  );
};

export default Login;
