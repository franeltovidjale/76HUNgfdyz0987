
// // export default Overview;
// import React from 'react';
// import { 
//   Bell, 
//   Settings, 
//   Heart, 
//   Briefcase, 
//   ChevronRight, 
//   Edit2 
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../../../context/AuthContext';

// const Overview = () => {
//   const { user } = useAuth();

//   const userStats = [
//     { 
//       id: 1, 
//       label: 'Offres postulées', 
//       count: 589, 
//       icon: Briefcase, 
//       color: 'bg-blue-50 text-blue-600',
//       bgGradient: 'bg-gradient-to-br from-blue-50 via-white to-indigo-50',
//       textGradient: 'bg-gradient-to-r from-blue-700 to-indigo-600'
//     },
//     { 
//       id: 2, 
//       label: 'Offres favorites', 
//       count: 238, 
//       icon: Heart, 
//       color: 'bg-rose-50 text-rose-600',
//       bgGradient: 'bg-gradient-to-br from-rose-50 via-white to-pink-50',
//       textGradient: 'bg-gradient-to-r from-rose-700 to-pink-600'
//     },
//     { 
//       id: 3, 
//       label: 'Alertes emploi', 
//       count: 574, 
//       icon: Bell, 
//       color: 'bg-emerald-50 text-emerald-600',
//       bgGradient: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50',
//       textGradient: 'bg-gradient-to-r from-emerald-700 to-teal-600'
//     }
//   ];

//   const recentApplications = [
//     {
//       id: 1,
//       company: "Networking Engineer",
//       location: "Washington",
//       type: "Remote",
//       salary: "$50k-60k/month",
//       date: "Feb 2, 2019 19:28",
//       status: "Active",
//       bgColor: "bg-green-400"
//     },
//     {
//       id: 2,
//       company: "Product Designer",
//       location: "Dallas",
//       type: "Full Time",
//       salary: "$50k-60k/month",
//       date: "Dec 7, 2019 23:26",
//       status: "Active",
//       bgColor: "bg-pink-500"
//     },
//     {
//       id: 3,
//       company: "Junior Graphic Designer",
//       location: "Miami",
//       type: "Temporary",
//       salary: "$55k-60k/month",
//       date: "Feb 2, 2019 19:28",
//       status: "Active",
//       bgColor: "bg-black"
//     },
//     {
//       id: 4,
//       company: "Visual Designer",
//       location: "Wisconsin",
//       type: "Contract Base",
//       salary: "$50k-60k/month",
//       date: "Dec 7, 2019 23:26",
//       status: "Active",
//       bgColor: "bg-blue-500"
//     }
//   ];

//   const getTypeStyles = (type) => {
//     const styles = {
//       'Remote': 'text-blue-600 bg-blue-50',
//       'Full Time': 'text-blue-600 bg-blue-50',
//       'Temporary': 'text-blue-600 bg-blue-50',
//       'Contract Base': 'text-indigo-600 bg-indigo-50'
//     };
//     return styles[type] || 'text-gray-600 bg-gray-50';
//   };

//   return (
//     <div className="bg-gray-50/50 w-full">
//       <div className="max-w-7xl mx-auto p-6">
//         {/* Section profil */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
//             Bonjour, {user?.name || 'Invité'}
//           </h1>
//           <p className="text-gray-600">
//             Voici vos activités quotidiennes et alertes emploi
//           </p>
//         </div>

