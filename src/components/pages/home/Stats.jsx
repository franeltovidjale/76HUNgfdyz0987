import { useTranslation } from "../../context/LanguageContext";
import { 
  Work,
  Business, 
  People,
  WorkOutline
} from '@mui/icons-material';

const Stats = () => {
  const { t } = useTranslation();
  
  const stats = [
    { 
      icon: <Work className="text-primary-600" sx={{ fontSize: 24 }}/>, 
      count: '1,75,324', 
      label: 'Live Job',
      bgColor: 'bg-[#ECF6FA]'
    },
    { 
      icon: <Business className="text-white" sx={{ fontSize: 24 }}/>, 
      count: '97,354', 
      label: 'Companies',
      bgColor: 'bg-primary-600'
    },
    { 
      icon: <People className="text-primary-600" sx={{ fontSize: 24 }}/>, 
      count: '38,47,154', 
      label: 'Candidates',
      bgColor: 'bg-[#ECF6FA]'
    },
    { 
      icon: <WorkOutline className="text-primary-600" sx={{ fontSize: 24 }}/>, 
      count: '7,532', 
      label: 'New Jobs',
      bgColor: 'bg-[#ECF6FA]'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {stats.map((stat, index) => (
        <div 
          key={stat.label} 
          className="bg-white rounded-lg p-4 flex items-center space-x-4 hover:shadow-md transition-all duration-300"
        >
          <div className={`${stat.bgColor} h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
            {stat.icon}
          </div>
          <div>
            <div className="font-bold text-lg text-gray-900">
              {stat.count}
            </div>
            <div className="text-gray-500 text-sm">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div> 
  );
};

export default Stats;