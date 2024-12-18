// src/components/layout/DashboardLayout.jsx
import React from 'react';
import DashboardSidebarCompany from './DashboardSidebarCompany';
import Header from './Header';



// src/components/layout/DashboardLayout.jsx
const DashboardLayoutCompany = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <DashboardSidebarCompany />
        <main className="flex-1 lg:ml-64 p-6  mt-[-140px]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayoutCompany;