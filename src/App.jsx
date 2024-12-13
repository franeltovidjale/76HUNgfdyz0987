

// src/App.jsx
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { LanguageProvider } from './components/context/LanguageContext';
import { AuthProvider } from './components/context/AuthContext';
import { theme } from './components/theme';

import AppRouter from './routes/routes';

import Header from './components/layouts/Header';

// Composant Layout qui gère l'affichage conditionnel
const Layout = () => {
  const location = useLocation();
  
  // Liste des routes où on ne veut pas afficher Navbar et TopBar
  const noHeaderRoutes = ['/login', '/register','/email-verification','/forget-password','/reset-password','/email-verification-pending'];
  
  // Vérifie si le chemin actuel est dans la liste des routes sans header
  const shouldShowHeader = !noHeaderRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      {shouldShowHeader && (
        <>
          <Header />
          
        </>
      )}
      <AppRouter />
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>     {/* Router doit être à l'extérieur de AuthProvider */}
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <Layout />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
