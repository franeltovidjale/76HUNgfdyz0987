// src/components/layout/DashboardLayout.jsx
import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import Header from './Header';

// // src/components/layouts/DashboardLayout.jsx
// const DashboardLayout = ({ children }) => {
//   return (
//     <div className=" bg-gray-50">
//       <Header />
//       <div className="flex pt-16">
//         <DashboardSidebar />
//         <main className="flex-1 ml-64 p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// src/components/layout/DashboardLayout.jsx
const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 lg:ml-64 p-6  mt-[-140px]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;