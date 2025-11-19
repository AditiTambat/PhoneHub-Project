import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("userId")
      ? {
          id: localStorage.getItem("userId"),
          name: localStorage.getItem("userName"),
          email: localStorage.getItem("userEmail"),
          role: localStorage.getItem("role"),
        }
      : null
  );

  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
