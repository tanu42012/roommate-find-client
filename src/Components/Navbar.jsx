import React, { use } from 'react';
import { NavLink } from 'react-router';
import "../Navbar/Navbar.css"
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const{user,logOut}=use(AuthContext);
    const handleLogout=()=>{
        console.log('user try log out')
        logOut()
        .then(()=>{
            alert('you are logout successfully')
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                                <a>Add to Find Roommate</a>
                                
                            </li>
                            <li><a>Browse Listing</a></li>
                            <li><a>My Listings</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Find Roommate</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li>
                        <NavLink to='/add-find-roommate'>Add to Find Roommate</NavLink>
                        </li>
                        <li><NavLink to='/browse-listing'>Browse Listing</NavLink></li>
                        <li><NavLink to='/my-listing'>My Listings</NavLink></li>
                        <li><NavLink to='/details'>Details</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div>{user && user.email}</div>
                    {
                        user? <button onClick={handleLogout} className='btn'>Logout</button> :<NavLink to='/auth/login' className="btn">Login</NavLink>
                    }
                    
                    <NavLink to="/auth/register" className="btn">Register</NavLink>
                </div>
            </div>


        </div>
    );
};

export default Navbar;