import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import  "./Navbar.css"
import { AuthContext } from "../providers/AuthProvider";
import UserDropdown from "./UserDropdown";


const Navbar = () => {
  const {user} = useContext(AuthContext);

  // const handleLogout = () => {
  //   logoutUser()
  //    .then(() => console.log("User logged out"))
  //    .catch((error) => console.log(error));
  // };
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/movies">All Movies</Link>
      </li>
      {user && (
                <li>
                    <NavLink to="/my-collection" className="font-semibold">My Collection</NavLink>
                </li>
            )}
    </>
  );
  return (
    <div className="navbar shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        <a className="button">MovieMaster Pro</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="px-10">
        <input type="text" className="form p-2 rounded-2xl"
         placeholder="Search..."  />
      </div>
      
      <div className="navbar-end">

        {!user? (
          <>
            <Link to="/login" className="btn btn-sm btn-success mr-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-sm btn-secondary">
              Register
            </Link>
          </>
        ) : (
          <UserDropdown />
        )}
      </div>
    </div>
  );
};

export default Navbar;

