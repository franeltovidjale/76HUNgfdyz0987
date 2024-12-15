


import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

// Configuration des métiers avec leurs icônes et couleurs
const JOBS_CONFIG = [
  {
    icon: 'Stethoscope',
    key: 'anesthesiologists',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: 'Scissors',
    key: 'surgeons',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: 'Heart',
    key: 'obstetricians',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: 'Shell',
    key: 'orthodontists',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: 'UserCog',
    key: 'maxillofacial',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: 'Code',
    key: 'softwareDev',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: 'Brain',
    key: 'psychiatrists',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: 'Database',
    key: 'dataScientist',
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    icon: 'Wallet',
    key: 'financialManager',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: 'TrendingUp',
    key: 'managementAnalysis',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: 'Monitor',
    key: 'itManager',
    color: 'bg-violet-100 text-violet-600',
  },
  {
    icon: 'LineChart',
    key: 'operationsResearch',
    color: 'bg-teal-100 text-teal-600',
  },
];

// Composant pour l'icône stylisée
const JobIcon = ({ iconName, color }) => {
  const IconComponent = Icons[iconName];
  return (
    <div className={`p-3 rounded-lg ${color} shadow-sm`}>
      <IconComponent size={28} />
    </div>
  );
};

// Carte individuelle pour chaque métier
const JobCard = ({ job, index }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.03, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md"
    >
      <div className="flex items-center space-x-4 p-6">
        <JobIcon iconName={job.icon} color={job.color} />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">
            {t(`home.popularVacancies.jobs.${job.key}.title`)}
          </h3>
          <p className="text-gray-500 text-sm">
            {t(`home.popularVacancies.jobs.${job.key}.positions`)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Composant principal
const PopularVacancies = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('home.popularVacancies.title')}
          </h2>
        </motion.div>

        {/* Grille des métiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {JOBS_CONFIG.map((job, index) => (
            <JobCard key={job.key} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularVacancies;
