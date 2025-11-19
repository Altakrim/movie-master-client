import React from 'react';

const Footer = () => {
    return (
        <footer className='footer footer-center p-4 bg-base-200 text-base-content mt-10'>
            <p>&copy; {new Date().getFullYear()} MovieMaster Pro</p>
        </footer>
    );
};

export default Footer;