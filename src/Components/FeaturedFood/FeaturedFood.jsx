import React from 'react';
import './FeaturedFood.css'

const FeaturedFood = () => {
    return (
        <div className='my-32'>
            <h1
                style={{ fontFamily: 'Lobster' }}
                className='text-6xl text-gray-800 text-center'>Our Featured Food
            </h1>

            <div className='max-w-6xl mx-auto grid grid-cols-4 gap-5 mt-8'>
                <div className='card p-4'>
                    <div className='overlay'></div>
                    <div className='overlay-1'></div>
                    <div>
                        <img className='img-1 h-40' src="https://i.ibb.co/VVp40FP/pic1.jpg" alt="" />
                    </div>
                    <h2 className='text-2xl  font-bold text-gray-800'>Pizza</h2>
                    <p className='text-center text-gray-600 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, illo.</p>
                    <h3 className='text-xl font-bold text-red-500 mb-4'>$25.5</h3>
                    <button className='bg-red-500 py-3 px-4 text-lg rounded-lg font-bold text-white mt-2'>Add To Cart</button>
                </div>
                <div className='card p-4'>
                    <div className='overlay'></div>
                    <div className='overlay-1'></div>
                    <div>
                        <img className='img-1 h-40' src="https://i.ibb.co/485gdRK/pic3.jpg" alt="" />
                    </div>
                    <h2 className='text-2xl  font-bold text-gray-800'>Green Salad</h2>
                    <p className='text-center text-gray-600 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, illo.</p>
                    <h3 className='text-xl font-bold text-red-500 mb-4'>$45.5</h3>
                    <button className='bg-red-500 py-3 px-4 text-lg rounded-lg font-bold text-white mt-2'>Add To Cart</button>
                </div>
                <div className='card p-4'>
                    <div className='overlay'></div>
                    <div className='overlay-1'></div>
                    <div>
                        <img className='img-1 h-40' src="https://i.ibb.co/1dD99nM/pic2.jpg" alt="" />
                    </div>
                    <h2 className='text-2xl  font-bold text-gray-800'>Rice</h2>
                    <p className='text-center text-gray-600 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, illo.</p>
                    <h3 className='text-xl font-bold text-red-500 mb-4'>$50</h3>
                    <button className='bg-red-500 py-3 px-4 text-lg rounded-lg font-bold text-white mt-2'>Add To Cart</button>
                </div>
                <div className='card p-4'>
                    <div className='overlay'></div>
                    <div className='overlay-1'></div>
                    <div>
                        <img className='img-1 h-40' src="https://i.ibb.co/ZKgQ0sR/pic4.jpg" alt="" />
                    </div>
                    <h2 className='text-2xl  font-bold text-gray-800'>Pasta</h2>
                    <p className='text-center text-gray-600 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, illo.</p>
                    <h3 className='text-xl font-bold text-red-500 mb-4'>$30</h3>
                    <button className='bg-red-500 py-3 px-4 text-lg rounded-lg font-bold text-white mt-2'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFood;