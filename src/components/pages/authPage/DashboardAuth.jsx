// src/components/pages/authPage/DashboardAuth.jsx
import React from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import UserDashboard from './UserDashboard';

const DashboardAuth = () => {
  return (
    <DashboardLayout>
      <UserDashboard />
    </DashboardLayout>
  );
};

export default DashboardAuth;