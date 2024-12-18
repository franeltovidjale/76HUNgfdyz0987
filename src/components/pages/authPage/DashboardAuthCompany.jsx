


// src/components/pages/authPage/UserDashboard.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

import DashboardLayoutCompany from '../../layouts/DashboardLayoutCompany';


const DashboardAuth = () => {
  return (
    <DashboardLayoutCompany>
      <Outlet />
    </DashboardLayoutCompany>
  );
};

export default DashboardAuth;