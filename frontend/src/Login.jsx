import { useState, useEffect } from "react";
import { Outlet, useMatch, useNavigate } from "react-router-dom";
import DefaultNavbar from "./components/DefaultNavbar";
import "./styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const isIndex = useMatch({
    path: "/login",
  });

  useEffect(() => {
    if (isIndex) {
      navigate("sign-in");
    }
  }, [isIndex]);

  return (
    <>
      <DefaultNavbar />
      <main className="Login">
        <Outlet />
      </main>
    </>
  );
}

export default Login;
