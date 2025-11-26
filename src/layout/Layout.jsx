import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div>
           <header className='w-11/12 mt-2 mx-auto "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
              <Navbar />
           </header>
           <main className='w-11/12 mx-auto my-2'>
             <Outlet />
           </main>
          <footer  className="bg-[url(/bg.svg)] bg-no-repeat" >
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default Layout;