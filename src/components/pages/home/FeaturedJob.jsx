// import React from 'react';
// import { useTranslation } from '../../context/LanguageContext';
// import { Link } from 'react-router-dom';
// import { Bookmark, ArrowRight } from 'lucide-react';

// // Configuration des offres d'emploi avec leurs détails
// const featuredJobs = [
//   {
//     id: 1,
//     company: 'Upwork',
//     position: 'Senior UX Designer',
//     location: 'Australia',
//     salary: '$30K-$35K',
//     duration: '4 Days Remaining',
//     jobType: 'Contract Base',
//     logoColor: 'bg-green-100 text-green-600',
//     countryFlag: '🇦🇺',
//   },
//   {
//     id: 2,
//     company: 'Apple',
//     position: 'Software Engineer',
//     location: 'China',
//     salary: '$50K-$60K',
//     duration: '4 Days Remaining',
//     jobType: 'Full Time',
//     logoColor: 'bg-blue-900 text-white',
//     countryFlag: '🇨🇳',
//   },
//   {
//     id: 3,
//     company: 'Udemy',
//     position: 'Junior Graphic Designer',
//     location: 'Canada',
//     salary: '$50K-$70K',
//     duration: '4 Days Remaining',
//     jobType: 'Full Time',
//     logoColor: 'bg-black text-red-600',
//     countryFlag: '🇨🇦',
//   },
//   {
//     id: 4,
//     company: 'Behance',
//     position: 'Product Designer',
//     location: 'United States',
//     salary: '$35K-$40K',
//     duration: '4 Days Remaining',
//     jobType: 'Full Time',
//     logoColor: 'bg-red-100 text-red-600',
//     countryFlag: '🇺🇸',
//   },
//   {
//     id: 5,
//     company: 'Facebook',
//     position: 'Marketing Officer',
//     location: 'Germany',
//     salary: '$50K-$90K',
//     duration: '4 Days Remaining',
//     jobType: 'Internship',
//     logoColor: 'bg-blue-100 text-blue-600',
//     countryFlag: '🇩🇪',
//   },
//   {
//     id: 6,
//     company: 'Google',
//     position: 'Interaction Designer',
//     location: 'France',
//     salary: '$15K-$10K',
//     duration: '4 Days Remaining',
//     jobType: 'Full Time',
//     logoColor: 'bg-yellow-100 text-yellow-600',
//     countryFlag: '🇫🇷',
//   },
// ];

// const FeaturedJob = () => {
//   const { t } = useTranslation();

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-800">{t('home.popularVacancies.title')}</h2>
//           <Link
//             to="/jobs"
           
//             className="text-blue-600 text-sm font-medium flex items-center hover:underline"
//           >
//             {t('nav.findJob')} <ArrowRight className="w-4 h-4 ml-1" />
//           </Link>
//         </div>

//         {/* Grille des offres d'emploi */}
//         <div className="space-y-6">
//           {featuredJobs.map((job) => (
//             <div
//               key={job.id}
//               className="flex items-center justify-between bg-white rounded-xl shadow-sm hover:shadow-md p-6 transition-all duration-300 border border-gray-100"
//             >
//               {/* Partie gauche : Logo + Infos */}
//               <div className="flex items-center gap-4">
//                 {/* Logo */}
//                 <div
//                   className={`w-12 h-12 rounded-lg flex items-center justify-center ${job.logoColor} font-bold`}
//                 >
//                   {job.company.charAt(0)}
//                 </div>

//                 {/* Infos */}
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {t(`home.popularVacancies.jobs.${job.position.replace(/ /g, '').toLowerCase()}.title`, job.position)}
//                   </h3>
//                   <div className="flex items-center text-gray-500 text-sm space-x-2 mt-1">
//                     <span>{job.countryFlag} {job.location}</span>
//                     <span>•</span>
//                     <span className="font-medium">{job.salary}</span>
//                     <span>•</span>
//                     <span>{job.duration}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Job Type et Actions */}
//               <div className="flex items-center gap-4">
//                 <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
//                   {job.jobType}
//                 </span>

//                 {/* Bouton Apply */}
//                 <Link
//                   to={`/jobs/${job.id}`}
//                   className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
//                 >
//                   {t('nav.findJob')} <ArrowRight className="w-4 h-4 ml-2" />
//                 </Link>

