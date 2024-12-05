// // src/context/AuthContext.jsx
// import { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);

//   const login = async (credentials) => {
//     // Implémenter la logique de connexion
//     setIsAuthenticated(true);
//     setUser({ /* user data */ });
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Vérifier l'authentification au chargement
  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    if (token) {
      setIsAuthenticated(true);
      checkAuthStatus();
    }
    setLoading(false);
  }, []);

  // Vérifier le statut d'authentification
  const checkAuthStatus = async () => {
    try {
      const response = await axiosClient.get('/user');
      setUser(response.data.user);
    } catch (error) {
      console.error('Auth check failed:', error);
      logout();
    }
  };

  // Connexion
  const login = async (credentials) => {
    try {
      const response = await axiosClient.post('/login', credentials);
      const token = response.data.access_token;
      localStorage.setItem('TOKEN', token);
      setIsAuthenticated(true);
      setUser(response.data.user);
      navigate('/dashboard');
      return response;
    } catch (error) {
      throw error;
    }
  };

  // Inscription
  const register = async (userData) => {
    try {
      const response = await axiosClient.post('/register', userData);
      const token = response.data.access_token;
      localStorage.setItem('TOKEN', token);
      setIsAuthenticated(true);
      setUser(response.data.user);
      navigate('/verify-email');
      return response;
    } catch (error) {
      throw error;
    }
  };

  // Déconnexion
  const logout = () => {
    localStorage.removeItem('TOKEN');
    setIsAuthenticated(false);
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        user, 
        loading,
        login, 
        logout,
        register
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);