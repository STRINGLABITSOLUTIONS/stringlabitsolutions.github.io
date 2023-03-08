import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { BiLogOut } from 'react-icons/bi';
import { HiDocumentReport } from 'react-icons/hi';
import { RiDashboardFill, RiSettings4Fill } from 'react-icons/ri';
import { RxChevronDown } from 'react-icons/rx';
import Dashboard from './pages/Dashboard';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [settingSelected, setSettingSelected] = useState(false);
  const [settingsExpanded, setSettingsExpanded] = useState(false);
  const menuItems = [
    {
      id: uuidv4(),
      title: 'Dashboard',
      icon: <RiDashboardFill />,
    },
    {
      id: uuidv4(),
      title: 'Report',
      icon: <HiDocumentReport />,
    },
  ];
  const settingMenuItems = [
    {
      id: uuidv4(),
      title: 'Products',
      icon: '',
    },
    {
      id: uuidv4(),
      title: 'Pricing',
      icon: '',
    },
    {
      id: uuidv4(),
      title: 'Blogs',
      icon: '',
    },
    {
      id: uuidv4(),
      title: 'Logos',
      icon: '',
    },
    {
      id: uuidv4(),
      title: 'About',
      icon: '',
    },
  ];
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab !== 'Dashboard' && tab !== 'Report') {
      setSettingSelected(true);
    } else setSettingSelected(false);
  };

  return (
    <div className='flex h-screen'>
      <div className='bg-gray-800 text-gray-100 flex flex-col justify-between w-64'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-center h-16'>
            <h1 className='text-2xl font-bold'>String Lab</h1>
          </div>
          <nav className='flex-grow'>
            <ul className='flex flex-col py-4'>
              {/* ========================menu start======================== */}
              {menuItems?.map(({ id, title, icon }) => (
                <li
                  key={id}
                  className={`${
                    activeTab === title
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-slate-700'
                  } pl-6 pr-4 py-2 cursor-pointer`}
                  onClick={() => handleTabClick(title)}>
                  <i className='fa fa-tachometer mr-3'></i>
                  <span className='flex items-center gap-3'>
                    {icon}
                    {title ?? 'No Title'}
                  </span>
                </li>
              ))}
              {/* ========================menuItem end======================== */}
              {/* ========================settingMenuItem start======================== */}
              <li
                className={`${
                  settingSelected
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700'
                } pl-6 pr-4 py-2 cursor-pointer `}
                onClick={() => {
                  setSettingsExpanded(!settingsExpanded);
                }}>
                <i
                  className={`fa fa-cog mr-3 ${
                    settingsExpanded ? 'rotate-90' : ''
                  }`}></i>
                <span className='flex items-center justify-between gap-3'>
                  <span className='flex items-center gap-3'>
                    <RiSettings4Fill />
                    Settings
                  </span>
                  <RxChevronDown className={`${settingsExpanded?'rotate-180':''}`}/>
                </span>
                <ul
                  className={`${
                    settingsExpanded ? 'block' : 'hidden'
                  } ml-4 mt-2 transition-all duration-500 ease-in-out`}>
                  {settingMenuItems?.map(({ id, title }) => (
                    <li
                      key={id}
                      className={`${
                        activeTab === title
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-slate-700'
                      } pl-2 pr-4 py-2 cursor-pointer`}
                      onClick={() => {
                        handleTabClick(title);
                      }}>
                      ↳ {title ?? 'No Title'}
                    </li>
                  ))}
                </ul>
              </li>
              {/* ========================settingMenuItem end======================== */}
            </ul>
          </nav>
        </div>
        <div className='text-center py-4'>
          <NavLink
            to='/'
            className='flex items-center justify-center gap-3 text-gray-400 hover:text-white'>
            <BiLogOut />
            Logout
          </NavLink>
          <div className='border-t mt-5 pt-5 text-xs'>
            All copyright © recieved 2023 <br /> String Lab Solution
          </div>
        </div>
      </div>
      <div className='flex-1 bg-gray-700 text-gray-50'>
        <div className='p-6'>
          {activeTab === 'Dashboard' && <Dashboard />}
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
}
