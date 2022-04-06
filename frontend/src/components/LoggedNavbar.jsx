import { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

export default function LoggedNavbar() {
  const { onLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login/sign-in");
  };

  return (
    <header className="header header--default">
      <Link to="/" className="header__brand">
        Teddit
      </Link>
      <div className="header__actions">
        <button className="btn btn--danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}
