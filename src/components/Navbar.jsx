import React from 'react';
import screen from '../assets/images/screen.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="relative px-4 py-3 bg-slate-800 border-b border-white">
                <div className="flex flex-row justify-between items-center mx-auto space-x-2">
                    {/* Logo */}
                    <div className=" flex my-4">
                        <img
                            src={screen}
                            className="w-10 h-10 md:w-10 md:h-10 "
                            alt="Logo"
                        />
                        <NavLink
                            to="#"
                            className="text-lg md:text-2xl font-bold text-white ml-2 hidden md:block"
                        >
                            Dev-Connect
                        </NavLink>
                    </div>

                    {/* Links */}
                    <div className="flex space-x-3 text-sm md:text-lg">
                        <NavLink
                            to="/front"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-black text-lg rounded-md px-2 py-3 hover:bg-gray-800 text-white"
                                    : "text-white text-lg px-2 py-3"
                            }
                        >
                            Front-End
                        </NavLink>
                        <NavLink
                            to="/back"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-black rounded-md text-lg px-2 py-3 hover:bg-gray-800 text-white"
                                    : "text-white px-2 text-lg py-3"
                            }
                        >
                            Back-End
                        </NavLink>
                        <NavLink
                            to="/full"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-black rounded-md text-lg px-2 py-3 hover:bg-gray-800 text-white"
                                    : "text-white px-2 text-lg py-3"
                            }
                        >
                            FullStack
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;