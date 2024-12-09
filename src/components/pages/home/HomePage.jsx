// src/pages/HomePage.jsx
import SearchBar from './SearchBar';
import Stats from './Stats';
import { Button } from '@mui/material';
import { useTranslation } from '../../context/LanguageContext';
import StepCreateAccount from './StepCreateAccount';
import PopularVacancies from './Vacancies';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const HomePage = () => {
  const { t } = useTranslation();
  const { isAuthenticated, checkAuthStatus } = useAuth();
  const navigate = useNavigate();
  const suggestions = ['Designer', 'Programming', 'Digital Marketing', 'Video', 'Animation'];


  useEffect(() => {
    let isMounted = true;
  
    const verifyAuth = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Délai initial
      if (isMounted) {
        const isAuth = await checkAuthStatus();
        if (!isAuth && isMounted) {
          navigate('/login');
        }
      }
    };
  
    verifyAuth();
  
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {t('home.title')}
          </h1>
          <p className="text-gray-600 mb-8">
            {t('home.subtitle')}
          </p>
          
          <SearchBar />

          <div className="flex gap-2 flex-wrap mt-4">
            <span className="text-gray-600">{t('home.suggestion')}</span>
            {suggestions.map(suggestion => (
              <Button key={suggestion} variant="text" size="small"
             
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>

        <div className="hidden md:block ml-4">
          <img  src="https://cdn.pixabay.com/photo/2024/04/17/19/22/ai-generated-8702857_1280.png" alt="Job Search" className="w-3/4 ml-3 " />
        </div>
      </div>

      <Stats />  
      <PopularVacancies />
      <StepCreateAccount />
    </div>
  );
};

export default HomePage;
