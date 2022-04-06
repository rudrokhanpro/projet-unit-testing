import { useState, useEffect } from "react";
import { AuthContext } from "../context/auth";

function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(null);

  const handleLogin = async (loginData) => {
    setIsLogged(true);
    setUser(loginData.user);
    setJwt(loginData.jwt);
  };

  const handleLogout = async () => {
    setIsLogged(false);
    setUser(null);
    setUser(null);
  };

  useEffect(() => {
    return () => {};
  }, [isLogged]);

  const value = {
    isLogged,
    user,
    jwt,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
