import React from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='pt-32'>
            <div className='flex items-center justify-between'>
                <hr className='w-[40%] border-[2px] border-red-500' />
                <h1 style={{ fontFamily: 'Lobster' }} className='text-7xl text-gray-800 text-center'>Our Menu</h1>
                <hr className='w-[40%] border-[2px] border-red-500' />
            </div>
            <div className='my-8'>
                <h3 className='flex justify-center items-center space-x-3 bg-red-500 w-56 mx-auto py-3 px-5 rounded-xl text-white'>
                    <Link to="/" className='text-lg'>Home</Link>
                    <i class="fa-solid fa-greater-than text-sm -mb-[2px]"></i>
                    <p className='text-lg'>Our Menu</p>
                </h3>
            </div>
        </div>
    );
};

export default Menu;