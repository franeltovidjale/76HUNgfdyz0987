// // src/App.jsx (mis à jour)
// import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from '@mui/material';
// import { LanguageProvider } from './components/context/LanguageContext';
// import { AuthProvider } from './components/context/AuthContext';
// import { theme } from './components/theme';
// import Navbar from './components/layouts/Navbar';
// import AppRouter from './routes/routes';
// import TopBar from './components/layouts/TopBar';

// const App = () => {
//   return (
//     <LanguageProvider>
//       <AuthProvider>
//         <BrowserRouter>
//           <ThemeProvider theme={theme}>
//             <div className="min-h-screen bg-gray-50">
//             <Navbar />
//             <TopBar />
//               <AppRouter />
//             </div>
//           </ThemeProvider>
//         </BrowserRouter>
//       </AuthProvider>
//     </LanguageProvider>
//   );
// };

// export default App;

// src/App.jsx
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { LanguageProvider } from './components/context/LanguageContext';
import { AuthProvider } from './components/context/AuthContext';
import { theme } from './components/theme';
import Navbar from './components/layouts/Navbar';
import AppRouter from './routes/routes';
import TopBar from './components/layouts/TopBar';

// Composant Layout qui gère l'affichage conditionnel
const Layout = () => {
  const location = useLocation();
  
  // Liste des routes où on ne veut pas afficher Navbar et TopBar
  const noHeaderRoutes = ['/login', '/register','/email-verification','/forget-password','/reset-password'];
  
  // Vérifie si le chemin actuel est dans la liste des routes sans header
  const shouldShowHeader = !noHeaderRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      {shouldShowHeader && (
        <>
          <Navbar />
          <TopBar />
        </>
      )}
      <AppRouter />
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Layout />
          </ThemeProvider>
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;
