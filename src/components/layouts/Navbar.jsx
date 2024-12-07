
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { publicRoutes, privateRoutes } from '../../routes/routes';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useScrollTrigger } from '@mui/material';

const Navbar = () => {
  const { t } = useTranslation();
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navbarClasses = `
    transition-all duration-300 ease-in-out w-full
    ${scrolled ? 'bg-white shadow-md' : 'bg-[transparent]'}
    ${trigger ? 'py-2' : 'py-4'}
  `;

  const appBarStyle = {
    '--AppBar-background': scrolled ? '#F9FAFB' : 'transparent',
  };



  const DesktopNav = () => (
    <Toolbar className="justify-between">
      <div className="flex items-center gap-6">
        <nav className="flex gap-6">
          {publicRoutes
            .filter(route => !['Login', 'Register','EmailCode','ForgetPassword','ResetPassword','EmailVerificationPending'].includes(route.label))
            .map(route => (
              <Link
                key={route.path}
                to={route.path}
                className={`
                  px-1 py-2 rounded-md transition-all duration-200
                  hover:bg-primary-50 hover:text-primary-600
                  ${location.pathname === route.path
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-neutral-600 hover:text-primary-600'
                  }
                `}
              >
                {t(`nav.${route.label.toLowerCase()}`)}
              </Link>
            ))}
        </nav>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <PhoneCallbackIcon color="primary" />
          <Typography variant="body1" className="text-neutral-700">
            +123-456-7890
          </Typography>
        </div>
        <LanguageSwitcher />
      </div>
    </Toolbar>
  );

  const MobileNav = () => (
    <Toolbar className="justify-between px-6 md:px-8">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <PhoneCallbackIcon color="primary" className="h-5 w-5 "  />
          <Typography variant="body2" className="text-neutral-700 hidden sm:block whitespace-nowrap">
            +123-456-7890
          </Typography>
        </div>
        <LanguageSwitcher />
      </div>
  
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={() => setIsOpen(true)}
        className="ml-4"
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
  );
  
  const MobileDrawer = () => (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      PaperProps={{
        className: 'w-4/5 max-w-sm bg-white'
      }}
    >
      <div className="p-4">
        <div className="flex justify-end mb-6">
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <List className="space-y-2">
          {publicRoutes
            .filter(route => !['Login', 'Register','EmailCode','ForgetPassword','ResetPassword','EmailVerificationPending'].includes(route.label))
            .map(route => (
              <ListItem
                key={route.path}
                component={Link}
                to={route.path}
                onClick={() => setIsOpen(false)}
                className={`
                  rounded-md px-4 py-2 transition-all duration-200
                  ${location.pathname === route.path
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-primary-600'
                  }
                `}
              >
                {t(`nav.${route.label.toLowerCase()}`)}
              </ListItem>
            ))}
        </List>
      </div>
    </Drawer>
  );

  return (
    <>
    <div className={`${trigger ? 'h-16' : 'h-20'} transition-all duration-300`} />
    <AppBar position="fixed" color="transparent" elevation={0} className={navbarClasses} style={appBarStyle}>
    <div className="w-full">
      <div className="block lg:hidden">
        <MobileNav />
      </div>
      <div className="hidden lg:block container mx-auto">
        <DesktopNav />
      </div>
      <MobileDrawer />
    </div>
  </AppBar>

    </>
  
  );
};

export default Navbar;
