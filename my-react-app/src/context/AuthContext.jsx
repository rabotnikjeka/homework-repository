import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    isAuth: false,
    role: null,
  });

  const login = (role) => {
    setAuth({ isAuth: true, role });
  };

  const logout = () => {
    setAuth({ isAuth: false, role: null });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
