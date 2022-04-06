import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

const ProfileSettings = () => {
  const { jwt, user, onLogin } = useContext(AuthContext);
  const [biography, setBiography] = useState(user.biography || "");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data } = await axios.put(
      `http://localhost:1337/api/users/${user.id}`,
      {
        data: {
          biography,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    console.log(data);

    onLogin({ jwt, user: { ...user, biography } });
  };
  useEffect(() => {
    console.log(user);
  }, []);

  const handleBiographyChange = ({ target: { value } }) => setBiography(value);

  return (
    <div className="ProfileSettings">
      <h4 className="h4">Profile settings</h4>
      <div className="grid gap-4 grid-cols-2">
        <div>
          <label htmlFor="username">Username</label>
          <input value={user.username} type="text" readOnly />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input value={user.email} type="email" readOnly />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="bio">Biography</label>
        <textarea
          value={biography}
          onChange={handleBiographyChange}
          name="bio"
          id="bio"
          rows="4"
        ></textarea>

        <div className="text-right">
          <button className="btn btn--info">Update profile</button>
        </div>
      </form>
    </div>
  );
};

const PasswordSettings = () => {
  const { jwt, user, onLogin } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handlePasswordConfirmationChange = (event) =>
    setPasswordConfirmation(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data } = await axios.post(
      `http://localhost:1337/api/auth/reset-password`,
      {
        password,
      },

      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    console.log(data);

    onLogin(data);

    setPassword("");
    setPasswordConfirmation("");
  };

  return (
    <div className="PasswordSettings">
      <h4 className="h4">Password settings</h4>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 grid-cols-2">
          <div>
            <label htmlFor="password">New password</label>
            <input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              required
            />
          </div>
          <div>
            <label htmlFor="passwordConfirmation">Confirm new password</label>
            <input
              value={passwordConfirmation}
              onChange={handlePasswordConfirmationChange}
              type="password"
              required
            />
          </div>
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn--info">
            Update password
          </button>
        </div>
      </form>
    </div>
  );
};

export default function Settings() {
  const navigate = useNavigate();
  const { isLogged } = useContext(AuthContext);

  useEffect(() => {
    if (!isLogged) navigate("/login/sign-in", { replace: true });
  }, []);

  return isLogged ? (
    <div className="Settings">
      <h3 className="h3">Settings</h3>
      <ProfileSettings />
      <PasswordSettings />
    </div>
  ) : (
    <></>
  );
}
