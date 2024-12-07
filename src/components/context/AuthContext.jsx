


// import { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosClient from '../../axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('TOKEN');
//     if (token) {
//       checkAuthStatus();
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const checkAuthStatus = async () => {
//     try {
//       const response = await axiosClient.get('/user');
//       setUser(response.data.user);
//       setIsAuthenticated(true);
//     } catch (error) {
//       console.error('Auth check failed:', error);
//       logout();
//     } finally {
//       setLoading(false);
//     }
//   };



//   const login = async (credentials) => {
//     try {
//       const response = await axiosClient.post('/login', credentials);
  
//       if (!response.data.email_verified) {
//         navigate('/email-verification-pending');
//         throw new Error('Veuillez vérifier votre email avant de vous connecter.');
//       }
  
//       const token = response.data.access_token;
//       localStorage.setItem('TOKEN', token);
//       setIsAuthenticated(true);
//       setUser(response.data.user);
//       navigate('/dashboard');
  
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   };
  
//   const register = async (userData) => {
//     try {
//       const response = await axiosClient.post('/register', userData);
      
//       if (response.status === 201) {
//         // Stocker l'email pour la page de vérification
//         sessionStorage.setItem('registeredEmail', userData.email);
//         navigate('/email-verification-pending');
//       }
      
//       return response;
//     } catch (error) {
//       // Gérer les erreurs spécifiques à l'inscription
//       if (error.response?.status === 422) {
//         throw new Error('Email déjà utilisé ou données invalides');
//       }
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       const token = localStorage.getItem('TOKEN');
//       if (token) {
//         await axiosClient.post('/logout');
//       }
//     } catch (error) {
//       console.error('Erreur lors de la déconnexion:', error);
//     } finally {
//       localStorage.removeItem('TOKEN');
//       sessionStorage.removeItem('registeredEmail');
//       setIsAuthenticated(false);
//       setUser(null);
//       navigate('/login');
//     }
//   };

//   const resendVerificationEmail = async (email) => {
//     try {
//       await axiosClient.post('/resend-verification-email', { email });
//       return { success: true };
//     } catch (error) {
//       throw error;
//     }
//   };

//   return (
//     <AuthContext.Provider 
//       value={{ 
//         isAuthenticated, 
//         user, 
//         loading,
//         login, 
//         logout,
//         register,
//         resendVerificationEmail,
//         checkAuthStatus
//       }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };


import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  // const checkAuthStatus = async () => {
  //   try {
  //     const token = localStorage.getItem('TOKEN');
  //     if (token) {
  //       const response = await axiosClient.get('/user', {
  //         headers: {
  //           'Authorization': `Bearer ${token}`
  //         }
  //       });
  //       setUser(response.data.user);
  //       setIsAuthenticated(true);
  //     }
  //   } catch (error) {
  //     console.error('Auth check failed:', error);
  //     logout();
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('TOKEN');
      if (token) {
        const response = await axiosClient.get('/user');
        setUser(response.data.user);
        setIsAuthenticated(true);
        return true;
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
    return false;
  };

  const verifyAuth = async () => {
    let attempts = 0;
    const maxAttempts = 3;
    while (attempts < maxAttempts) {
      const isAuth = await checkAuthStatus();
      if (isAuth) return;
      attempts++;
      if (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2 secondes de délai
      }
    }
    navigate('/login');
  };

  const login = async (credentials) => {
    try {
      const response = await axiosClient.post('/login', credentials);
      
      if (!response.data.email_verified) {
        navigate('/email-verification-pending');
        throw new Error('Veuillez vérifier votre email avant de vous connecter.');
      }

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

    const register = async (userData) => {
    try {
      const response = await axiosClient.post('/register', userData);
      
      if (response.status === 201) {
        // Stocker l'email pour la page de vérification
        sessionStorage.setItem('registeredEmail', userData.email);
        navigate('/email-verification-pending');
      }
      
      return response;
    } catch (error) {
      // Gérer les erreurs spécifiques à l'inscription
      if (error.response?.status === 422) {
        throw new Error('Email déjà utilisé ou données invalides');
      }
      throw error;
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem('TOKEN');
      if (token) {
        await axiosClient.post('/logout', null, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    } finally {
      localStorage.removeItem('TOKEN');
      setIsAuthenticated(false);
      setUser(null);
      navigate('/login');
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        user, 
        loading,
        login, 
        logout,
        register, 
        checkAuthStatus,
        verifyAuth
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};