// // src/components/layout/LanguageSwitcher.jsx
// import { MenuItem, Select } from '@mui/material';
// import { useTranslation } from '../context/LanguageContext';

// export const LanguageSwitcher = () => {
//   const { currentLang, setLanguage } = useTranslation();

//   return (
//     <Select
//       value={currentLang}
//       onChange={(e) => setLanguage(e.target.value)}
//       size="x-small"
//       className="ml-4"
//     >
     
//        <MenuItem value="en">🇺🇸 English</MenuItem>
//        <MenuItem value="fr">🇫🇷 Français</MenuItem>
//     </Select>
//   );
// };

import { MenuItem, Select } from '@mui/material';
import { useTranslation } from '../context/LanguageContext';

export const LanguageSwitcher = () => {
  const { currentLang, setLanguage } = useTranslation();

  return (
    <Select
      value={currentLang}
      onChange={(e) => setLanguage(e.target.value)}
      size="small"
      variant="standard" // Retire les bordures
      className="ml-4"
      sx={{
        '.MuiSelect-select': {
          paddingY: '2px',
          minHeight: 'unset',
        },
        '&:before': {
          display: 'none', // Retire la ligne du bas en état normal
        },
        '&:after': {
          display: 'none', // Retire la ligne du bas en état focus
        },
        '.MuiSelect-icon': {
          color: 'text.secondary', // Couleur de l'icône
        }
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            mt: 1
          }
        }
      }}
    >
      <MenuItem  value="en" dense>🇺🇸 English</MenuItem>
      <MenuItem value="fr" dense>🇫🇷 Français</MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;