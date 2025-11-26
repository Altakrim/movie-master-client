
import { Baby, Clapperboard, CopyPlus, House } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-base-500 p-6 shadow-md ">
        <h2 className="text-2xl font-bold mb-6 text-center">MovieMaster</h2>

        <nav className="flex flex-col gap-3">
          <Link
            to="/dashboard"
            className="btn btn-ghost btn-block text-left"
          >
            <House /> Home
          </Link>

          <Link
            to="/dashboard/my-movies"
            className="btn btn-ghost btn-block text-left"
          >
             <Clapperboard /> My Movies
          </Link>

          <Link
            to="/dashboard/add-movie"
            className="btn btn-ghost btn-block text-left"
          >
             <CopyPlus /> Add Movie
          </Link>

          <Link
            to="/dashboard/profile"
            className="btn btn-ghost btn-block text-left"
          >
            <Baby /> Profile
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-base-500">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
