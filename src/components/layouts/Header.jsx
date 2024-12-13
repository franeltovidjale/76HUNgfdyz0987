// // src/components/layout/Header.jsx
// import { useState, useEffect } from 'react';
// import { useScrollTrigger } from '@mui/material';
// import Navbar from './Navbar';
// import TopBar from './TopBar';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 20;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
//         <div 
//           className={`
//             w-full transition-all duration-300
//             ${scrolled ? 'shadow-md' : ''}
//           `}
//           style={{
//             backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'white'
//           }}
//         >
//           <Navbar />
//           <TopBar />
          
//         </div>
//       </div>
//       {/* Spacer pour empêcher le contenu de passer sous le header */}
//       <div className={`${trigger ? 'h-32' : 'h-36'} transition-all duration-300`} />
//     </>
//   );
// };

// export default Header;

import { useState, useEffect, useRef } from 'react';
import { useScrollTrigger } from '@mui/material';
import Navbar from './Navbar';
import TopBar from './TopBar';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  
  const headerRef = useRef(null);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateHeaderHeight);
    
    // Initial height calculation
    updateHeaderHeight();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <div 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      >
        <div 
          className={`
            w-full transition-all duration-300
            ${scrolled ? 'shadow-md' : ''}
          `}
          style={{
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'white'
          }}
        >
          <Navbar />
          <TopBar />
          
        </div>
      </div>
      {/* Spacer dynamique basé sur la hauteur réelle du header */}
      <div style={{ height: `${headerHeight}px` }} className="transition-all duration-300" />
    </>
  );
};

export default Header;