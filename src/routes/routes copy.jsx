// src/routes/routes.js

// Ajoutez ce composant au début de votre fichier router.jsx
const VerificationRoute = ({ children }) => {
  // Cette route est toujours accessible, qu'on soit authentifié ou non
  return children;
};

export const publicRoutes = [
    {
      path: '/',
      label: 'Home'
    },
    {
      path: '/find-job',
      label: 'Find Job'
    },
    {
      path: '/employers',
      label: 'Employers'
    },
    {
      path: '/candidates',
      label: 'Candidates'
    },
    {
      path: '/pricing',
      label: 'Pricing'
    },
   
    {
      path: '/login',
      label: 'Login'
    },
    {
      path: '/register',
      label: 'Register'
    },
    {
      path:'/email-verification-pending',
      label:'EmailVerificationPending'
    },
  

    // {
    //   path: '/email-verification',
    //   label: 'EmailCode'
    // },
    // {
    //   path: '/verify-email/:token',
    //   label: 'ConfirmationMail'
    // },
    // {
    //   path: ' /forget-password',
    //   label: 'ForgetPassword'
    // },
    // {
    //   path: ' /reset-password',
    //   label: 'ResetPassword'
    // }
   
  ];
  
  export const privateRoutes = [
    {
      path: '/dashboard',
      label: 'Dashboard'
    },
    {
      path: '/profile',
      label: 'Profile'
    },
    {
      path: '/messages',
      label: 'Messages'
    },
    {
      path: '/applications',
      label: 'Applications'
    },
    {
      path: '/saved-jobs',
      label: 'Saved Jobs'
    }
  ];
  
  // src/routes/router.jsx
  import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
  import { useAuth } from '../components/context/AuthContext';
  import HomePage from '../components/pages/home/HomePage';
  import { Suspense, lazy } from 'react';
  import LoadingSpinner from '../components/pages/ui/LoadingSpinner';
  import EmailVerificationPending from '../components/pages/auth/EmailVerificationPending';
  
  // Lazy loading des pages pour optimiser le chargement
  const FindJobs = lazy(() => import('../components/pages/home/FindJobs'));
  // const Employers = lazy(() => import('../pages/Employers'));
  // const Candidates = lazy(() => import('../pages/Candidates'));
  // const Pricing = lazy(() => import('../pages/Pricing'));
  // const Support = lazy(() => import('../pages/Support'));
  const Login = lazy(() => import('../components/pages/auth/Login'));
  const Register = lazy(() => import('../components/pages/auth/Register'));
  const ForgetPassword = lazy(() => import('../components/pages/auth/ForgetPassword'));
  const ResetPassword = lazy(() => import('../components/pages/auth/ResetPassword'));
  // const ConfirmationMail  = lazy(() => import('../components/pages/auth/ConfirmationMail'));
  // const EmailVerificationPending  = lazy(() => import('../components/pages/auth/EmailVerificationPending'));
 
  // const Profile = lazy(() => import('../pages/dashboard/Profile'));
  // const Messages = lazy(() => import('../pages/dashboard/Messages'));
  // const Applications = lazy(() => import('../pages/dashboard/Applications'));
  // const SavedJobs = lazy(() => import('../pages/dashboard/SavedJobs'));
  // const NotFound = lazy(() => import('../pages/NotFound'));
  
  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    
    return children;
  };
  
  const PublicRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    
    if (isAuthenticated) {
      return <Navigate to="/dashboard" replace />;
    }
    
    return children;
  };
  
  const AppRouter = () => {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Routes publiques */}
          
          {/* <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } /> */}
          <Route path="/find-job" element={<FindJobs />} />
          {/* <Route path="/employers" element={<Employers />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
           */}


        {/* Mettre la route de vérification d'email en premier et avec VerificationRoute */}
        {/* <Route
          path="/verify-email/:token"
          element={
            <VerificationRoute>
              <ConfirmationMail />
            </VerificationRoute>
          }
        /> */}

          {/* Routes d'authentification */} 
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/email-verification-pending"
            element={
              <PublicRoute>
                <EmailVerificationPending />
              </PublicRoute>
            }
          />
            
          
          <Route
            path="/forget-password"
            element={
              <PublicRoute>
                <ForgetPassword />
              </PublicRoute>
            }
          />

            
          <Route
            path="/reset-password"
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            }
          />
  
          {/* Routes protégées */}
         <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
            {/*
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/applications"
            element={
              <ProtectedRoute>
                <Applications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-jobs"
            element={
              <ProtectedRoute>
                <SavedJobs />
              </ProtectedRoute>
            }
          /> */}
  
          {/* Route 404 */}
          {/* <Route path="*" element={<NotFound />} /> */}

          <Route path="/" element={<Login />} />

        </Routes>
      </Suspense>
    );
  };
  
  export default AppRouter;