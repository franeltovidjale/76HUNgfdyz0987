// import React from 'react';
// import { useTranslation } from '../../context/LanguageContext';
// import { Link } from 'react-router-dom';
// import { Database, Code, Mic, Brush, Camera, BarChart, Briefcase, Video } from 'lucide-react';

// const PopularCategory = () => {
//   const { t } = useTranslation();

//   const categories = [
//     { id: 1, icon: Brush, label: 'Graphics & Design', positions: 357 },
//     { id: 2, icon: Code, label: 'Code & Programming', positions: 312 },
//     { id: 3, icon: BarChart, label: 'Digital Marketing', positions: 287 },
//     { id: 4, icon: Video, label: 'Video & Animation', positions: 247 },
//     { id: 5, icon: Mic, label: 'Music & Audio', positions: 204 },
//     { id: 6, icon: Briefcase, label: 'Account & Finance', positions: 167 },
//     { id: 7, icon: Camera, label: 'Health & Care', positions: 125 },
//     { id: 8, icon: Database, label: 'Data & Science', positions: 57 },
//   ];

//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Titre de section */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
//             {t('home.popularCategories.title')}
//           </h2>
//           <Link
//             to="/categories"
//             className="text-indigo-600 text-sm font-medium flex items-center hover:underline"
//           >
//             {t('nav.findJob')}
//             <span className="ml-1">→</span>
//           </Link>
//         </div>

//         {/* Grille des catégories */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {categories.map((category) => (
//             <div
//               key={category.id}
//               className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white"
//             >
//               <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-lg">
//                 <category.icon className="w-6 h-6 text-indigo-600" />
//               </div>
//               <div>
//                 <p className="text-gray-800 font-medium">{t(`home.popularCategories.jobs.${category.label.replace(/ & | /g, '').toLowerCase()}.title`) || category.label}</p>
//                 <p className="text-sm text-gray-500">
//                   {category.positions} {t('home.stats.liveJob')}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PopularCategory;


import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Database, Code, Mic, Brush, Camera, BarChart, Briefcase, Video } from 'lucide-react';

const PopularCategory = () => {
  const { t } = useTranslation();

  const categories = [
    { id: 1, icon: Brush, label: 'Graphics & Design', positions: 357, color: 'bg-blue-100', iconColor: 'text-blue-600' },
    { id: 2, icon: Code, label: 'Code & Programming', positions: 312, color: 'bg-green-100', iconColor: 'text-green-600' },
    { id: 3, icon: BarChart, label: 'Digital Marketing', positions: 287, color: 'bg-yellow-100', iconColor: 'text-yellow-600' },
    { id: 4, icon: Video, label: 'Video & Animation', positions: 247, color: 'bg-red-100', iconColor: 'text-red-600' },
    { id: 5, icon: Mic, label: 'Music & Audio', positions: 204, color: 'bg-purple-100', iconColor: 'text-purple-600' },
    { id: 6, icon: Briefcase, label: 'Account & Finance', positions: 167, color: 'bg-indigo-100', iconColor: 'text-indigo-600' },
    { id: 7, icon: Camera, label: 'Health & Care', positions: 125, color: 'bg-teal-100', iconColor: 'text-teal-600' },
    { id: 8, icon: Database, label: 'Data & Science', positions: 57, color: 'bg-gray-100', iconColor: 'text-gray-600' },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {t('home.popularCategories.title')}
          </h2>
          <Link
            to="/categories"
            className="text-blue-600 text-sm font-medium flex items-center hover:underline transition-colors"
          >
            {t('nav.findJob')}
            <span className="ml-1">→</span>
          </Link>
        </div>

        {/* Grille des catégories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`
                flex items-center gap-4 p-4 rounded-lg shadow-md 
                hover:shadow-lg hover:-translate-y-1 transition-all duration-300 
                ${category.color}
              `}
            >
              {/* Icône avec couleur dynamique */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg shadow-inner ${category.iconColor}`}
              >
                <category.icon className="w-6 h-6" />
              </div>
              {/* Texte de la catégorie */}
              <div>
                <p className="text-gray-800 font-semibold text-base">
                  {t(`home.popularCategories.jobs.${category.label.replace(/ & | /g, '').toLowerCase()}.title`) || category.label}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">{category.positions}</span> {t('home.stats.liveJob')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;

