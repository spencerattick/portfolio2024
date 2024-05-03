'use client';

import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-0 left-0 z-50 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-red-500 cursor-pointer" onClick={toggleNav}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            {isOpen && (
                <div className="fixed top-0 left-0 w-64 h-80 bg-black text-white p-5 transform transition-transform duration-700 ease-in-out">
                    <div className="absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-500 cursor-pointer" onClick={toggleNav}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <ul className='flex-col mt-10'>
                        <li className="p-2 hover:bg-gray-700">Home</li>
                        <li className="p-2 hover:bg-gray-700">About</li>
                        <li className="p-2 hover:bg-gray-700">Services</li>
                        <li className="p-2 hover:bg-gray-700">Contact</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