//         {/* Statistiques */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {userStats.map((stat) => (
//             <div 
//               key={stat.id} 
//               className={`${stat.bgGradient} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50`}
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
//                   <p className={`text-3xl font-bold bg-clip-text text-transparent ${stat.textGradient}`}>
//                     {stat.count}
//                   </p>
//                 </div>
//                 <div className={`${stat.color} p-4 rounded-xl shadow-sm bg-white/80 backdrop-blur-sm`}>
//                   <stat.icon strokeWidth={2} size={24} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Alerte profil */}
//         <div className="bg-red-500 rounded-xl p-4 mb-8">
//           <div className="flex items-center gap-4">
//             <div className="flex-shrink-0">
//               <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
//                 {user?.avatar ? (
//                   <img 
//                     src={user.avatar} 
//                     alt={user.name} 
//                     className="w-10 h-10 rounded-full" 
//                   />
//                 ) : (
//                   <Edit2 className="w-6 h-6 text-white" />
//                 )}
//               </div>
//             </div>
//             <div className="flex-1">
//               <p className="text-white font-medium">
//                 Your profile editing is not completed.
//               </p>
//               <p className="text-white/90 text-sm">
//                 Complete your profile editing & build your custom Resume
//               </p>
//             </div>
//             <Link
//               to="/dashboard-auth/settings"
//               className="flex-shrink-0 bg-white text-red-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
//             >
//               Edit Profile
//             </Link>
//           </div>
//         </div>

//         {/* Candidatures récentes */}
//         <div className="bg-white rounded-lg overflow-hidden">
//           <div className="flex items-center justify-between px-6 py-4">
//             <h2 className="text-base font-medium">Recently Applied</h2>
//             <Link 
//               to="/dashboard-auth/applied-jobs"
//               className="text-gray-600 text-sm flex items-center hover:text-gray-900"
//             >
//               View all
//               <ChevronRight className="h-4 w-4 ml-1" />
//             </Link>
//           </div>

//           {/* Header */}
//           <div className="grid grid-cols-[2fr,1fr,1fr,1fr] px-6 py-2 bg-gray-50 text-sm text-gray-500">
//             <div>Job</div>
//             <div>Date Applied</div>
//             <div>Status</div>
//             <div>Action</div>
//           </div>

//           {/* Applications */}
//           <div className="divide-y divide-gray-100">
//             {recentApplications.map((job) => (
//               <div key={job.id} className="grid grid-cols-[2fr,1fr,1fr,1fr] px-6 py-4 items-center hover:bg-gray-50">
//                 <div className="flex items-center gap-3">
//                   <div className={`w-10 h-10 rounded-lg ${job.bgColor} flex items-center justify-center`}>
//                      {/* <img src="" alt="" className="w-6 h-6 text-white" /> */}
//                   </div>
//                   <div>
//                     <div className="font-medium text-gray-900">{job.company}</div>
//                     <div className="flex items-center gap-2 text-sm text-gray-500">
//                       <span>{job.location}</span>
//                       <span>•</span>
//                       <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getTypeStyles(job.type)}`}>
//                         {job.type}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-sm text-gray-500">{job.date}</div>
//                 <div className="text-green-500 text-sm">Active</div>
//                 <div>
//                   <Link
//                     to={`/dashboard-auth/applied-jobs/${job.id}`}
//                     className="text-blue-600 hover:text-blue-700 text-sm font-medium"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Overview;


