// // import React from 'react';
// // import { useTranslation } from '../../context/LanguageContext';
// // import { Link } from 'react-router-dom';
// // import { Database, Code, Mic, Brush, Camera, BarChart, Briefcase, Video } from 'lucide-react';

// // const PopularCategory = () => {
// //   const { t } = useTranslation();

// //   const categories = [
// //     { id: 1, icon: Brush, label: 'Graphics & Design', positions: 357 },
// //     { id: 2, icon: Code, label: 'Code & Programming', positions: 312 },
// //     { id: 3, icon: BarChart, label: 'Digital Marketing', positions: 287 },
// //     { id: 4, icon: Video, label: 'Video & Animation', positions: 247 },
// //     { id: 5, icon: Mic, label: 'Music & Audio', positions: 204 },
// //     { id: 6, icon: Briefcase, label: 'Account & Finance', positions: 167 },
// //     { id: 7, icon: Camera, label: 'Health & Care', positions: 125 },
// //     { id: 8, icon: Database, label: 'Data & Science', positions: 57 },
// //   ];

// //   return (
// //     <section className="py-12 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Titre de section */}
// //         <div className="flex justify-between items-center mb-8">
// //           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
// //             {t('home.popularCategories.title')}
// //           </h2>
// //           <Link
// //             to="/categories"
// //             className="text-indigo-600 text-sm font-medium flex items-center hover:underline"
// //           >
// //             {t('nav.findJob')}
// //             <span className="ml-1">→</span>
// //           </Link>
// //         </div>

// //         {/* Grille des catégories */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //           {categories.map((category) => (
// //             <div
// //               key={category.id}
// //               className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white"
// //             >
// //               <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-lg">
// //                 <category.icon className="w-6 h-6 text-indigo-600" />
// //               </div>
// //               <div>
// //                 <p className="text-gray-800 font-medium">{t(`home.popularCategories.jobs.${category.label.replace(/ & | /g, '').toLowerCase()}.title`) || category.label}</p>
// //                 <p className="text-sm text-gray-500">
// //                   {category.positions} {t('home.stats.liveJob')}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default PopularCategory;


// import React from 'react';
// import { useTranslation } from '../../context/LanguageContext';
// import { Link } from 'react-router-dom';
// import { Database, Code, Mic, Brush, Camera, BarChart, Briefcase, Video } from 'lucide-react';

// const PopularCategory = () => {
//   const { t } = useTranslation();

//   const categories = [
//     { id: 1, icon: Brush, label: 'Graphics & Design', positions: 357, color: 'bg-blue-100', iconColor: 'text-blue-600' },
//     { id: 2, icon: Code, label: 'Code & Programming', positions: 312, color: 'bg-green-100', iconColor: 'text-green-600' },
//     { id: 3, icon: BarChart, label: 'Digital Marketing', positions: 287, color: 'bg-yellow-100', iconColor: 'text-yellow-600' },
//     { id: 4, icon: Video, label: 'Video & Animation', positions: 247, color: 'bg-red-100', iconColor: 'text-red-600' },
//     { id: 5, icon: Mic, label: 'Music & Audio', positions: 204, color: 'bg-purple-100', iconColor: 'text-purple-600' },
//     { id: 6, icon: Briefcase, label: 'Account & Finance', positions: 167, color: 'bg-indigo-100', iconColor: 'text-indigo-600' },
//     { id: 7, icon: Camera, label: 'Health & Care', positions: 125, color: 'bg-teal-100', iconColor: 'text-teal-600' },
//     { id: 8, icon: Database, label: 'Data & Science', positions: 57, color: 'bg-gray-100', iconColor: 'text-gray-600' },
//   ];

//   return (
//     <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Titre de section */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
//             {t('home.popularCategories.title')}
//           </h2>
//           <Link
//             to="/categories"
//             className="text-blue-600 text-sm font-medium flex items-center hover:underline transition-colors"
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
//               className={`
//                 flex items-center gap-4 p-4 rounded-lg shadow-md 
//                 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 
//                 ${category.color}
//               `}
//             >
//               {/* Icône avec couleur dynamique */}
//               <div
//                 className={`w-12 h-12 flex items-center justify-center rounded-lg shadow-inner ${category.iconColor}`}
//               >
//                 <category.icon className="w-6 h-6" />
//               </div>
//               {/* Texte de la catégorie */}
//               <div>
//                 <p className="text-gray-800 font-semibold text-base">
//                   {t(`home.popularCategories.jobs.${category.label.replace(/ & | /g, '').toLowerCase()}.title`) || category.label}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <span className="font-medium">{category.positions}</span> {t('home.stats.liveJob')}
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
import { 
 Database, 
 Code, 
 Mic, 
 Brush, 
 Camera, 
 BarChart, 
 Briefcase, 
 Video,
 ChevronLeft,
 ChevronRight
} from 'lucide-react';
import { useJobCategories } from '../../../hooks/useJobCategories';

