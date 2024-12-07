



// import { useTranslation } from '../../context/LanguageContext';
// import { motion } from 'framer-motion';
// import { 
//   Stethoscope,  // Pour Anesthesiologists
//   Scissors,     // Pour Surgeons
//   Heart,        // Pour Obstetricians
//   Shell,        // Pour Orthodontists
//   UserCog,      // Pour Maxillofacial
//   Code,         // Pour Software Dev
//   Brain,        // Pour Psychiatrists
//   Database,     // Pour Data Scientist
//   Wallet,       // Pour Financial Manager
//   TrendingUp,   // Pour Management Analysis
//   Monitor,      // Pour IT Manager
//   LineChart     // Pour Operations Research
// } from 'lucide-react';

// // Configuration des jobs avec leurs icônes correspondantes
// // La clé doit correspondre exactement aux clés dans le fichier de traduction
// const jobs = [
//   {
//     icon: <Stethoscope size={24} />,
//     key: 'anesthesiologists',
//   },
//   {
//     icon: <Scissors size={24} />,
//     key: 'surgeons',
//   },
//   {
//     icon: <Heart size={24} />,
//     key: 'obstetricians',
//   },
//   {
//     icon: <Shell size={24} />,
//     key: 'orthodontists',
//   },
//   {
//     icon: <UserCog size={24} />,
//     key: 'maxillofacial',
//   },
//   {
//     icon: <Code size={24} />,
//     key: 'softwareDev',
//   },
//   {
//     icon: <Brain size={24} />,
//     key: 'psychiatrists',
//   },
//   {
//     icon: <Database size={24} />,
//     key: 'dataScientist',
//   },
//   {
//     icon: <Wallet size={24} />,
//     key: 'financialManager',
//   },
//   {
//     icon: <TrendingUp size={24} />,
//     key: 'managementAnalysis',
//   },
//   {
//     icon: <Monitor size={24} />,
//     key: 'itManager',
//   },
//   {
//     icon: <LineChart size={24} />,
//     key: 'operationsResearch',
//   }
// ];


// const PopularVacancies = () => {
//     const { t } = useTranslation();
    
//     const container = {
//       hidden: { opacity: 0 },
//       show: {
//         opacity: 1,
//         transition: {
//           staggerChildren: 0.1
//         }
//       }
//     };
  
//     const item = {
//       hidden: { opacity: 0, y: 20 },
//       show: { opacity: 1, y: 0 }
//     };
  
//     return (
        
//       <section className="bg-white mt-8 m-0 py-10"> {/* Changé de bg-gray-50 à bg-white */}
     
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className=" text-2xl font-bold text-center mb-12 text-gray-900"
//           >
//             {t('home.popularVacancies.title')}
//           </motion.h2>
  
//           <motion.div 
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//           >
//             {jobs.map((job, index) => (
//               <motion.div
//                 key={index}
//                 variants={item}
//                 whileHover={{ 
//                   scale: 1.02,
//                   boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
//                 }}
//                 className="bg-gray-50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:bg-blue-50/50 cursor-pointer border border-gray-100" /* Changé le fond et ajouté une bordure */
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="p-3 bg-white rounded-lg text-blue-600 shadow-sm border border-gray-100"> {/* Changé à bg-white et ajouté une bordure */}
//                     {job.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg mb-2 text-gray-900">
//                       {t(`home.popularVacancies.jobs.${job.key}.title`)}
//                     </h3>
//                     <p className="text-gray-500 text-sm">
//                       {t(`home.popularVacancies.jobs.${job.key}.positions`)}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     );
//   };
  
//   export default PopularVacancies;


import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

// Configuration des métiers avec leurs icônes
const JOBS_CONFIG = [
  {
    icon: 'Stethoscope',
    key: 'anesthesiologists',
    color: 'text-blue-600'
  },
  {
    icon: 'Scissors',
    key: 'surgeons',
    color: 'text-green-600'
  },
  {
    icon: 'Heart',
    key: 'obstetricians',
    color: 'text-red-600'
  },
  {
    icon: 'Shell',
    key: 'orthodontists',
    color: 'text-purple-600'
  },
  {
    icon: 'UserCog',
    key: 'maxillofacial',
    color: 'text-orange-600'
  },
  {
    icon: 'Code',
    key: 'softwareDev',
    color: 'text-indigo-600'
  },
  {
    icon: 'Brain',
    key: 'psychiatrists',
    color: 'text-pink-600'
  },
  {
    icon: 'Database',
    key: 'dataScientist',
    color: 'text-cyan-600'
  },
  {
    icon: 'Wallet',
    key: 'financialManager',
    color: 'text-emerald-600'
  },
  {
    icon: 'TrendingUp',
    key: 'managementAnalysis',
    color: 'text-yellow-600'
  },
  {
    icon: 'Monitor',
    key: 'itManager',
    color: 'text-violet-600'
  },
  {
    icon: 'LineChart',
    key: 'operationsResearch',
    color: 'text-teal-600'
  }
];

// Composant pour l'icône du métier
const JobIcon = ({ iconName, color }) => {
  const IconComponent = Icons[iconName];
  return (
    <div className={`p-3 bg-white rounded-lg ${color} shadow-sm border border-gray-100`}>
      <IconComponent size={24} />
    </div>
  );
};

// Composant pour la carte de métier
const JobCard = ({ job, index }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="h-full"
    >
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:bg-blue-50/50 cursor-pointer border border-gray-100 h-full">
        <div className="flex items-start space-x-4">
          <JobIcon iconName={job.icon} color={job.color} />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg mb-2 text-gray-900 truncate">
              {t(`home.popularVacancies.jobs.${job.key}.title`)}
            </h3>
            <p className="text-gray-500 text-sm">
              {t(`home.popularVacancies.jobs.${job.key}.positions`)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Composant principal
const PopularVacancies = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {JOBS_CONFIG.map((job, index) => (
            <JobCard key={job.key} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularVacancies;