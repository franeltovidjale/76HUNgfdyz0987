
// import React from 'react';
// import { 
//   UserCircle2, 
//   Upload, 
//   Search, 
//   CheckCircle2
// } from 'lucide-react';
// import { useScrollAnimation } from '../../../hooks/useScrollAnimation';



// const steps = [
//   {
//     icon: <UserCircle2 className="w-6 h-6" />,
//     activeIcon: <UserCircle2 className="w-6 h-6 text-white" />,
//     title: 'Create account',
//     description: 'Aliquam facilisis egestas sapien, nec tempor leo tristique at.'
//   },
//   {
//     icon: <Upload className="w-6 h-6" />,
//     activeIcon: <Upload className="w-6 h-6 text-white" />,
//     title: 'Upload CV/Resume',
//     description: 'Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales'
//   },
//   {
//     icon: <Search className="w-6 h-6" />,
//     activeIcon: <Search className="w-6 h-6 text-white" />,
//     title: 'Find suitable job',
//     description: 'Phasellus quis eleifend ex. Morbi nec fringilla nibh.'
//   },
//   {
//     icon: <CheckCircle2 className="w-6 h-6" />,
//     activeIcon: <CheckCircle2 className="w-6 h-6 text-white" />,
//     title: 'Apply job',
//     description: 'Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.'
//   }
// ];

// const JobPilotSteps = () => {
//     const animationRef = useScrollAnimation();

//   const [hoveredStep, setHoveredStep] = React.useState(null);

//   return (
//     <div  ref={animationRef} className="max-w-7xl mx-auto py-16 px-4 bg-gray-50 scroll-animate">
//       <h2 className="text-center mb-16 text-2xl font-bold">
//         How jobpilot work
//       </h2>

//       <div className="grid grid-cols-1 text-primary-600 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
//         {steps.map((step, index) => (
//           <React.Fragment key={index}>
//             <div className="relative">
//               {/* Ligne pointillée de connexion */}
//               {index < steps.length - 1 && (
//                 <div className="hidden lg:block absolute top-12 left-[calc(50%+70px)] w-[calc(100%-140px)] h-0.5">
//                   <div className="w-full border-t-2 border-dashed border-gray-300" />
//                 </div>
//               )}

//               {/* Card de l'étape */}
//               <div
//                 className="flex flex-col items-center text-center"
//                 onMouseEnter={() => setHoveredStep(index)}
//                 onMouseLeave={() => setHoveredStep(null)}
//               >
//                 <div 
//                   className={`
//                     w-24 h-24 rounded-full 
//                     flex items-center justify-center mb-4
//                     transition-all duration-300 ease-in-out
//                     ${hoveredStep === index ? 'bg-blue-600 shadow-lg' : 'bg-white shadow'}
//                   `}
//                 >
//                   {hoveredStep === index ? step.activeIcon : step.icon}
//                 </div>

//                 <div className={`
//                   p-8 bg-white rounded-lg transition-all duration-300
//                   ${hoveredStep === index ? 'shadow-lg transform -translate-y-1' : 'shadow'}
//                 `}>
//                   <h6 className="mb-3 font-semibold text-lg">
//                     {step.title}
//                   </h6>
//                   <p className="text-gray-500 text-sm">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobPilotSteps;


import React from 'react';
import { 
  UserCircle2, 
  Upload, 
  Search, 
  CheckCircle2
} from 'lucide-react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useTranslation } from '../../context/LanguageContext';




const steps = [
  {
    icon: <UserCircle2 className="w-6 h-6" />,
    activeIcon: <UserCircle2 className="w-6 h-6 text-white" />,
    key: 'createaccount'
  },
  {
    icon: <Upload className="w-6 h-6" />,
    activeIcon: <Upload className="w-6 h-6 text-white" />,
    key: 'uploadcv'
  },
  {
    icon: <Search className="w-6 h-6" />,
    activeIcon: <Search className="w-6 h-6 text-white" />,
    key: 'findsuitable'
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    activeIcon: <CheckCircle2 className="w-6 h-6 text-white" />,
    key: 'applyjob'
  }
];

const JobPilotSteps = () => {
  const { t } = useTranslation();

  const animationRef = useScrollAnimation();
  const [hoveredStep, setHoveredStep] = React.useState(null);

  return (

   
    
    <div className="max-w-7xl mx-auto py-16 px-4 bg-gray-50 scroll-animate">
      <h2 className="text-center mb-16 text-2xl font-bold animate-fadeInDown">
        How JobExpress work
      </h2>

      <div ref={animationRef}  className="grid grid-cols-1 text-primary-600 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="relative scroll-animate" style={{ animationDelay: `${index * 200}ms` }}>
              {/* Ligne pointillée de connexion */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+70px)] w-[calc(100%-140px)] h-0.5">
                  <div className="w-full border-t-2 border-dashed border-gray-300 animate-slideIn" 
                       style={{ animationDelay: `${(index + 1) * 300}ms` }} />
                </div>
              )}

              {/* Card de l'étape */}
              <div
                className="flex flex-col items-center text-center"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div 
                  className={`
                    w-24 h-24 rounded-full 
                    flex items-center justify-center mb-4
                    transition-all duration-300 ease-in-out
                    animate-scaleUp hover-lift
                    ${hoveredStep === index ? 'bg-blue-600 shadow-lg' : 'bg-white shadow'}
                  `}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {hoveredStep === index ? step.activeIcon : step.icon}
                </div>

                <div 
                //   className={`
                //     p-8 bg-white rounded-lg transition-all duration-300
                //     animate-fadeIn hover-lift
                //     ${hoveredStep === index ? 'shadow-lg transform -translate-y-1' : 'shadow'}
                //   `}
                //   style={{ animationDelay: `${index * 200 + 100}ms` }}
                
                className={`
                    p-8 bg-white rounded-lg 
                    transition-all duration-300
                    ${hoveredStep === index ? 'shadow-lg' : 'shadow'}
                    animate-fadeIn hover-lift
                  `}
                  style={{ animationDelay: `${index * 0.2 + 0.1}s` }}
                >
                  <h6 className="mb-3 font-semibold text-lg">
                  {t(`home.stepsCreateAccount.title.${step.key}`)} 
                  </h6>
                  <p className="text-gray-500 text-sm">
                  {t(`home.stepsCreateAccount.description.${step.key}`)}
                  </p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default JobPilotSteps;