//                 {/* Bouton Bookmark */}
//                 <button className="p-2 rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
//                   <Bookmark className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedJob;



import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Bookmark, ArrowRight } from 'lucide-react';

const featuredJobs = [
  {
    id: 1,
    company: 'Upwork',
    position: 'Senior UX Designer',
    location: 'Australia',
    salary: '$30K-$35K',
    duration: '4 Days Remaining',
    jobType: 'Contract Base',
    logoColor: 'bg-green-100 text-green-600',
    countryFlag: '🇦🇺',
  },
  {
    id: 2,
    company: 'Apple',
    position: 'Software Engineer',
    location: 'China',
    salary: '$50K-$60K',
    duration: '4 Days Remaining',
    jobType: 'Full Time',
    logoColor: 'bg-blue-900 text-white',
    countryFlag: '🇨🇳',
  },
  {
    id: 3,
    company: 'Udemy',
    position: 'Junior Graphic Designer',
    location: 'Canada',
    salary: '$50K-$70K',
    duration: '4 Days Remaining',
    jobType: 'Full Time',
    logoColor: 'bg-black text-red-600',
    countryFlag: '🇨🇦',
  },
  {
    id: 4,
    company: 'Behance',
    position: 'Product Designer',
    location: 'United States',
    salary: '$35K-$40K',
    duration: '4 Days Remaining',
    jobType: 'Full Time',
    logoColor: 'bg-red-100 text-red-600',
    countryFlag: '🇺🇸',
  },
  {
    id: 5,
    company: 'Facebook',
    position: 'Marketing Officer',
    location: 'Germany',
    salary: '$50K-$90K',
    duration: '4 Days Remaining',
    jobType: 'Internship',
    logoColor: 'bg-blue-100 text-blue-600',
    countryFlag: '🇩🇪',
  },
  {
    id: 6,
    company: 'Google',
    position: 'Interaction Designer',
    location: 'France',
    salary: '$15K-$10K',
    duration: '4 Days Remaining',
    jobType: 'Full Time',
    logoColor: 'bg-yellow-100 text-yellow-600',
    countryFlag: '🇫🇷',
  },
];

const FeaturedJob = () => {
  const { t } = useTranslation();

  return (
    <section className="py-6 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            {t('home.popularVacancies.title')}
          </h2>
          <Link
            to="/jobs"
            className="text-blue-600 text-xs sm:text-sm font-medium flex items-center hover:underline"
          >
            {t('nav.findJob')} <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Grille des offres d'emploi */}
        <div className="space-y-4 sm:space-y-6">
          {featuredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md p-4 sm:p-6 transition-all duration-300 border border-gray-100"
            >
              {/* Version Mobile : Layout Vertical */}
              <div className="block sm:hidden">
                {/* En-tête avec logo et bookmark */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${job.logoColor} font-bold text-sm`}
                    >
                      {job.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-800">
                        {t(`home.popularVacancies.jobs.${job.position.replace(/ /g, '').toLowerCase()}.title`, job.position)}
                      </h3>
                      <div className="text-xs text-gray-500">{job.company}</div>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-blue-600">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>

                {/* Informations */}
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                    <span>{job.countryFlag} {job.location}</span>
                    <span>•</span>
                    <span className="font-medium">{job.salary}</span>
                    <span>•</span>
                    <span>{job.duration}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      {job.jobType}
                    </span>
                    <Link
                      to={`/jobs/${job.id}`}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs font-medium"
                    >
                      {t('nav.findJob')} <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Version Desktop : Layout Horizontal */}
              <div className="hidden sm:flex items-center justify-between">
                {/* Partie gauche : Logo + Infos */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${job.logoColor} font-bold`}
                  >
                    {job.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {t(`home.popularVacancies.jobs.${job.position.replace(/ /g, '').toLowerCase()}.title`, job.position)}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm space-x-2 mt-1">
                      <span>{job.countryFlag} {job.location}</span>
                      <span>•</span>
                      <span className="font-medium">{job.salary}</span>
                      <span>•</span>
                      <span>{job.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Job Type et Actions */}
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                    {job.jobType}
                  </span>
                  <Link
                    to={`/jobs/${job.id}`}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    {t('nav.findJob')} <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <button className="p-2 rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJob;