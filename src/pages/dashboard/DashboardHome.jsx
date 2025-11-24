import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='p-8'>
           <h1 className="text-3xl font-bold mb-4">Welcome {user?.displayName  || "User"}</h1>

           {/* state cards  */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="card bg-base-200 p-5 shadow">
                <h2 className='text-xl font-semibold'>Total Movies</h2>
                <p className='text-3xl font-bold mt-2'>0</p>
             </div>

             <div className="card bg-base-200 p-5 shadow">
                <h2 className='text-xl font-semibold'>My Collection</h2>
                <p className="text-3xl font-bold mt-2">0</p>
             </div>

              <div className="card bg-base-200 p-5 shadow">
                <h2 className='text-xl font-semibold'>My Collection</h2>
                <p className="text-3xl font-bold mt-2 text-green-600">
                    {user ? "Active" : "Not Logged In"}
                </p>
             </div>

             {/* Quick Actions  */}
             <h2 className='text-2x1 font-semibold mt-10 mb-4'>Quick Actions</h2>

             <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <Link to="/dashboard/add-movie" className='btn btn-primary'>Add New Movie</Link>
                <Link to="/all-movies" className='btn btn-secondary'>View All Movies</Link>
                <Link to="/dashboard/my-collection" className='btn btn-neutral'>My Collection</Link>
             </div>

             
           </div>
        </div>
    );
};

export default DashboardHome;