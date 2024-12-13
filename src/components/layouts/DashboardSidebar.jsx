// src/components/layout/DashboardSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from '../../context/LanguageContext';
import { 
  LayoutDashboard, 
  Briefcase, 
  Heart, 
  Bell, 
  Settings 
} from 'lucide-react';

const DashboardSidebar = () => {
  const { t } = useTranslation();

  const navItems = [
    {
      path: '/dashboard-auth',
      icon: LayoutDashboard,
      label: t('nav.overview')
    },
    {
      path: '/applied-jobs',
      icon: Briefcase,
      label: t('nav.appliedJobs')
    },
    {
      path: '/favorites',
      icon: Heart,
      label: t('nav.favorites')
    },
    {
      path: '/job-alerts',
      icon: Bell,
      label: t('nav.jobAlerts'),
      badge: '05'
    },
    {
      path: '/settings',
      icon: Settings,
      label: t('nav.settings')
    }
  ];

  return (
    <div className="fixed left-0 w-64 h-screen bg-white border-r border-gray-200 pt-20">
      <nav className="flex flex-col px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center px-4 py-3 text-sm font-medium rounded-lg
              ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}
            `}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default DashboardSidebar;