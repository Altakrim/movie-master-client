import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
    const navLinks = (
        <>
           <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">All Movies</Link></li>
             <li><Link to="/my-collection">My Collection</Link></li>
             
        </>
    )
    return (
        // <div className='navbar bg-base-200 px-4'>
        //     <div className='navbar-start'>
        //         <Link to="/" className='text-xl font-bold sparkle-button'>MovieMaster</Link>
        //     </div>
        //     <div className='navbar-center hidden lg:flex'>
        //         <ul className='menu menu-horizontal px-1'>
        //           {navLinks}
        //         </ul>
        //     </div>
        //     <div className='navbar-end'>
        //         {!user ? (
        //             <>
        //               <Link to="/login" className='btn btn-sm btn-primary mr-2'>Login </Link>
        //               <Link to="/register" className='btn btn-sm btn-secondary'>Register</Link>
        //             </>
        //         ) : (
        //             <div className='dropdown dropdown-end'>
        //                 <label tabIndex={0} className='btn btn-sm btn-primary rounded-btn'>
        //                     {user.name}
        //                 </label>
        //                 <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
        //                     <li><Link to="/profile">Profile</Link></li>
        //                     <li><Link to= "/logout">Logout</Link></li>
        //                 </ul>
        //             </div>
        //         )}

        //     </div>
            
        // </div>
 <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navLinks}
      </ul>
    </div>
    <div className='navbar-start'>
      <Link to="/" className='text-xl font-bold sparkle-button'>MovieMaster</Link>
     </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
          {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
      {!user ? (
                    <>
                      <Link to="/login" className='btn btn-sm btn-primary mr-2'>Login </Link>
                      <Link to="/register" className='btn btn-sm btn-secondary'>Register</Link>
                    </>
                ) : (
                    <div className='dropdown dropdown-end'>
                        <label tabIndex={0} className='btn btn-sm btn-primary rounded-btn'>
                            {user.name}
                        </label>
                        <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to= "/logout">Logout</Link></li>
                        </ul>
                    </div>
                )}
  </div>
</div>

       
    );
};

export default Navbar;