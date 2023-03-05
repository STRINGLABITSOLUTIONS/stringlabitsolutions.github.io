import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from './component/Dashboard';

export default function AdminPanel () {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [settingSelected, setSettingSelected] = useState(false);
  const [settingsExpanded, setSettingsExpanded] = useState(false);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab !== 'Dashboard' && tab !== 'Report'){
      setSettingSelected(true);
    }
    else setSettingSelected(false);
  };
  const menuItem = [
    {
      id: 1,
      title: 'Dashboard',
      icon: ''
    },
    {
      id: 2,
      title: 'Report',
      icon: ''
    }
  ];
  const settingMenuItem = [
    {
      id: 1,
      title: 'Products',
      icon: ''
    },
    {
      id: 2,
      title: 'Pricing',
      icon: ''
    },
    {
      id: 3,
      title: 'Blogs',
      icon: ''
    },
    {
      id: 4,
      title: 'Logos',
      icon: ''
    },
    {
      id: 5,
      title: 'About',
      icon: ''
    }
  ];
  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 text-gray-100 flex flex-col justify-between w-64">
        <div className="flex flex-col">
          <div className="flex items-center justify-center h-16">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <nav className="flex-grow">
            <ul className="flex flex-col py-4">
              {/* ========================menu start======================== */}
              {menuItem.map((item)=>(
                <li
                  key={item.id}
                  className={`${
                    activeTab === item.title ? 'bg-gray-900 text-white' : 'text-gray-400 hover:text-white hover:bg-slate-700'
                  } pl-6 pr-4 py-2 cursor-pointer`}
                  onClick={() => handleTabClick(item.title)}
                >
                  <i className="fa fa-tachometer mr-3"></i>
                  {item.title}
                </li>
              ))}
              {/* ========================menuItem end======================== */}
              {/* ========================settingMenuItem start======================== */}
              <li className={`${settingSelected?'bg-gray-900 text-white':'text-gray-400 hover:text-white hover:bg-slate-700'} pl-6 pr-4 py-2 cursor-pointer `} onClick={() => {setSettingsExpanded(!settingsExpanded);}}>
                <i className={`fa fa-cog mr-3 ${settingsExpanded ? 'rotate-90' : ''}`}></i>
                  Settings
                <ul className={`${ settingsExpanded ? 'block' : 'hidden' } ml-4 mt-2 transition-all duration-500 ease-in-out`}>
                  {settingMenuItem.map((sItem)=>(
                    <li key={sItem.id} className={`${
                      activeTab === sItem.title ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-slate-700'
                      } pl-2 pr-4 py-2 cursor-pointer`}
                      onClick={() => {handleTabClick(sItem.title)}}
                    >
                      ↳ {sItem.title}
                    </li>
                  ))}
                </ul>
              </li>
              {/* ========================settingMenuItem end======================== */}
            </ul>
          </nav>
        </div>
        <div className="text-center py-4">
          <NavLink to="/" className="text-gray-400 hover:text-white">
            Logout
          </NavLink>
        </div>
      </div>
      <div className="flex-1 bg-gray-100">
        <div className="p-6">
          {activeTab === 'Dashboard' && <Dashboard/>}
          {activeTab === 'Report' && <h2>Reports</h2>}
          {activeTab === 'Products' && <h2>Products Settings</h2>}
          {activeTab === 'Pricing' && <h2>Pricing Settings</h2>}
          {activeTab === 'Blogs' && <h2>Blogs Settings</h2>}
          {activeTab === 'Logos' && <h2>Logos Settings</h2>}
          {activeTab === 'About' && <h2>Pricing Settings</h2>}
        </div>
      </div>
    </div>
  );
};
