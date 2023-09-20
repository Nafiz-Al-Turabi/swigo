import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-gray-100  z-10'>
            <div className='relative'>
                <div className='max-w-6xl mx-auto pt-32'>
                    <div className='flex justify-between'>
                        <div className='w-2/6'>
                            <img src="https://i.ibb.co/DfbGFph/logo.png" alt="" />
                            <p className='text-gray-600 mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus in dolore, cupiditate repudiandae dicta inventore veritatis earum recusandae quidem consequuntur.</p>
                        </div>
                        <form className='relative'>
                            <h1 className='text-2xl font-bold mb-5 text-gray-800'>Subscribe To Our Newsletter</h1>
                            <input className='w-[500px] p-4 rounded-lg text-lg font-semibold text-gray-700 focus:outline-none' type="text" placeholder='Your Email...' />
                            <button className='banner-btn absolute bottom-11 right-2 bg-red-600 text-xl font-bold py-2 px-4 text-white rounded-lg '>Subscribe</button>
                        </form>
                    </div>
                    <hr className='border-1 border-gray-300 mt-8' />
                    <div className='flex justify-between mt-8'>
                        <div>
                            <h1 className='text-2xl font-bold mb-5 text-gray-800 uppercase'>Our Links</h1>
                            <div className='flex space-x-10'>
                                <a className='text-gray-500 font-semibold' href="">Home</a>
                                <a className='text-gray-500 font-semibold' href="">About Us</a>
                                <a className='text-gray-500 font-semibold' href="">Services</a>
                                <a className='text-gray-500 font-semibold' href="">Team</a>
                                <a className='text-gray-500 font-semibold' href="">Blog</a>
                            </div>
                        </div>
                        <div className='text-right'>
                            <h1 className='text-2xl font-bold mb-5 text-gray-800 uppercase'>HELP CENTER</h1>
                            <div className='flex space-x-10'>
                                <a className='text-gray-500 font-semibold' href="">FAQ</a>
                                <a className='text-gray-500 font-semibold' href="">Shop</a>
                                <a className='text-gray-500 font-semibold' href="">Category Filter</a>
                                <a className='text-gray-500 font-semibold' href="">Testimonials</a>
                                <a className='text-gray-500 font-semibold' href="">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <hr className='border-1 border-gray-300 mt-8' />
                    <div className='flex justify-between py-4'>
                        <p className="text-sm text-gray-400 ">
                            &copy; {new Date().getFullYear()} SWIGO. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-400 ">Created By ♥ <span className='text-red-500'>Nafiz Al Turabi</span></p>
                    </div>
                </div>
                <div className='footer-animation absolute bottom-0 left-0 '>
                    <img src="https://i.ibb.co/VqmYn6w/pic5.png" alt="" />
                </div>
                <div className='footer-animation absolute top-20 right-0 '>
                    <img src="https://i.ibb.co/fQPR0Zh/pic6.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;