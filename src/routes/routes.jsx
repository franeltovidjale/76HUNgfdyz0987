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
      path: '/traning',
      label: 'Traning'
    },
    {
      path: '/subscription',
      label: 'Subscription'
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
    //   path: '/jobs/detail',
    //   label:'JobDetail'
    // },

    
  

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
   
   
  ];
  
  export const privateRoutes = [
    {
      path: '/dashboard-auth',
      label: 'DashboardAuth'
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
  import { Suspense, lazy, useEffect } from 'react';
  import LoadingSpinner from '../components/pages/ui/LoadingSpinner';
  import EmailVerificationPending from '../components/pages/auth/EmailVerificationPending';
  import JobDetail from '../components/pages/home/JobDetail';

  

  

  // Importez les composants dashboard
  const DashboardOverview = lazy(() => import('../components/pages/authPage/dashboard/Overview'));
  const DashboardOverviewCompany = lazy(() => import('../components/pages/authPage/dashboardCompany/OverviewCompany'));
  const PostJob = lazy(() => import('../components/pages/authPage/dashboardCompany/PostJob'));


const AppliedJobs = lazy(() => import('../components/pages/authPage/dashboard/AppliedJobs'));
const Favorites = lazy(() => import('../components/pages/authPage/dashboard/Favorites'));
const JobAlerts = lazy(() => import('../components/pages/authPage/dashboard/JobAlerts'));
const Settings = lazy(() => import('../components/pages/authPage/dashboard/Settings'));
  
  // Lazy loading des pages pour optimiser le chargement
  const FindJobs = lazy(() => import('../components/pages/home/FindJobs'));
  // const Employers = lazy(() => import('../pages/Employers'));
  // const Candidates = lazy(() => import('../pages/Candidates'));
  // const Pricing = lazy(() => import('../pages/Pricing'));
  // const Support = lazy(() => import('../pages/Support'));
  const Login = lazy(() => import('../components/pages/auth/Login'));
  const Register = lazy(() => import('../components/pages/auth/Register'));

  const ForgetPassword = lazy(() => import('../components/pages/auth/ForgetPassword'));

  const DashboardAuth  = lazy(() => import('../components/pages/authPage/DashboardAuth'));
  const DashboardAuthCompany  = lazy(() => import('../components/pages/authPage/DashboardAuthCompany'));
 
 
  // const Profile = lazy(() => import('../pages/dashboard/Profile'));
  // const Messages = lazy(() => import('../pages/dashboard/Messages'));
  // const Applications = lazy(() => import('../pages/dashboard/Applications'));
  // const SavedJobs = lazy(() => import('../pages/dashboard/SavedJobs'));
  // const NotFound = lazy(() => import('../pages/NotFound'));
  
  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, user } = useAuth();
    const location = useLocation();
   
    
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    // Vérification du rôle pour les routes spécifiques
  if (location.pathname.startsWith('/dashboard-company') && user.role !== 'company') {
    return <Navigate to="/dashboard-auth" replace />;
  }

  if (location.pathname.startsWith('/dashboard-auth') && user.role === 'company') {
    return <Navigate to="/dashboard-company" replace />;
  }
    
    return children;
  };
  
  // const PublicRoute = ({ children }) => {
  //   const { isAuthenticated } = useAuth();
    
  //   if (isAuthenticated) {
  //     return <Navigate to="/dashboard-auth" replace />;
  //   }
    
  //   return children;
  // };

  const PublicRoute = ({ children }) => {
    const { isAuthenticated, user } = useAuth();
  
    useEffect(() => {
      console.log('Auth state:', { isAuthenticated, userRole: user?.role });
    }, [isAuthenticated, user]);
  
    if (isAuthenticated && user) {
      const redirectPath = user.role === 'company' ? '/dashboard-company' : '/dashboard-auth';
      console.log('Redirecting to:', redirectPath);
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };
  
  
  const AppRouter = () => {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
         
          {/* Routes du Dashboard */}
        <Route path="/dashboard-auth" element={
          <ProtectedRoute>
            <DashboardAuth />
          </ProtectedRoute>
        }>
          <Route index element={<DashboardOverview />} />
          <Route path="applied-jobs" element={<AppliedJobs />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="job-alerts" element={<JobAlerts />} />
          <Route path="settings" element={<Settings />} />
         

        </Route>

          {/* Routes du Dashboard Company*/}
          <Route path="/dashboard-company" element={
          <ProtectedRoute>
            <DashboardAuthCompany />
          </ProtectedRoute>
        }>
          <Route index element={<DashboardOverviewCompany />} />
          <Route path="post-job" element={<PostJob />} />
          
        </Route>


          
         
          <Route path="/find-job" element={<FindJobs />} />
          {/* <Route path="/employers" element={<Employers />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
           */}


        {/* Mettre la route de vérification d'email en premier et avec VerificationRoute */}
        

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
            path="/jobs/detail"
            element={
              <ProtectedRoute>
                <JobDetail />
              </ProtectedRoute>
            }
          />



         
  
          {/* Routes protégées */}
         <Route
            path="/dashboard-auth"
            element={
              <ProtectedRoute>
                <DashboardAuth />
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

          <Route path="/" element={<HomePage />} />

        </Routes>
      </Suspense>
    );
  };
  
  export default AppRouter;