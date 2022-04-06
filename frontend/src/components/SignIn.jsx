import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

export default function SignIn() {
  const navigate = useNavigate(AuthContext);
  const { onLogin } = useContext(AuthContext);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleIdentifierChange = ({ target: { value } }) =>
    setIdentifier(value);
  const handlePasswordChange = ({ target: { value } }) => setPassword(value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data } = await axios.post("http://localhost:1337/api/auth/local", {
      identifier,
      password,
    });

    console.log(data);

    onLogin(data);

    navigate("/");
  };

  return (
    <div className="SignIn">
      <div className="SignIn__header">
        <h2 className="h2">Welcome back</h2>
      </div>

      <form className="SignIn__form" onSubmit={handleSubmit}>
        <input
          value={identifier}
          onChange={handleIdentifierChange}
          id="identifier"
          type="text"
          name="identifier"
          placeholder="Username or email"
          required
        />
        <input
          value={password}
          onChange={handlePasswordChange}
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <button type="submit" className="btn btn--primary w-full mb-2">
          Sign in
        </button>
      </form>

      <Link to="/login/register">I don't have an account</Link>
    </div>
  );
}
