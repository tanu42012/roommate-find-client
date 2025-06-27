

import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from "../assets/user.png";
import "../Navbar/Navbar.css";
import { AuthContext } from '../Provider/AuthProvider';
import { FaSearch } from "react-icons/fa";
import Swal from 'sweetalert2';

const Navbar = ({ children }) => {
    const { user, logOut } = useContext(AuthContext);
    const [dark, setDark] = useState(false);

    const handleLogout = () => {
        // console.log('user try log out');
        logOut()
            .then(() => {
                // alert('You are logged out successfully');
                Swal.fire('User logged out successfully')
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div data-theme={dark ? "dark" : "light"}>
            <div className="navbar bg-gray-300     shadow-sm mt-4
            ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mx-auto z-10 mt-3 w-52 p-2 shadow">


                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/add-find-roommate'>Add to Find Roommate</NavLink></li>
                            {/* <li><NavLink to='/details'>Details</NavLink></li> */}
                            <li><NavLink to='/browse-listing'>Browse Listing</NavLink></li>
                            {
                                user && <>
                                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>

                                </>
                            }

                            {/* <li><NavLink to='/my-listing'>My Listing </NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li> */}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><FaSearch /> Find Roommate</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/add-find-roommate'>Add to Find Roommate</NavLink></li>
                        <li><NavLink to='/browse-listing'>Browse Listing</NavLink></li>
                        {
                            user && <>
                                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>

                            </>
                        }

                        <li><NavLink to='/my-listing'>My Listings</NavLink></li>
                        <li><NavLink to='/about'>About Us</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-end gap-4">
                    <div>


                        <input type="checkbox" onClick={() => setDark(!dark)} className="toggle theme-controller" />
                    </div>

                    <div className="relative group cursor-pointer">
                        <img className='w-12 rounded-full hover:{user.displayName,contactInfo,availability}' src={`${user ? user.photoURL : userIcon}`} alt="" />
                        {user && (
                            <div className="absolute hidden group-hover:block bg-white text-black text-sm rounded px-2 py-1 shadow-lg top-14 left-1/2 transform -translate-x-1/2 z-50 whitespace-nowrap">
                                {user.displayName}
                            </div>
                        )}
                    </div>


                    {
                        user ? (
                            <button onClick={handleLogout} className='btn btn-primary rounded-xl'>Logout</button>
                        ) : (
                            <NavLink to='/auth/login' className="btn">Login</NavLink>
                        )
                    }
                    {
                        !user && (
                            <NavLink to="/auth/register" className="btn">Register</NavLink>
                        )
                    }
                </div>
            </div>
            {children}

        </div>
    );
};

export default Navbar;
