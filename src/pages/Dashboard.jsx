import { CiMenuFries } from "react-icons/ci";
import { MdVideoLibrary } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer toggle for mobile */}
      <input type="checkbox" id="sidebar" className="drawer-toggle" />

      {/* Page content */}
      <div className="drawer-content flex flex-col">
        {/* Top navbar */}
        <div className="w-full navbar bg-base-300 shadow-md px-4">
<label htmlFor="sidebar" className="btn btn-ghost lg:hidden">
          <CiMenuFries />
        </label>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        
      </div>
      {/* Main content  */}
      <div className="p-5">
        <Outlet />
      </div>
      {/* //    Sidebar content */}
      <div className="drawer-side">
        <label htmlFor="sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-72 main-h-full bg-base-200 text-base-content">
          <h2 className="text-3xl font-bold mb-4">
            <MdVideoLibrary /> MovieMaser
          </h2>

          {/* Admin / User menu  */}
          <li>
            <Link to="/dashboard">Dashboard Home</Link>
          </li>
          <li>
            <Link to="/dashboard/my-movies">My Movie Collection</Link>
          </li>
          <li>
            <Link to="/dashboard/add-movie">Add New Movie</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>

          <div className="divider"></div>

          {/* General menu  */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-movies">All Movies</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
