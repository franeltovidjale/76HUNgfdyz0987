// src/components/layout/DashboardLayout.jsx
import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import Header from './Header';

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 pl-64 pt-20"> {/* pt-20 pour laisser l'espace du header */}
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;