import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content flex justify-between px-20 md:flex-row flex-col items-center">
           
  <nav className="" >
    <span className='footer-title'>Quick Links</span>
    
   <div className='flex space-x-4 md:flex-row flex-col space-y-2'>
     <a className="link link-hover" href='/'>Home</a>
    <a className="link link-hover" href='/movies'>All Movie</a>
    <a className="link link-hover" href='/my-collection'>My Collection</a>
   </div>
   
  </nav>
  <nav>
           <span className='footer-title mx-3'>Follow Us</span>
         <div className="flex space-x-4 ">
            <a href="#"><FaFacebookF className='h-6 w-6'></FaFacebookF></a>
             <a href="#"><FaTwitter className='h-6 w-6'></FaTwitter></a>
              <a href="#"><FaInstagramSquare className='h-6 w-6'></FaInstagramSquare></a>
         </div>
    
  </nav>
   <div className=''>
                <span className='footer-title'>MovieMaster Pro</span>
                <p>&copy; {new Date().getFullYear()} MovieMaster Pro</p>
            </div>
  
</footer>
    );
};

export default Footer;