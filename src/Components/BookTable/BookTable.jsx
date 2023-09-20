import React from 'react';
import './BookTable.css'
import { CiUser,CiLocationOn } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import { AiOutlineMail, AiOutlineCalendar } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";

const BookTable = () => {
    return (
        <div>
            <div className='book-table max-w-6xl mx-auto flex justify-between items-center  mb-32 rounded-xl'>
                <div className='w-[70%] text-white p-10 '>
                    <h1 className='text-2xl font-bold'>Book a Table</h1>
                    <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe, quia beatae voluptatibus laboriosam inventore!</p>
                    <form className='grid grid-cols-2 gap-6'>
                        <div className='relative'>
                            <input type="text" className='w-[350px] placeholder-white bg-transparent border-b text-xl focus:outline-none py-3 pl-10' placeholder='Your Name' />
                            <CiUser className='text-3xl absolute top-0 left-1 mt-3' />
                        </div>
                        <div className='relative'>
                            <input type="text" className='w-[350px] placeholder-white bg-transparent border-b text-xl focus:outline-none py-3 pl-10' placeholder='Phone Number' />
                            <BiPhoneCall className='text-3xl absolute top-0 left-1 mt-3' />
                        </div>
                        <div className='relative'>
                            <input type="number" className='w-[350px] placeholder-white bg-transparent border-b text-xl focus:outline-none py-3 pl-10' placeholder='Number of People' />
                            <GoPeople className='text-3xl absolute top-0 left-1 mt-3' />
                        </div>
                        <div className='relative'>
                            <input type="email" className='w-[350px] placeholder-white bg-transparent border-b text-xl focus:outline-none py-3 pl-10' placeholder='Email' />
                            <AiOutlineMail className='text-3xl absolute top-0 left-1 mt-3' />
                        </div>
                        <div className='relative'>
                            <input type="time" className='w-[350px] placeholder-white bg-transparent border-b text-xl focus:outline-none py-3 pl-10' placeholder='Time' />
                            <BsStopwatch className='text-3xl absolute top-0 left-1 mt-3' />
                        </div>
                        <div className='relative'>
                            <input type="date" className='w-[350px] placeholder-white bg-transparent border-b text-xl focus:outline-none py-3 pl-10' placeholder='Date' />
                            <AiOutlineCalendar className='text-3xl absolute top-0 left-1 mt-3' />
                        </div>
                        <div>
                            <button className='bg-red-600 py-3 px-4 text-lg rounded-lg font-bold text-white mt-2 hover:bg-red-500 duration-300 ease-linear'>Book a Table</button>
                        </div>
                    </form>
                </div>
                <div className='bg-red-600 w-[30%] mr-10 p-4 text-white py-10 rounded-xl'>
                    <h1 className='text-2xl font-bold mb-2'>Contact Info</h1>
                    <p className='text-gray-300 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, pariatur.</p>
                    <div className='flex gap-5 items-center mb-5'>
                        <p><CiLocationOn className='text-3xl' /></p>
                        <p>247/Plot No. 39, 15th Phase, Mohakhali Dhaka</p>
                    </div>
                    <div className='flex gap-5 items-center mb-5'>
                        <p><BiPhoneCall className='text-3xl' /></p>
                        <p>+8801740-206719 <br />+8801755-659843</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <p><AiOutlineMail className='text-3xl' /></p>
                        <p>nafizalturabi@gmail.com <br />
                        nafizalturabi18cse@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookTable;