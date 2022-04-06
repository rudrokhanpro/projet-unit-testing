import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const { onLogin } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const isDisabled = !(username && email && password) | isLoading;

  const handleUsernameChange = ({ target: { value } }) => setUsername(value);
  const handleEmailChange = ({ target: { value } }) => setEmail(value);
  const handlePasswordChange = ({ target: { value } }) => setPassword(value);
  const handlePasswordConfirmChange = ({ target: { value } }) =>
    setPasswordConfirmation(value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(username, email, password, passwordConfirmation);

    setIsLoading(true);

    try {
      if (password !== passwordConfirmation) {
        throw new Error("Passwords don't match");
      }

      const { data } = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        {
          username,
          email,
          password,
        }
      );

      console.log(data);
      onLogin(data);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(
        err.request?.data?.error?.message ||
          err.response?.data?.error?.message ||
          err.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="Register">
      <div className="Register__header">
        <h2 className="h2">Join us</h2>
      </div>

      <form className="Register__form" onSubmit={handleSubmit}>
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
        <input
          value={username}
          onChange={handleUsernameChange}
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          required
          maxLength="16"
        />

        <input
          value={email}
          onChange={handleEmailChange}
          id="email"
          type="email"
          name="email"
          placeholder="Email"
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

        <input
          value={passwordConfirmation}
          onChange={handlePasswordConfirmChange}
          id="password-confirmation"
          type="password"
          name="password-confirmation"
          placeholder="Confirm password"
          required
        />

        <button
          type="submit"
          className="btn btn--primary w-full mb-2"
          disabled={isDisabled}
        >
          Register
        </button>
      </form>

      <Link to="/login/sign-in">I already have an account</Link>
    </div>
  );
}