const PopularCategory = () => {
 const { t } = useTranslation();
 const { categories, loading, error, pagination, fetchPage } = useJobCategories();

 const getIconByName = (name) => {
   const icons = {
     'Graphics & Design': Brush,
     'Programming': Code,
     'Digital Marketing': BarChart,
     'Video & Animation': Video,
     'Music & Audio': Mic,
     'Finance': Briefcase,
     'Healthcare': Camera,
     'Data Science': Database,
     'default': Briefcase
   };
   return icons[name] || icons.default;
 };

 const getColorByIndex = (index) => {
   const colors = [
     { bg: 'bg-blue-100', icon: 'text-blue-600' },
     { bg: 'bg-green-100', icon: 'text-green-600' },
     { bg: 'bg-yellow-100', icon: 'text-yellow-600' },
     { bg: 'bg-red-100', icon: 'text-red-600' },
     { bg: 'bg-purple-100', icon: 'text-purple-600' },
     { bg: 'bg-indigo-100', icon: 'text-indigo-600' },
     { bg: 'bg-teal-100', icon: 'text-teal-600' },
     { bg: 'bg-gray-100', icon: 'text-gray-600' }
   ];
   return colors[index % colors.length];
 };

 const handlePageChange = (page) => {
   fetchPage(page);
  //  window.scrollTo({ top: 0, behavior: 'smooth' });
 };

 if (loading) {
   return (
     <div className="flex justify-center items-center py-12">
       <div className="w-6 h-6 border-2 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
     </div>
   );
 }

 if (error) {
   return (
     <div className="text-center py-12 text-red-600">
       Une erreur est survenue lors du chargement des catégories
     </div>
   );
 }

 return (
   <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* En-tête de section */}
       <div className="flex justify-between items-center mb-8">
         <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
           {t('home.popularCategories.title')}
         </h2>
         <Link
           to="/categories"
           className="text-blue-600 text-sm font-medium flex items-center hover:underline transition-colors"
         >
           {t('home.popularCategories.viewmore')}
           <span className="ml-1">→</span>
         </Link>
       </div>

       {/* Grille des catégories */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
         {categories.map((category, index) => {
           const Icon = getIconByName(category.name);
           const colors = getColorByIndex(index);

           return (
             <div
               key={category.id}
               className={`
                 flex items-center gap-4 p-4 rounded-xl shadow-sm 
                 hover:shadow-md hover:-translate-y-1 transition-all duration-300 
                 ${colors.bg} border border-white/20
               `}
             >
               <div
                 className={`w-12 h-12 flex items-center justify-center rounded-lg shadow-sm ${colors.icon}`}
               >
                 <Icon className="w-6 h-6" />
               </div>
               <div>
                 <p className="text-gray-900 font-semibold text-base line-clamp-1">
                   {category.name}
                 </p>
                 <p className="text-sm text-gray-600">
                   <span className="font-medium">{category.jobs_count || 0}</span> offres
                 </p>
               </div>
             </div>
           );
         })}
       </div>

       {/* Pagination */}
       {pagination.totalPages > 1 && (
 <div className="mt-8 border-t border-gray-200 pt-8">
   <div className="flex items-center justify-between">
     <div className="flex items-center gap-2">
       <p className="text-sm text-gray-600">
         Affichage de {categories.length} sur {pagination.total} catégories
       </p>
     </div>

     <div className="flex items-center gap-1">
       <button
         onClick={() => handlePageChange(pagination.currentPage - 1)}
         disabled={pagination.currentPage === 1}
         className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
       >
         <ChevronLeft className="w-5 h-5" />
       </button>

       <div className="flex items-center">
         {[...Array(pagination.totalPages)].map((_, idx) => (
           <button
             key={idx}
             onClick={() => handlePageChange(idx + 1)}
             className={`
               min-w-[40px] h-10  border-t border-b border-gray-300 first:border-l first:rounded-l-md last:border-r last:rounded-r-md
               ${pagination.currentPage === idx + 1
                 ? 'bg-blue-50 text-blue-600 font-extrabold border-blue-100  z-10'
                 : 'hover:bg-gray-50'
               }
             `}
           >
             {idx + 1}
           </button>
         ))}
       </div>

       <button
         onClick={() => handlePageChange(pagination.currentPage + 1)}
         disabled={pagination.currentPage === pagination.totalPages}
         className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
       >
         <ChevronRight className="w-5 h-5" />
       </button>
     </div>
   </div>
 </div>
)}
     </div>
   </section>
 );
};

export default PopularCategory;