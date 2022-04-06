import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/auth";

export default function Sidebar() {
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  const loggedItems = [
    {
      label: "New",
      to: "new",
    },
    {
      label: "Profile",
      to: "profile",
    },
    {
      label: "Settings",
      to: "settings",
    },
  ];
  const items = [
    {
      label: "Feed",
      to: "feed",
    },
  ];

  const handleClick = (item) => {
    navigate(item.to);
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <div className="Sidebar">
      {items.length &&
        items.map((item, index) => (
          <div
            className="item"
            key={`sidebar-item-${index}`}
            onClick={() => handleClick(item)}
          >
            <span className="item__label">{item.label}</span>
          </div>
        ))}
      {isLogged ? (
        <>
          <div className="Sidebar__header"></div>
          <div className="Sidebar__items">
            {loggedItems.length &&
              loggedItems.map((item, index) => (
                <div
                  className="item"
                  key={`sidebar-item-${index}`}
                  onClick={() => handleClick(item)}
                >
                  <span className="item__label">{item.label}</span>
                </div>
              ))}
          </div>
        </>
      ) : (
        <button className="btn btn--primary w-full" onClick={handleSignIn}>
          Sign in
        </button>
      )}
    </div>
  );
}
