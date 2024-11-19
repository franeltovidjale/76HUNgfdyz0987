// src/theme/index.js
import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary[600],
      ...colors.primary,
    },
    secondary: {
      main: colors.secondary[600],
      ...colors.secondary,
    },
    neutral: {
      main: colors.neutral[600],
      ...colors.neutral,
    },
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    // Ajouter d'autres styles typographiques au besoin
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 500,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
      },
    },
  },
});