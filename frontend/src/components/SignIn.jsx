import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

export default function SignIn() {
  const navigate = useNavigate(AuthContext);
  const { onLogin } = useContext(AuthContext);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const isDisabled = !(identifier && password) || isLoading;

  const handleIdentifierChange = ({ target: { value } }) =>
    setIdentifier(value);
  const handlePasswordChange = ({ target: { value } }) => setPassword(value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setError(null);
      setIsLoading(true);

      const { data } = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier,
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
    <div className="SignIn">
      <div className="SignIn__header">
        <h2 className="h2">Welcome back</h2>
      </div>

      <form className="SignIn__form" onSubmit={handleSubmit}>
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
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

        <button
          type="submit"
          className="btn btn--primary w-full mb-2"
          disabled={isDisabled}
        >
          Sign in
        </button>
      </form>

      <Link to="/login/register">I don't have an account</Link>
    </div>
  );
}
