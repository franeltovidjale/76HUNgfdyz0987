



// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { 
//   LayoutDashboard, 
//   Briefcase, 
//   Heart, 
//   Bell, 
//   Settings,
//   LogOut,
//   UserCircle,
//   X
// } from 'lucide-react';
// import { useTranslation } from '../context/LanguageContext';

// const DashboardSidebar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { t } = useTranslation();

//   const navItems = [
//     {
//       path: '/dashboard-auth',
//       icon: LayoutDashboard,
//       label: "Vue d'ensemble"
//     },
//     {
//       path: '/dashboard-auth/applied-jobs',
//       icon: Briefcase,
//       label: "Candidatures"
//     },
//     {
//       path: '/dashboard-auth/favorites',
//       icon: Heart,
//       label: "Favoris"
//     },
//     {
//       path: '/dashboard-auth/job-alerts',
//       icon: Bell,
//       label: "Alertes emploi",
//       badge: '05'
//     },
//     {
//       path: '/dashboard-auth/settings',
//       icon: Settings,
//       label: "Paramètres"
//     }
//   ];

//   const NavigationLinks = ({ isMobile }) => (
//     <div className="space-y-1">
//       {navItems.map((item) => (
//         <NavLink
//           key={item.path}
//           to={item.path}
//           onClick={() => setIsMobileMenuOpen(false)}
//           className={({ isActive }) => `
//             flex items-center px-4 py-3 rounded-lg transition-colors
//             ${isActive 
//               ? 'bg-blue-50 text-blue-600 font-medium' 
//               : 'text-gray-600 hover:bg-gray-50'
//             }
//           `}
//         >
//           <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
//           <span className="text-sm">{item.label}</span>
//           {item.badge && (
//             <span className="ml-auto bg-blue-100 text-blue-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
//               {item.badge}
//             </span>
//           )}
//         </NavLink>
//       ))}
      
//       {/* Bouton de déconnexion - Uniquement en mobile */}
//       {isMobile && (
//         <button 
//           onClick={() => setIsMobileMenuOpen(false)}
//           className="w-full flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
//         >
//           <LogOut className="w-5 h-5 mr-3 flex-shrink-0" />
//           <span className="text-sm">Déconnexion</span>
//         </button>
//       )}
//     </div>
//   );

//   return (
//     <>
//       {/* Bouton profil pour mobile */}
//       <div className="lg:hidden fixed top-4 right-16 z-[60] flex items-center gap-2">
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="p-2 rounded-full hover:bg-gray-100 flex items-center gap-2"
//         >
//           <UserCircle size={24} className="text-gray-700 mt-2" />
//         </button>
//       </div>

//       {/* Desktop Sidebar */}
//       <aside className="hidden lg:block fixed left-0 w-64 top-[174px] bottom-0 bg-white border-r border-gray-200 overflow-y-auto z-[40]">
//         <div className="flex flex-col h-full">
//           <div className="flex-1 px-3 py-4">
//             <NavigationLinks isMobile={false} />
//           </div>
//           <div className="border-t border-gray-200">
//             <button className="w-full px-7 py-4 flex items-center text-gray-600 hover:bg-gray-50 transition-colors">
//               <LogOut className="w-5 h-5 mr-3" />
//               <span className="text-sm">Déconnexion</span>
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* Mobile Sidebar */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden fixed inset-0 z-[50]">
//           {/* Overlay */}
//           <div 
//             className="fixed inset-0 bg-black/30 backdrop-blur-sm"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />
          
//           {/* Sidebar */}
//           <aside className="fixed right-0 w-72 h-full bg-white shadow-xl">
//             {/* Header */}
//             <div className="p-4 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
//                 <button 
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="p-2 rounded-full hover:bg-gray-100"
//                 >
//                   <X size={20} className="text-gray-500" />
//                 </button>
//               </div>
//             </div>

//             {/* Navigation Links avec déconnexion incluse */}
//             <div className="px-3 py-4">
//               <NavigationLinks isMobile={true} />
//             </div>
//           </aside>
//         </div>
//       )}
//     </>
//   );
// };

// export default DashboardSidebar;


// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { 
//   LayoutDashboard, 
//   Briefcase, 
//   Heart, 
//   Bell, 
//   Settings,
//   LogOut,
//   UserCircle,
//   X
// } from 'lucide-react';
// import { useTranslation } from '../context/LanguageContext';
// import { useAuth } from '../context/AuthContext';

// const DashboardSidebar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { t } = useTranslation();
//   const { logout } = useAuth();

//   const handleLogout = async () => {
//     try {
//       await logout();
//       setIsMobileMenuOpen(false);
//     } catch (error) {
//       console.error('Erreur lors de la déconnexion:', error);
//     }
//   };

//   const navItems = [
//     {
//       path: '/dashboard-auth',
//       icon: LayoutDashboard,
//       label: "Vue d'ensemble"
//     },
//     {
//       path: '/dashboard-auth/applied-jobs',
//       icon: Briefcase,
//       label: "Candidatures"
//     },
//     {
//       path: '/dashboard-auth/favorites',
//       icon: Heart,
//       label: "Favoris"
//     },
//     {
//       path: '/dashboard-auth/job-alerts',
//       icon: Bell,
//       label: "Alertes emploi",
//       badge: '05'
//     },
//     {
//       path: '/dashboard-auth/settings',
//       icon: Settings,
//       label: "Paramètres"
//     }
//   ];

