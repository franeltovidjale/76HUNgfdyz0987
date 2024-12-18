


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard,
  UserCircle,
  PlusCircle,
  Briefcase, 
  Users,
  CreditCard,
  Building2,
  Settings,
  LogOut,
  X
} from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

const DashboardSidebarCompany = () => {
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

  // Dans le composant
const navItems = [
  {
    path: '/dashboard-company',
    icon: LayoutDashboard, 
    label: t('sidebarCompany.overview')
  },
  {
    path: '/dashboard-company/employer-profile',
    icon: UserCircle,
    label: t('sidebarCompany.employers')
  },
  {
    path: '/dashboard-company/post-job',
    icon: PlusCircle,
    label: t('sidebarCompany.postAjob')
  },
  {
    path: '/dashboard-company/my-jobs',
    icon: Briefcase,
    label: t('sidebarCompany.myjobs')
  },
  {
    path: '/dashboard-company/saved-candidates',
    icon: Users,
    label: t('sidebarCompany.savedCandidate')
  },
  {
    path: '/dashboard-company/plans-billing',
    icon: CreditCard,
    label: t('sidebarCompany.plans')
  },
  {
    path: '/dashboard-company/all-companies',
    icon: Building2,
    label: t('sidebarCompany.companies')
  },
  {
    path: '/dashboard-company/settings',
    icon: Settings,
    label: t('sidebarCompany.settings')
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
                <h2 className="text-lg font-semibold text-gray-900">Happi Job</h2>
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

export default DashboardSidebarCompany;
