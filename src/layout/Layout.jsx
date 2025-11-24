import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div>
           <header className='w-11/12 mt-2 mx-auto bg-base-300'>
              <Navbar />
           </header>
           <main className='w-11/12 mx-auto my-2'>
             <Outlet />
           </main>
          <footer  className="bg-amber-600" >
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default Layout;