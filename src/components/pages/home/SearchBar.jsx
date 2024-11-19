

import { Button, TextField } from '@mui/material';
import { LocationOn, Search } from '@mui/icons-material';
import { useTranslation } from '../../context/LanguageContext';

const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row gap-4 sm:gap-2">
      <TextField
        placeholder={t('home.searchPlaceholder')}
        variant="outlined"
        fullWidth
        slotProps={{
          input: {
            startAdornment: <Search className="text-primary-600" />
          }
        }}
      />
      <TextField
        placeholder={t('home.locationPlaceholder')}
        variant="outlined"
        fullWidth
        slotProps={{
          input: {
            startAdornment: <LocationOn className="text-primary-600" />
          }
        }}
      />
      <Button 
        variant="contained" 
        size="large" 
        className="whitespace-nowrap" 
        sx={{ padding: '10px 34px',fontWeight: 'bold' }} 
      >
        {t('home.findJobButton')}
      </Button>
    </div>
  );
};

export default SearchBar;
