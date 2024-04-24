"use client";

import { useState } from 'react';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { SlTrophy } from "react-icons/sl";
import Link from 'next/link';

export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const MenuItems = [
        { title: 'Home', url: '/' },
        { title: 'Upcoming Events', url: '/events' },
        { title: 'Live Score', url: '/score' },
        { title: 'Predicted Analysis', url: '/analysis' },
        { title: 'E-Shop', url: '/shop' },
        { title: 'Report', url: '/report' },
    ];

    return (
        <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6
        sticky top-0 z-50 shadow-md
        '>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <span className='flex flex-col justify-center items-center font-semibold text-md tracking-tight'>
                    <SlTrophy className='inline-block text-3xl mr-2' />
                    <i>
                    Game on GCU
                    </i>
                </span>
            </div>
            <div className='block lg:hidden'>
                <button onClick={handleClick} className='flex items-center px-3 py-2 border rounded text-teal-100 border-teal-400 hover:text-white hover:border-white'>
                    {click ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${click ? '' : 'hidden'}`}>
                <div className='md:ml-12 text-lg lg:flex-grow'>
                    {MenuItems.map((item, index) => {
                        return (
                            <Link href={item.url} key={index}
                                className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-12' onClick={closeMobileMenu}
                            >
                                    {item.title}
                                
                            </Link>
                        );
                    })}
                </div>
                <div className='flex items-center'>
                    <Link href='/login'
                        className='mt-2 px-2 py-1 md:mt-0 md:px-6 md:py-2 rounded-lg bg-teal-100 text-teal-600 hover:text-white' onClick={closeMobileMenu}
                    >
                            Login
                        
                    </Link>
                </div>

            </div>
        </nav>
    );
}
