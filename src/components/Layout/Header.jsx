import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/image/logo-side-removebg-preview.png'
function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);  // State for mobile menu
  let lastScrollY = 0;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);  // Hide on scroll down
    } else {
      setIsVisible(true);  // Show on scroll up
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='flex items-center justify-between bg-transparent p-4 '>
        {/* Logo */}
        <div className='text-yellow-200 font-serif text-2xl md:text-4xl font-extrabold'>
          <img className='h-16 w-60' src={logo} alt="" />
          {/* <h1>Glocare Assist</h1> */}
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden text-cyan-50" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`flex-col md:flex md:flex-row md:items-center absolute md:static left-0 top-16 w-full md:w-auto bg-slate-950 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col md:flex-row md:space-x-4 text-center'>
            <li className='hover:bg-slate-800 p-2 text-cyan-50 text-lg md:text-xl'>
              <NavLink 
                to='/' 
                className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-cyan-50'}>
                Home
              </NavLink>
            </li>
            <li className='hover:bg-slate-800 p-2 text-cyan-50 text-lg md:text-xl'>
              <NavLink 
                to='/About' 
                className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-cyan-50'}>
                About Us
              </NavLink>
            </li>
            <li className='hover:bg-slate-800 p-2 text-cyan-50 text-lg md:text-xl'>
              <NavLink 
                to='/Services' 
                className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-cyan-50'}>
                Services
              </NavLink>
            </li>
            <li className='hover:bg-slate-800 p-2 text-cyan-50 text-lg md:text-xl'>
              <NavLink 
                to='/Blogs' 
                className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-cyan-50'}>
                Blogs
              </NavLink>
            </li>
            <li className='hover:bg-slate-800 p-2 text-cyan-50 text-lg md:text-xl'>
              <NavLink 
                to='/Contact' 
                className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-cyan-50'}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

// import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'

// function Header() {
//     const [isVisible, setIsVisible] = useState(true);
//     let lastScrollY = 0;

//     const handleScroll = () => {
//         if (window.scrollY > lastScrollY) {
//             setIsVisible(false);  // Hide on scroll down
//         } else {
//             setIsVisible(true);  // Show on scroll up
//         }
//         lastScrollY = window.scrollY;
//   };

//     useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-gradient-to-r from-gray-200 to-gray-950`}>
//             <div className='grid grid-cols-12 p-1 bg-slate-950 h-20 items-center opacity-80 '>
//                 <div className=' col-span-4 flex justify-center align-middle text-yellow-200 font-serif'>
//                     <h1 className='font-extrabold text-4xl'>Glocare Assist</h1>
//                 </div>
                
//                 <nav className=' col-span-7'>
//                     <ul className='flex justify-between items-center '>
//                         <li className='hover:bg-slate-800 p-1  pl-2 pr-2 text-cyan-50 text-xl'>
//                             <NavLink to='/'>Home</NavLink>
//                         </li>
//                         <li className='hover:bg-slate-800 p-1  pl-2 pr-2 text-cyan-50 text-xl'>
//                             <NavLink to='/About'>About Us</NavLink>
//                         </li>
//                         <li className='hover:bg-slate-800 p-1  pl-2 pr-2 text-cyan-50 text-xl'>
//                             <NavLink to='/Services'>Services</NavLink>
//                         </li>
//                         <li className='hover:bg-slate-800 p-1  pl-2 pr-2 text-cyan-50 text-xl'>
//                             <NavLink to='/Blogs'>Blogs</NavLink>
//                         </li>
//                         <li className='hover:bg-slate-800 p-1  pl-2 pr-2 text-cyan-50 text-xl'>
//                             <NavLink to='/Contect'>Contect Us</NavLink>
//                         </li>
//                     </ul>
//                 </nav>
//                 <div className=' col-span-1'></div>             
//             </div>
//     </header>
//   )
// }

// export default Header