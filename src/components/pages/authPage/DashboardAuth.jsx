// // src/components/pages/authPage/DashboardAuth.jsx
// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import DashboardLayout from '../../layout/DashboardLayout';

// const DashboardAuth = () => {
//   return (
//     <DashboardLayout>
//       <Outlet />
//     </DashboardLayout>
//   );
// };

// export default DashboardAuth;


// src/components/pages/authPage/UserDashboard.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
// import DashboardLayout from '../../layouts/DashboardLayout';

const DashboardAuth = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default DashboardAuth;