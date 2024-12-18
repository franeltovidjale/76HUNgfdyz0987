import React, { useState, useEffect } from 'react';
import { Bell, Heart, Briefcase, ChevronRight, Edit2, ExternalLink, MoreVertical, Star, Eye, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const Overview = () => {
  const { user } = useAuth();
  const [openMenuId, setOpenMenuId] = useState(null);

  const userStats = [
    {
      id: 1,
      label: 'Offres postulées',
      count: 589,
      icon: Briefcase,
      bgGradient: 'from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-100',
    },
    {
      id: 2,
      label: 'Offres favorites',
      count: 238,
      icon: Heart,
      bgGradient: 'from-rose-50 to-pink-50',
      iconColor: 'text-rose-600',
      borderColor: 'border-rose-100',
    },
    
  ];

  const recentApplications = [
    {
      id: 1,
      company: 'UI/UX Designer',
      type: 'Full Time',
      date: '27 days remaining',
      status: 'Active',
      count: 798,
    },
    {
      id: 2,
      company: 'Senior UX Designer',
      type: 'Internship',
      date: '8 days remaining',
      status: 'Active',
      count: 185,
    },
    {
      id: 3,
      company: 'Technical Support Specialist',
      type: 'Part Time',
      date: '4 days remaining',
      status: 'Active',
      count: 556,
    },
    {
      id: 4,
      company: 'Junior Graphic Designer',
      type: 'Full Time',
      date: '24 days remaining',
      status: 'Active',
      count: 583,
    },
    {
      id: 5,
      company: 'Front End Developer',
      type: 'Full Time',
      date: 'Dec 7, 2019',
      status: 'Expire',
      count: 740,
    },
  ];

  // Gestionnaire de clic en dehors du menu
  useEffect(() => {
    const handleClickOutside = () => setOpenMenuId(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Fonction pour gérer l'ouverture/fermeture du menu
  const toggleMenu = (jobId, e) => {
    e.stopPropagation();
    setOpenMenuId(openMenuId === jobId ? null : jobId);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Bienvenue, {user?.name || 'Company'}
          </h1>
          <p className="mt-2 text-gray-600">
            Voici un aperçu de vos activités et opportunités
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {userStats.map((stat) => (
            <div
              key={stat.id}
              className={`bg-gradient-to-br ${stat.bgGradient} rounded-xl border ${stat.borderColor} p-6 shadow-sm hover:shadow transition-shadow duration-200`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">
                    {stat.count.toLocaleString()}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-white shadow-sm ${stat.iconColor}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Alert */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 mb-8 shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Edit2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-white font-medium">Complétez votre profil</h3>
                <p className="text-white/80 text-sm">
                  Optimisez votre visibilité auprès des recruteurs
                </p>
              </div>
            </div>
            <Link
              to="/dashboard-auth/settings"
              className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors duration-200 shadow-sm"
            >
              Modifier le profil
            </Link>
          </div>
        </div>

        {/* Liste des emplois */}
        {/* Liste des emplois */}
<div className="bg-white rounded-xl shadow-sm border border-gray-200">
  {/* En-tête du tableau - visible uniquement sur desktop */}
  <div className="hidden md:grid md:grid-cols-12 px-6 py-3 bg-gray-50 text-sm text-gray-500">
    <div className="col-span-4">JOBS</div>
    <div className="col-span-2">STATUS</div>
    <div className="col-span-3">APPLICATIONS</div>
    <div className="col-span-3">ACTIONS</div>
  </div>

  {/* Corps du tableau */}
  <div className="divide-y divide-gray-200">
    {recentApplications.map((job) => (
      <div key={job.id}>
        {/* Version Mobile */}
        <div className="md:hidden p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-900">
              {job.company}
            </h3>
            <div className="relative">
              <button 
                className="p-2 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={(e) => toggleMenu(job.id, e)}
              >
                <MoreVertical className="w-4 h-4 text-gray-500" />
              </button>
              
              {openMenuId === job.id && (
                <div 
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="py-1">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                      <Star className="w-4 h-4" />
                      <span>Promote Job</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                      <Eye className="w-4 h-4" />
                      <span>View Detail</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full">
                      <Clock className="w-4 h-4" />
                      <span>Mark as expired</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span>{job.type}</span>
            <span>•</span>
            <span>{job.date}</span>
          </div>
          
          <div className="flex items-center justify-between mb-2">
            <span className={`flex items-center gap-2 ${
              job.status === 'Active' ? 'text-green-600' : 'text-red-600'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                job.status === 'Active' ? 'bg-green-600' : 'bg-red-600'
              }`} />
              {job.status}
            </span>
            
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>{job.count} Applications</span>
            </div>
          </div>
          
          <div className="mt-3">
            <button className="w-full text-center py-2 text-indigo-600 hover:text-indigo-800 font-medium bg-indigo-50 rounded-lg">
              View Applications
            </button>
          </div>
        </div>

        {/* Version Desktop */}
        <div className="hidden md:grid md:grid-cols-12 px-6 py-4 hover:bg-gray-50 items-center">
          {/* [Le contenu desktop reste identique à votre version précédente] */}
          <div className="col-span-4">
            <h3 className="text-sm font-medium text-gray-900">
              {job.company}
            </h3>
            <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
              <span>{job.type}</span>
              <span>•</span>
              <span>{job.date}</span>
            </div>
          </div>

          <div className="col-span-2">
            <span className={`flex items-center gap-2 ${
              job.status === 'Active' ? 'text-green-600' : 'text-red-600'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                job.status === 'Active' ? 'bg-green-600' : 'bg-red-600'
              }`} />
              {job.status}
            </span>
          </div>

          <div className="col-span-3 flex items-center gap-2 text-gray-600">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>{job.count} Applications</span>
          </div>

          <div className="col-span-3 flex items-center justify-between">
            <button className="text-indigo-600 hover:text-indigo-800 font-medium whitespace-nowrap">
              View Applications
            </button>
            {/* [Menu déroulant desktop identique à la version précédente] */}
            <div className="relative">
              {/* [Contenu du menu déroulant identique] */}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default Overview;