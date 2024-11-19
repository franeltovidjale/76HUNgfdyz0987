



import { useTranslation } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Stethoscope,  // Pour Anesthesiologists
  Scissors,     // Pour Surgeons
  Heart,        // Pour Obstetricians
  Shell,        // Pour Orthodontists
  UserCog,      // Pour Maxillofacial
  Code,         // Pour Software Dev
  Brain,        // Pour Psychiatrists
  Database,     // Pour Data Scientist
  Wallet,       // Pour Financial Manager
  TrendingUp,   // Pour Management Analysis
  Monitor,      // Pour IT Manager
  LineChart     // Pour Operations Research
} from 'lucide-react';

// Configuration des jobs avec leurs icônes correspondantes
// La clé doit correspondre exactement aux clés dans le fichier de traduction
const jobs = [
  {
    icon: <Stethoscope size={24} />,
    key: 'anesthesiologists',
  },
  {
    icon: <Scissors size={24} />,
    key: 'surgeons',
  },
  {
    icon: <Heart size={24} />,
    key: 'obstetricians',
  },
  {
    icon: <Shell size={24} />,
    key: 'orthodontists',
  },
  {
    icon: <UserCog size={24} />,
    key: 'maxillofacial',
  },
  {
    icon: <Code size={24} />,
    key: 'softwareDev',
  },
  {
    icon: <Brain size={24} />,
    key: 'psychiatrists',
  },
  {
    icon: <Database size={24} />,
    key: 'dataScientist',
  },
  {
    icon: <Wallet size={24} />,
    key: 'financialManager',
  },
  {
    icon: <TrendingUp size={24} />,
    key: 'managementAnalysis',
  },
  {
    icon: <Monitor size={24} />,
    key: 'itManager',
  },
  {
    icon: <LineChart size={24} />,
    key: 'operationsResearch',
  }
];

// const PopularVacancies = () => {
//   const { t } = useTranslation();
  
//   // Configurations des animations
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 }
//   };

//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Titre avec animation */}
//         <motion.h2 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-3xl font-bold text-center mb-12"
//         >
//           {/* Utilise le chemin exact de la traduction */}
//           {t('home.popularVacancies.title')}
//         </motion.h2>

//         {/* Grille des jobs avec animation */}
//         <motion.div 
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {jobs.map((job, index) => (
//             <motion.div
//               key={index}
//               variants={item}
//               whileHover={{ 
//                 scale: 1.02,
//                 boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
//               }}
//               className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:bg-blue-50 cursor-pointer"
//             >
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
//                   {job.icon}
//                 </div>
//                 <div>
//                   {/* Utilise les chemins exacts des traductions */}
//                   <h3 className="font-semibold text-lg mb-2">
//                     {t(`home.popularVacancies.jobs.${job.key}.title`)}
//                   </h3>
//                   <p className="text-gray-500 text-sm">
//                     {t(`home.popularVacancies.jobs.${job.key}.positions`)}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PopularVacancies;

// ... imports restent les mêmes

const PopularVacancies = () => {
    const { t } = useTranslation();
    
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    };
  
    const item = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    };
  
    return (
        
      <section className="bg-white mt-8 m-0 py-10"> {/* Changé de bg-gray-50 à bg-white */}
     
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className=" text-2xl font-bold text-center mb-12 text-gray-900"
          >
            {t('home.popularVacancies.title')}
          </motion.h2>
  
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                }}
                className="bg-gray-50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:bg-blue-50/50 cursor-pointer border border-gray-100" /* Changé le fond et ajouté une bordure */
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-lg text-blue-600 shadow-sm border border-gray-100"> {/* Changé à bg-white et ajouté une bordure */}
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">
                      {t(`home.popularVacancies.jobs.${job.key}.title`)}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {t(`home.popularVacancies.jobs.${job.key}.positions`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default PopularVacancies;