import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/auth";

export default function LoggedNavbar() {
  const { onLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login/sign-in");
  };

  return (
    <header className="header header--default">
      <a href="/" className="header__brand">
        Teddit
      </a>
      <div className="header__actions">
        <button className="btn btn--danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}
