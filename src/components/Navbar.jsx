import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLinks = (
        <>
           <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">All Movies</Link></li>
             <li><Link to="/login">Login</Link></li>
        </>
    )
    return (
        <div className='navbar bg-base-200 px-4'>
            <div className='navbar-start'>
                <Link to="/" className='text-xl font-bold'>MovieMaster</Link>
            </div>
            <div className='navbar-end'>
                <ul className='menu menu-horizontal px-1'>
                  {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;