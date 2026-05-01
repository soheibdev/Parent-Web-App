/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const MOCK_EMAIL = 'parent@gmail.com';
const MOCK_PASSWORD = 'parent@123';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('parent_auth') === 'true';
  });

  const login = (email, password) => {
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      localStorage.setItem('parent_auth', 'true');
      setIsAuthenticated(true);
      return { success: true };
    }
    return { success: false, error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' };
  };

  const logout = () => {
    localStorage.removeItem('parent_auth');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