//   const NavigationLinks = ({ isMobile }) => (
//     <div className="space-y-1">
//       {navItems.map((item) => (
//         <NavLink
//           key={item.path}
//           to={item.path}
//           onClick={() => setIsMobileMenuOpen(false)}
//           className={({ isActive }) => `
//             flex items-center px-4 py-3 rounded-lg transition-colors
//             ${isActive 
//               ? 'bg-blue-50 text-blue-600 font-medium' 
//               : 'text-gray-600 hover:bg-gray-50'
//             }
//           `}
//         >
//           <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
//           <span className="text-sm">{item.label}</span>
//           {item.badge && (
//             <span className="ml-auto bg-blue-100 text-blue-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
//               {item.badge}
//             </span>
//           )}
//         </NavLink>
//       ))}
      
//       {/* Bouton de déconnexion - Uniquement en mobile */}
//       {isMobile && (
//         <button 
//           onClick={handleLogout}
//           className="w-full flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
//         >
//           <LogOut className="w-5 h-5 mr-3 flex-shrink-0" />
//           <span className="text-sm">Déconnexion</span>
//         </button>
//       )}
//     </div>
//   );

//   return (
//     <>
//       {/* Bouton profil pour mobile */}
//       <div className="lg:hidden fixed top-4 right-16 z-[60] flex items-center gap-2">
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="p-2 rounded-full hover:bg-gray-100 flex items-center gap-2"
//         >
//           <UserCircle size={24} className="text-gray-700 mt-2" />
//         </button>
//       </div>

//       {/* Desktop Sidebar */}
//       <aside className="hidden lg:block fixed left-0 w-64 top-[174px] bottom-0 bg-white border-r border-gray-200 overflow-y-auto z-[40]">
//         <div className="flex flex-col h-full">
//           <div className="flex-1 px-3 py-4">
//             <NavigationLinks isMobile={false} />
//           </div>
//           <div className="border-t border-gray-200">
//             <button 
//               onClick={handleLogout}
//               className="w-full px-7 py-4 flex items-center text-gray-600 hover:bg-gray-50 transition-colors"
//             >
//               <LogOut className="w-5 h-5 mr-3" />
//               <span className="text-sm">Déconnexion</span>
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* Mobile Sidebar */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden fixed inset-0 z-[50]">
//           {/* Overlay */}
//           <div 
//             className="fixed inset-0 bg-black/30 backdrop-blur-sm"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />
          
//           {/* Sidebar */}
//           <aside className="fixed right-0 w-72 h-full bg-white shadow-xl">
//             {/* Header */}
//             <div className="p-4 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
//                 <button 
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="p-2 rounded-full hover:bg-gray-100"
//                 >
//                   <X size={20} className="text-gray-500" />
//                 </button>
//               </div>
//             </div>

//             {/* Navigation Links avec déconnexion incluse */}
//             <div className="px-3 py-4">
//               <NavigationLinks isMobile={true} />
//             </div>
//           </aside>
//         </div>
//       )}
//     </>
//   );
// };

// export default DashboardSidebar;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Heart, 
  Bell, 
  Settings,
  LogOut,
  UserCircle,
  X
} from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

const DashboardSidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  const navItems = [
    {
      path: '/dashboard-auth',
      icon: LayoutDashboard,
      label: t('sidebar.overview') // Vue d'ensemble
    },
    {
      path: '/dashboard-auth/applied-jobs',
      icon: Briefcase,
      label: t('sidebar.appliedJobs') // Candidatures
    },
    {
      path: '/dashboard-auth/favorites',
      icon: Heart,
      label: t('sidebar.favorites') // Favoris
    },
    {
      path: '/dashboard-auth/job-alerts',
      icon: Bell,
      label: t('sidebar.jobAlerts'), // Alertes emploi
      badge: '05'
    },
    {
      path: '/dashboard-auth/settings',
      icon: Settings,
      label: t('sidebar.settings') // Paramètres
    }
  ];

  const NavigationLinks = ({ isMobile }) => (
    <div className="space-y-1">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={() => setIsMobileMenuOpen(false)}
          className={({ isActive }) => `
            flex items-center px-4 py-3 rounded-lg transition-colors
            ${isActive 
              ? 'bg-blue-50 text-blue-600 font-medium' 
              : 'text-gray-600 hover:bg-gray-50'
            }
          `}
        >
          <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
          <span className="text-sm">{item.label}</span>
          {item.badge && (
            <span className="ml-auto bg-blue-100 text-blue-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
              {item.badge}
            </span>
          )}
        </NavLink>
      ))}
      
      {/* Bouton de déconnexion - Uniquement en mobile */}
      {isMobile && (
        <button 
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3 flex-shrink-0" />
          <span className="text-sm">{t('logout.logout')}</span>
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Bouton profil pour mobile */}
      <div className="lg:hidden fixed top-4 right-16 z-[60] flex items-center gap-2">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-full hover:bg-gray-100 flex items-center gap-2"
        >
          <UserCircle size={24} className="text-gray-700 mt-2" />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 w-64 top-[174px] bottom-0 bg-white border-r border-gray-200 overflow-y-auto z-[40]">
        <div className="flex flex-col h-full">
          <div className="flex-1 px-3 py-4">
            <NavigationLinks isMobile={false} />
          </div>
          <div className="border-t border-gray-200">
            <button 
              onClick={handleLogout}
              className="w-full px-7 py-4 flex items-center text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span className="text-sm">{t('logout.logout')}</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[50]">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <aside className="fixed right-0 w-72 h-full bg-white shadow-xl">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Navigation Links avec déconnexion incluse */}
            <div className="px-3 py-4">
              <NavigationLinks isMobile={true} />
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default DashboardSidebar;
