import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='p-8'>
           <h1 className="text-3xl font-bold mb-4 text-center bg-linear-65 from-purple-500 to-pink-500">Welcome {user?.displayName  || "User"}</h1>

      
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

            

             
           </div>
        </div>
    );
};

export default DashboardHome;