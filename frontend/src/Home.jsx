import { useContext, useEffect } from "react";
import { Outlet, useNavigate, useMatch } from "react-router";
import DefaultNavbar from "./components/DefaultNavbar";
import LoggedNavbar from "./components/LoggedNavbar";
import Sidebar from "./components/Sidebar";
import { AuthContext } from "./context/auth";
import "./styles/Home.css";

export default function Home() {
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const isIndex = useMatch({
    path: "/",
  });

  useEffect(() => {
    if (isIndex) {
      navigate("/feed");
    }
  }, [isIndex]);

  return (
    <>
      {isLogged ? <LoggedNavbar /> : <DefaultNavbar />}
      <div className="Home">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
