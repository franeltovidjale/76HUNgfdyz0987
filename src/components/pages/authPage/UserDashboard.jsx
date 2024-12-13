import React from 'react';
import { 
  Bell, 
  Settings, 
  Heart, 
  Briefcase, 
  ChevronRight, 
  Edit2 
} from 'lucide-react';

const DashboardAuth = () => {
  // Données mockées pour l'exemple
  const userStats = [
    { id: 1, label: 'Offres postulées', count: 589, icon: Briefcase, color: 'bg-blue-50 text-blue-600' },
    { id: 2, label: 'Offres favorites', count: 238, icon: Heart, color: 'bg-amber-50 text-amber-600' },
    { id: 3, label: 'Alertes emploi', count: 574, icon: Bell, color: 'bg-green-50 text-green-600' }
  ];

  const recentApplications = [
    {
      id: 1,
      company: 'Upwork',
      position: 'Développeur Frontend',
      type: 'Remote',
      location: 'Paris',
      salary: '45K-60K/mois',
      date: '2024-02-07',
      status: 'Active',
      logo: '/upwork-logo.png'
    },
    // Ajoutez plus d'applications ici
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section profil */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Bonjour, John Doe
          </h1>
          <p className="text-gray-600">
            Voici vos activités quotidiennes et alertes emploi
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {userStats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                  <p className="text-2xl font-semibold mt-1">{stat.count}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alerte profil */}
        {!true && (
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <Edit2 className="text-red-500" size={20} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-red-800">
                  Votre profil n'est pas complet
                </p>
                <p className="text-sm text-red-700">
                  Complétez votre profil et ajoutez votre CV pour augmenter vos chances
                </p>
              </div>
              <button className="flex-shrink-0 bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors">
                Éditer le profil
              </button>
            </div>
          </div>
        )}

        {/* Candidatures récentes */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Candidatures récentes
              </h2>
              <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                Voir tout
              </button>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {recentApplications.map((application) => (
              <div key={application.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                        <img 
                          src={application.logo} 
                          alt={application.company} 
                          className="w-8 h-8"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {application.position}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-gray-500">
                          {application.company}
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-500">
                          {application.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-900">
                        {application.salary}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(application.date).toLocaleDateString()}
                      </p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-500 font-medium text-sm">
                      Voir détails
                    </button>
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

export default DashboardAuth;