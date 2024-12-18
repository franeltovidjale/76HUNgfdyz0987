// import React from 'react';
// import { useTranslation } from '../../context/LanguageContext';
// import { Link } from 'react-router-dom';
// import { MapPin } from 'lucide-react';

// // Configuration des entreprises
// const companies = [
//     {
//       id: 1,
//       name: 'Dribbble',
//       country: 'United States',
//       logoColor: 'bg-pink-500 text-white',
//       isFeatured: true,
//     },
//     {
//       id: 2,
//       name: 'Upwork',
//       country: 'United States',
//       logoColor: 'bg-green-500 text-white',
//       isFeatured: false,
//     },
//     {
//       id: 3,
//       name: 'Slack',
//       country: 'China',
//       logoColor: 'bg-blue-500 text-white',
//       isFeatured: false,
//     },
//     {
//       id: 4,
//       name: 'Freepik',
//       country: 'United States',
//       logoColor: 'bg-indigo-500 text-white',
//       isFeatured: false,
//     },
//     {
//       id: 5,
//       name: 'Behance',
//       country: 'Germany',
//       logoColor: 'bg-purple-500 text-white',
//       isFeatured: true,
//     },
//     {
//       id: 6,
//       name: 'Trello',
//       country: 'Canada',
//       logoColor: 'bg-yellow-500 text-white',
//       isFeatured: false,
//     },
//     {
//       id: 7,
//       name: 'Figma',
//       country: 'United Kingdom',
//       logoColor: 'bg-teal-500 text-white',
//       isFeatured: false,
//     },
//     {
//       id: 8,
//       name: 'GitHub',
//       country: 'Japan',
//       logoColor: 'bg-gray-800 text-white',
//       isFeatured: true,
//     },
//     {
//       id: 9,
//       name: 'LinkedIn',
//       country: 'India',
//       logoColor: 'bg-blue-600 text-white',
//       isFeatured: false,
//     },
//     {
//       id: 10,
//       name: 'Spotify',
//       country: 'Sweden',
//       logoColor: 'bg-green-600 text-white',
//       isFeatured: false,
//     },
//     {
//       id: 11,
//       name: 'Notion',
//       country: 'South Korea',
//       logoColor: 'bg-black text-white',
//       isFeatured: true,
//     },
//     {
//       id: 12,
//       name: 'Google',
//       country: 'United States',
//       logoColor: 'bg-red-500 text-white',
//       isFeatured: false,
//     },
//   ];
  

// const TopCompanies = () => {
//   const { t } = useTranslation();

//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Titre */}
//         <div className="text-left mb-8">
//           <h2 className="text-3xl font-bold text-gray-900">
//             {t('home.topCompanies.title') || 'Top Companies'}
//           </h2>
//         </div>

//         {/* Grille des entreprises */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {companies.map((company) => (
//             <div
//               key={company.id}
//               className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md p-4 flex flex-col justify-between"
//             >
//               {/* En-tête de l'entreprise */}
//               <div className="flex items-center space-x-4">
//                 {/* Logo */}
//                 <div
//                   className={`w-12 h-12 flex items-center justify-center rounded-lg ${company.logoColor}`}
//                 >
//                   <span className="text-2xl font-bold">{company.name.charAt(0)}</span>
//                 </div>

//                 {/* Détails entreprise */}
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between">
//                     <h3 className="text-lg font-semibold text-gray-800">{company.name}</h3>
//                     {company.isFeatured && (
//                       <span className="text-xs text-red-500 bg-red-100 px-2 py-0.5 rounded-full font-medium">
//                         {t('home.topCompanies.featured') || 'Featured'}
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
//                     <MapPin size={14} className="text-gray-400" />
//                     {company.country}
//                   </p>
//                 </div>
//               </div>

//               {/* Bouton Open Position */}
//               <div className="mt-4">
//                 <Link
//                   to={`/companies/${company.id}`}
//                   className="block w-full text-center text-blue-600 font-medium bg-blue-50 py-2 rounded-md hover:bg-blue-100 transition"
//                 >
//                   {t('home.topCompanies.openPosition') || 'Open Position'}
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopCompanies;


import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useJobCompanies } from '../../../hooks/useJobCompanies';

const TopCompanies = () => {
 const { t } = useTranslation();
 const { companies, loading, error, pagination, fetchPage } = useJobCompanies();

 // Couleurs pour les logos
 const logoColors = [
   'bg-blue-500',
   'bg-green-500', 
   'bg-red-500',
   'bg-purple-500',
   'bg-yellow-500',
   'bg-indigo-500',
   'bg-pink-500',
   'bg-teal-500'
 ];

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
       Une erreur est survenue lors du chargement des entreprises
     </div>
   );
 }

 return (
   <section className="py-12 bg-white">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Titre */}
       <div className="text-left mb-8">
         <h2 className="text-3xl font-bold text-gray-900">
           {t('home.topCompanies.title')}
         </h2>
       </div>

       {/* Grille des entreprises */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
         {companies.map((company, index) => (
           <div
             key={company.id}
             className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md p-4 flex flex-col justify-between"
           >
             {/* En-tête de l'entreprise */}
             <div className="flex items-center space-x-4">
               <div
                 className={`w-12 h-12 flex items-center justify-center rounded-lg ${logoColors[index % logoColors.length]} text-white`}
               >
                 <span className="text-2xl font-bold">{company.name.charAt(0)}</span>
               </div>

               <div className="flex-1 min-w-0">
                 <div className="flex items-center justify-between">
                   <h3 className="text-lg font-semibold text-gray-800 truncate">
                     {company.name}
                   </h3>
                 </div>
                 <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                   <MapPin size={14} className="text-gray-400 flex-shrink-0" />
                   <span className="truncate">{company.industry}</span>
                 </p>
               </div>
             </div>

             {/* Bouton voir les offres */}
             <div className="mt-4">
               <Link
                 to={`/companies/${company.id}`}
                 className="block w-full text-center text-blue-600 font-medium bg-blue-50 py-2 rounded-md hover:bg-blue-100 transition-colors"
               >
                 {t('home.topCompanies.openPosition')}
               </Link>
             </div>
           </div>
         ))}
       </div>

       {/* Pagination */}
      
{/* Pagination améliorée */}
{pagination.totalPages > 1 && (
  <div className="mt-8 border-t border-gray-200 pt-8">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <p className="text-sm text-gray-600">
          Affichage de {companies.length} sur {pagination.total} entreprises
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
                min-w-[40px]  h-10 border-t border-b border-gray-300 first:border-l first:rounded-l-md last:border-r last:rounded-r-md
                ${pagination.currentPage === idx + 1
                  ? 'bg-blue-50 text-blue-600 border-blue-100 font-extrabold z-10'
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

export default TopCompanies;