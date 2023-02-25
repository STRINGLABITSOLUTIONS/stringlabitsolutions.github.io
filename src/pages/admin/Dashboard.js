import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 text-gray-100 flex flex-col justify-between w-64">
        <div className="flex flex-col">
          <div className="flex items-center justify-center h-16">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <nav className="flex-grow">
            <ul className="flex flex-col py-4">
              <li
                className={`${
                  activeTab === 'dashboard' ? 'bg-gray-900 text-white' : 'text-gray-400 hover:text-white'
                } pl-6 pr-4 py-2 cursor-pointer`}
                onClick={() => handleTabClick('dashboard')}
              >
                <i className="fa fa-tachometer mr-3"></i>
                Dashboard
              </li>
              <li
                className={`${
                  activeTab === 'reports' ? 'bg-gray-900 text-white' : 'text-gray-400 hover:text-white'
                } pl-6 pr-4 py-2 cursor-pointer`}
                onClick={() => handleTabClick('reports')}
              >
                <i className="fa fa-file-text-o mr-3"></i>
                Reports
              </li>
              <li
                className={`${
                  activeTab === 'settings' ? 'bg-gray-900 text-white' : 'text-gray-400 hover:text-white'
                } pl-6 pr-4 py-2 cursor-pointer`}
                onClick={() => handleTabClick('settings')}
              >
                <i className="fa fa-cog mr-3"></i>
                Settings
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-center py-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Logout
          </a>
        </div>
      </div>
      <div className="flex-1 bg-gray-100">
        <div className="p-6">
          {activeTab === 'dashboard' && <h2>Dashboard</h2>}
          {activeTab === 'reports' && <h2>Reports</h2>}
          {activeTab === 'settings' && <h2>Settings</h2>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
