import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import './MenuCard.css'

const MenuCard = ({menu}) => {
    const{image,name,test,price}=menu;
    return (
        <div className='menu-card bg-white w-[270px] shadow-lg shadow-gray-400 rounded-lg p-4 relative'>
            <div className='card-overlay rounded-tl-full'></div>
            <div className='flex justify-between items-center z-20'>
                <div>
                    <img className='h-16 rounded-full' src={image} alt="" />
                </div>
                <div>
                    <h1 className='menu-text text-2xl text-gray-800 font-bold '>{name}</h1>
                    <p className='text-gray-400 font-semibold'>{test}</p>
                </div>
            </div>
            <div className='mt-5'>
                <p className='text-xs font-bold text-gray-400'>Regular Price</p>
                <p className='menu-price text-xl font-bold text-red-500 mt-1'>{price}</p>
            </div>
            <button className='menu-btn bg-red-500 text-white p-4 absolute bottom-0 right-0 rounded-br-lg rounded-tl-lg hover:bg-white'>
                <AiOutlinePlus className='text-xl text-center' />
            </button>
        </div>
    );
};

export default MenuCard;