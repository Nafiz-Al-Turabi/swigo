import React from 'react';
import './Promotion.css'
import { LuChefHat } from "react-icons/lu";
import { BsClockHistory } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";
import { BiDish } from "react-icons/bi";

const Promotion = () => {
    return (
        <div className='my-32'>
            <div className='promotion max-w-6xl mx-auto rounded-3xl'>
                <h1 style={{fontFamily:'Lobster'}} className='text-6xl text-center text-gray-800 pt-20'>Why Choose Us ?</h1>
                <div className='flex justify-around mt-20'>
                    <div>
                        <p className='promotion-animation flex justify-center'><LuChefHat className='text-5xl text-red-500 mb-4' /></p>
                        <p className='text-xl font-semibold text-gray-800 text-center '>Best Chef</p>
                    </div>
                    <div>
                        <p className='promotion-animation flex justify-center'><BsClockHistory className='text-5xl text-red-500 mb-4' /></p>
                        <p className='text-xl font-semibold text-gray-800 text-center '>Our Restaurant is Open <br /> Around the Clock</p>
                    </div>
                    <div>
                        <p className='promotion-animation flex justify-center'><MdDeliveryDining className='text-5xl text-red-500 mb-4' /></p>
                        <p className='text-xl font-semibold text-gray-800 text-center '>24/7 Free Delivery</p>
                    </div>
                    <div>
                        <p className='promotion-animation flex justify-center'><BiDish className='text-5xl text-red-500 mb-4' /></p>
                        <p className='text-xl font-semibold text-gray-800 text-center '>We Have The Freshest <br /> Product</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;