import React from 'react';
import { Bell, Heart, Briefcase, ChevronRight, Edit2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const Overview = () => {
  const { user } = useAuth();

  const userStats = [
    {
      id: 1,
      label: 'Offres postulées',
      count: 589,
      icon: Briefcase,
      bgGradient: 'bg-gradient-to-br from-blue-50 via-white to-indigo-50',
      textGradient: 'bg-gradient-to-r from-blue-700 to-indigo-600',
    },
    {
      id: 2,
      label: 'Offres favorites',
      count: 238,
      icon: Heart,
      bgGradient: 'bg-gradient-to-br from-rose-50 via-white to-pink-50',
      textGradient: 'bg-gradient-to-r from-rose-700 to-pink-600',
    },
    {
      id: 3,
      label: 'Alertes emploi',
      count: 574,
      icon: Bell,
      bgGradient: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50',
      textGradient: 'bg-gradient-to-r from-emerald-700 to-teal-600',
    },
  ];

  const recentApplications = [
    {
      id: 1,
      company: 'Networking Engineer',
      location: 'Washington',
      type: 'Remote',
      salary: '$50k-60k/month',
      date: 'Feb 2, 2019',
      status: 'Active',
      logo: 'https://via.placeholder.com/40?text=NE',
    },
    {
      id: 2,
      company: 'Product Designer',
      location: 'Dallas',
      type: 'Full Time',
      salary: '$50k-60k/month',
      date: 'Dec 7, 2019',
      status: 'Active',
      logo: 'https://via.placeholder.com/40?text=PD',
    },
    {
      id: 3,
      company: 'Junior Graphic Designer',
      location: 'Miami',
      type: 'Temporary',
      salary: '$55k-60k/month',
      date: 'Feb 2, 2019',
      status: 'Active',
      logo: 'https://via.placeholder.com/40?text=GD',
    },
    {
      id: 4,
      company: 'Visual Designer',
      location: 'Wisconsin',
      type: 'Contract Base',
      salary: '$50k-60k/month',
      date: 'Dec 7, 2019',
      status: 'Active',
      logo: 'https://via.placeholder.com/40?text=VD',
    },
  ];

  const getStatusStyles = (status) => {
    return status === 'Active'
      ? 'text-green-600 bg-green-50'
      : 'text-gray-600 bg-gray-50';
  };

  const getTypeStyles = (type) => {
    const styles = {
      'Remote': 'bg-blue-50 text-blue-600',
      'Full Time': 'bg-green-50 text-green-600',
      'Temporary': 'bg-yellow-50 text-yellow-600',
      'Contract Base': 'bg-purple-50 text-purple-600',
    };
    return styles[type] || 'bg-gray-50 text-gray-600';
  };

  return (
    <div className="bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Section Profil */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
            Bonjour, {user?.name || 'Invité'}
          </h1>
          <p className="text-gray-600">
            Voici vos activités quotidiennes et alertes emploi.
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {userStats.map((stat) => (
            <div
              key={stat.id}
              className={`${stat.bgGradient} rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p
                    className={`text-3xl font-bold bg-clip-text text-transparent ${stat.textGradient}`}
                  >
                    {stat.count}
                  </p>
                </div>
                <div className="p-4 rounded-full bg-white/70 shadow">
                  <stat.icon className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section alerte profil */}
        <div className="bg-red-500 rounded-lg p-4 mb-8">
          <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <Edit2 className="w-6 h-6 text-white" />
                )}
              </div>
              <div>
                <p className="text-white font-medium">Profil incomplet</p>
                <p className="text-sm text-white/90">
                  Complétez votre profil pour générer un CV personnalisé.
                </p>
              </div>
            </div>
            <Link
              to="/dashboard-auth/settings"
              className="bg-white text-red-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition"
            >
              Modifier
            </Link>
          </div>
        </div>

        {/* Candidatures Récentes */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Candidatures récentes</h2>
            <Link
              to="/dashboard-auth/applied-jobs"
              className="text-indigo-600 text-sm hover:underline"
            >
              Voir tout
              <ChevronRight className="w-4 h-4 inline-block ml-1" />
            </Link>
          </div>
          <div className="divide-y divide-gray-200">
            {recentApplications.map((job) => (
              <div
                key={job.id}
                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-300"
              >
                {/* Logo et infos job */}
                <div className="flex items-center gap-3">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 rounded-lg shadow-md"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{job.company}</p>
                    <p className="text-sm text-gray-500">
                      {job.location}{' '}
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeStyles(
                          job.type
                        )}`}
                      >
                        {job.type}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="text-sm text-gray-500">
                  <span className="block sm:inline">
                    {job.date}
                  </span>
                </div>

                {/* Statut */}
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(
                      job.status
                    )}`}
                  >
                    {job.status}
                  </span>
                </div>

                {/* Actions */}
                <div>
                  <Link
                    to={`/dashboard-auth/applied-jobs/${job.id}`}
                    className="text-sm text-indigo-600 font-medium flex items-center gap-1 hover:underline"
                  >
                    Voir détails
                    <ExternalLink className="w-4 h-4" />
                  </Link>
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
