


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Button, 
  InputBase,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useAuth } from '../context/AuthContext'; // Assurez-vous d'avoir le bon chemin d'importation
import { useTranslation } from '../context/LanguageContext';

// Style personnalisé pour l'input de recherche
const SearchInput = styled(InputBase)(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    padding: '8px 12px',
    width: '100%',
    '&::placeholder': {
      color: theme.palette.text.secondary,
      opacity: 0.7,
    },
  },
}));

const TopBar = () => {

const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Récupération de l'état d'authentification

  const handleSignIn = () => {
    navigate('/login');
  };

  // Composant pour les boutons d'authentification
  const AuthButtons = () => {
    if (isAuthenticated) {
      return (
        <Button
          variant="contained"
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': { bgcolor: 'primary.dark' },
            minWidth: '120px',
            fontWeight: 'bold'
          }}
        >
          Post A Jobs
        </Button>
      );
    }

    return (
      <>
        <Button
          onClick={handleSignIn}
          variant="text"
          sx={{
            color: 'text.secondary',
            '&:hover': { color: 'primary.main' },
            minWidth: '80px',
            fontWeight: 'bold'
          }}
        >
          Connexion
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': { bgcolor: 'primary.dark' },
            minWidth: '120px',
            fontWeight: 'bold'
          }}
        >
          Post A Jobs
        </Button>
      </>
    );
  };

  return (
    <div className="w-full border-b border-gray-200 bg-transparent">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {/* Logo */}
          <div className="w-full lg:w-auto flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <svg 
                className="w-6 h-6 text-primary-600" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z"/>
              </svg>
              <span className="ml-2 text-xl font-semibold text-gray-900">Happi Job</span>
            </Link>

            {/* Boutons version mobile */}
            <div className="flex items-center gap-2 lg:hidden">
              <AuthButtons />
            </div>
          </div>

          {/* Barre de recherche */}
          <div className="w-full lg:flex-1">
            <div className="flex items-center w-full border rounded-lg px-3 py-2 hover:border-primary-600 transition-colors">
              <Search className="text-gray-400 mr-2" />
              <SearchInput
                placeholder={t('home.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
              />
            </div>
          </div>

          {/* Boutons version desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <AuthButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;