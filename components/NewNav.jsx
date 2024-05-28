"use client";

import { useState } from "react";
import Link from "next/link";

const NewNav = () => {
    const [navOpenStatus, setNavOpenStatus] = useState(false);

    const handleNavToggle = () => {
        setNavOpenStatus(!navOpenStatus);
    }

    const handleLinkClick = () => {
        setNavOpenStatus(false);
    }

    return (
        <div className="fixed top-0 left-0 z-50 p-4">
            {!navOpenStatus &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-red-500 cursor-pointer" onClick={handleNavToggle}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            }

            {navOpenStatus &&
                <div className="flex items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-red-500 cursor-pointer mr-4" onClick={handleNavToggle}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    <div className="flex space-x-7 text-red-500 text-lg font-semibold bg-black bg-opacity-30 p-4 rounded-lg">
                        <Link href='/' className="hover:bg-gray-600" onClick={handleLinkClick}>Home</Link>
                        <Link href='/about' className="hover:bg-gray-600" onClick={handleLinkClick}>About</Link>
                        <Link href='/projects' className="hover:bg-gray-600" onClick={handleLinkClick}>Projects</Link>
                        <Link href='/techStack'className="hover:bg-gray-600" onClick={handleLinkClick}>Tech Stack</Link>
                        <Link href='/blog' className="hover:bg-gray-600" onClick={handleLinkClick}>Blog</Link>
                        <Link href='/contact' className="hover:bg-gray-600" onClick={handleLinkClick}>Contact</Link>
                    </div>
                </div>
            }
            
        </div>
    );
}

export default NewNav;