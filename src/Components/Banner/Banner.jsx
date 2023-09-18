import React from 'react';
import { PiHamburgerThin } from "react-icons/pi";
import { CiCoffeeCup,CiPizza } from "react-icons/ci";
import { GiCakeSlice } from "react-icons/gi";
import { BiDish} from "react-icons/bi";
import './Banner.css'

const Banner = () => {
    return (
        <div className='overflow-hidden'
            style={{
                backgroundImage: "url('https://i.ibb.co/tDkhc81/bg.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: '750px',
                height: '750px',
                backgroundPosition: 'right top'
            }}
        >
            <div className='max-w-6xl mx-auto md:flex justify-between pt-20 relative'>
                <div className=''>
                    <h1 className='text-gray-800 text-7xl italic font-extrabold leading-snug'>The Number <span className='text-red-600'>#1</span> <br /> Choice Your Hunger <br /> Solution</h1>
                    <p className='w-1/2 text-lg text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero et minus neque debitis iure ut placeat nostrum inventore ipsa delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, aut quidem quasi ullam sint beatae.</p>
                    <div className='flex space-x-6 mt-10'>
                        <button className='banner-btn text-lg text-white font-semibold bg-red-600 py-3 px-5  rounded-lg '>Book a Table</button>
                        <button className='banner-btn text-lg text-red-500 font-semibold py-3 px-5 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white hover:shadow-red-500 duration-300 ease-linear '>View More</button>
                    </div>
                    <div className='flex space-x-5 mt-20'>
                        <div className='bg-red-50 text-red-600  p-3 rounded-lg hover:bg-red-600 hover:text-white duration-500 ease-in cursor-pointer'>
                            <PiHamburgerThin className='text-6xl'/>
                        </div>
                        <div className='bg-red-50 text-red-600 p-3 rounded-lg hover:bg-red-600 hover:text-white duration-500 ease-in cursor-pointer'>
                            <CiCoffeeCup className='text-6xl'/>
                        </div>
                        <div className='bg-red-50 text-red-600 p-3 rounded-lg hover:bg-red-600 hover:text-white duration-500 ease-in cursor-pointer'>
                            <CiPizza className='text-6xl'/>
                        </div>
                        <div className='bg-red-50 text-red-600 p-3 rounded-lg hover:bg-red-600 hover:text-white duration-500 ease-in cursor-pointer'>
                            <GiCakeSlice className='text-6xl'/>
                        </div>
                        <div className='bg-red-50 text-red-600 p-3 rounded-lg hover:bg-red-600 hover:text-white duration-500 ease-in cursor-pointer'>
                            <BiDish className='text-6xl'/>
                        </div>
                    </div>
                </div>
                <div className='absolute top-32 right-0 -mr-[240px]'>
                    <div className='banner-animation relative'>
                        <div></div>
                        <img className='w-[750px]' src="https://i.ibb.co/K2yFRML/crown.png" alt="" />
                        <img className='absolute top-28 right-10 ' src="https://i.ibb.co/D4fY4qR/burger.png" alt="" />
                        <img className='discount-animation absolute -top-8 right-20' src="https://i.ibb.co/hf6LqrH/offer.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='h-72 w-52 bg-red-600 rounded-3xl shadow-2xl shadow-red-500 absolute -top-40 -left-20 rotate-[20deg]'></div>
            <div className='h-72 w-52 bg-red-600 rounded-3xl shadow-2xl shadow-red-600  absolute -bottom-20 -left-48  rotate-[200deg]'></div>
        </div>
    );
};

export default Banner;