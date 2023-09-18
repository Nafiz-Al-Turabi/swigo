import React, { useEffect, useState } from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <nav className={`z-40 p-4 fixed w-full navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-10">
                    {/* Logo */}
                    <div className="text-gray-900 text-xl font-bold">
                        <img src="https://i.ibb.co/DfbGFph/logo.png" alt="SWIGO" />
                    </div>
                    {/* Desktop Menu */}
                    <ul className='md:flex space-x-5 '>
                        <Link to="/" className="text-cyan-950 text-lg hover:text-red-600 duration-500 ease-in-out ">Home</Link>
                        <Link to="/" className="text-cyan-950 text-lg hover:text-red-600 duration-500 ease-in-out ">Our menu</Link>
                        <Link to="/" className="text-cyan-950 text-lg hover:text-red-600 duration-500 ease-in-out ">Our Shop</Link>
                        <Link to="/" className="text-cyan-950 text-lg hover:text-red-600 duration-500 ease-in-out ">Contact Us</Link>
                        <Link to="/" className="text-cyan-950 text-lg hover:text-red-600 duration-500 ease-in-out ">Dashboard</Link>
                        {/* Add more menu items as needed */}
                    </ul>
                </div>

                {/* Right side (Login and Cart) */}
                <div className="flex space-x-4">
                    <button className="bg-white p-2 border border-red-600 rounded-lg hover:text-red-600 ">
                        <CiUser className='text-2xl' />
                    </button>
                    <button className="text-gray-900 relative bg-white p-2 border border-red-600 rounded-lg hover:text-red-600 ">
                        <HiOutlineShoppingBag className='text-2xl' />
                        <span className="bg-gray-500 text-white font-semibold h-6 w-6 rounded-full text-center absolute top-0 right-0 -mr-3 -mt-3">
                            3 {/* Display cart item count here */}
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
