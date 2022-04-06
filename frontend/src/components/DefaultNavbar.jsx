import { useNavigate } from "react-router";

export default function DefaultNavbar() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login/sign-in");
  };
  const handleRegisterClick = () => {
    navigate("/login/register");
  };

  return (
    <header className="header header--default">
      <a href="/" className="header__brand">
        Teddit
      </a>
      <div className="header__actions">
        <button className="btn" onClick={handleSignInClick}>
          Sign in
        </button>
        <button className="btn btn--primary" onClick={handleRegisterClick}>
          Register
        </button>
      </div>
    </header>
  );
}
