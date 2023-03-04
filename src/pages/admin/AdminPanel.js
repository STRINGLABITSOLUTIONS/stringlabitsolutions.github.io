import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from './component/Dashboard';

export default function AdminPanel () {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [settingsExpanded, setSettingsExpanded] = useState(false);
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
                  activeTab === 'dashboard' ? 'bg-gray-900 text-white' : 'text-gray-400 hover:text-white hover:bg-slate-700'
                } pl-6 pr-4 py-2 cursor-pointer`}
                onClick={() => handleTabClick('dashboard')}
              >
                <i className="fa fa-tachometer mr-3"></i>
                Dashboard
              </li>
              <li
                className={`${
                  activeTab === 'reports' ? 'bg-gray-900 text-white' : 'text-gray-400 hover:text-white hover:bg-slate-700'
                } pl-6 pr-4 py-2 cursor-pointer`}
                onClick={() => handleTabClick('reports')}
              >
                <i className="fa fa-file-text-o mr-3"></i>
                Reports
              </li>
              <li
                className={`pl-6 pr-4 py-2 cursor-pointer text-gray-400 hover:text-white hover:bg-slate-700`}
                onClick={() => {setSettingsExpanded(!settingsExpanded);}}
              >
                <i className={`fa fa-cog mr-3 ${settingsExpanded ? 'rotate-90' : ''}`}></i>
                Settings
                <ul
                  className={`${
                    settingsExpanded ? 'block' : 'hidden'
                  } ml-4 mt-2 transition-all duration-500 ease-in-out`}
                >
                  <li
                    className={`${
                      activeTab === 'general' ? 'bg-gray-900 text-white' : 'text-gray-400 hover:text-white hover:bg-slate-700'
                    } pl-2 pr-4 py-2 cursor-pointer`}
                    onClick={() => handleTabClick('general')}
                  >
                    ↳ General
                  </li>
                  <li
                    className={`${
                      activeTab === 'security' ? 'bg-gray-900 text-white' : 'text-gray-400 hover:text-white hover:bg-slate-700'
                    } pl-2 pr-4 py-2 cursor-pointer`}
                    onClick={() => handleTabClick('security')}
                  >
                    ↳ Security
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-center py-4">
          <NavLink to="#" className="text-gray-400 hover:text-white">
            Logout
          </NavLink>
        </div>
      </div>
      <div className="flex-1 bg-gray-100">
        <div className="p-6">
          {activeTab === 'dashboard' && <Dashboard/>}
          {activeTab === 'reports' && <h2>Reports</h2>}
          {activeTab === 'general' && <h2>General Settings</h2>}
          {activeTab === 'security' && <h2>Security Settings</h2>}
        </div>
      </div>
    </div>
  );
};
