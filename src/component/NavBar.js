import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../media/images/logo.png'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
    const menuItem = [
        {
            id: 1,
            name: "Home",
            icon: "",
            link: "home",
          },
          {
            id: 2,
            name: "Product",
            icon: "",
            link: "/",
          },
          {
            id: 3,
            name: "Pricing",
            icon: "",
            link: "pricing", 
          },
          {
            id: 4,
            name: "Blog",
            icon: "",
            link: "/",
          },
          {
            id: 5,
            name: "About",
            icon: "",
            link: "/",
          },
          {
            id: 6,
            name: "Contact",
            icon: "",
            link: "contact",
          },
    ];
    return (
    <nav id="header_" className="fixed top-0 left-0 z-20 w-full transition-all ease-in">
        <div className="container m-auto px-6 md:px-12 lg:px-6">
            <div className="flex flex-wrap items-center justify-between py-6 md:py-4 md:gap-0">
                <div className="w-screen flex items-center justify-between lg:w-auto">
                    <NavLink to={'/'} aria-label="logo">
                        <img src={logo} className="w-12 h-12 rounded-full" alt="tailus logo" width="144" height="48"/>
                    </NavLink>
                    <div className="block max-w-max">
                        {/* Hamburger button */}
                        <button id="hamburger" className="lg:hidden flex flex-col h-6 w-12 justify-center items-center group" onClick={() => setIsOpen(!isOpen)} >
                            <div className={`${hamburgerLine} ${
                                isOpen
                                ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                            }`}
                            />
                            <div className={`${hamburgerLine} ${
                                isOpen
                                ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                            }`}
                            />
                        </button>
                    </div>
                </div>

                <div id="navbar" className={`rounded-xl flex ${isOpen ? "h-full mt-2" : "h-0"} lg:h-auto overflow-hidden lg:flex lg:pt-0 w-full md:space-y-0 lg:p-0 md:bg-transparent lg:w-auto transition-all duration-200`}>
                    <div id="navBox" className="w-full p-6 lg:p-0 bg-white bg-opacity-40 backdrop-blur-md lg:items-center flex flex-col lg:flex-row lg:bg-transparent transition-all ease-in">
                        <ul className="space-y-6 pb-6 tracking-wide font-medium text-gray-800 lg:text-gray-100 lg:pb-0 lg:pr-6 lg:items-center lg:flex lg:space-y-0">
                            {menuItem.map((menu) => (
                                <li key={menu.id} className="cursor-pointer hover:scale-105 hover:border-b-2">
                                    <Link to={menu.link} smooth={true} spy={true} offset={50} duration={300} className="block md:px-3" onClick={() => setIsOpen(!isOpen)}>
                                        <span>{menu.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="border-t w-full lg:w-max gap-3 pt-2 lg:pt-0 lg:pl-2 lg:border-t-0 lg:border-l flex flex-col lg:gap-0 lg:items-center lg:flex-row">
                            <li className="flex w-full lg:max-w-max justify-center">
                                <button type="button" title="Start buying" className="flex w-full py-3 px-6 rounded-md text-center transition border border-purple-600 bg-white bg-opacity-40 backdrop-blur-md lg:backdrop-blur-none lg:bg-opacity-0 lg:bg-transparent lg:border-transparent active:border-purple-400 justify-center max-w-lg lg:max-w-max">
                                    <span className="block text-gray-700 lg:text-white font-semibold hover:text-purple-400">
                                        Login
                                    </span>
                                </button>
                            </li>
                            <li className="flex w-full lg:max-w-max justify-center">
                                <button type="button" title="Start buying" className="flex w-full py-3  px-6 rounded-lg text-center transition bg-purple-600 lg:bg-white active:bg-purple-700 lg:active:bg-purple-200 focus:bg-purple-500 lg:focus:bg-purple-100 justify-center max-w-lg lg:max-w-max">
                                    <span className="block text-sm text-white lg:text-purple-600 font-semibold">
                                        Sign In
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
