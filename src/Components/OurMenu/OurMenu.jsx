import React, { useEffect, useState } from 'react';
import HomeMenuCard from '../../Cards/HomeMenuCard/HomeMenuCard';
import { Link } from 'react-router-dom';

const OurMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All'); // Default to 'All'

    useEffect(() => {
        fetch('menu2.json')
            .then(res => res.json())
            .then(data => setMenuItems(data))
            .catch(error => console.log(error.message))
    }, []);

    const filteredMenuItems = selectedCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

    const displayedItems = filteredMenuItems.slice(0, 6);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='my-32'>
            <div className='max-w-6xl mx-auto'>
                <h1 style={{ fontFamily: 'Lobster' }} className='text-6xl text-center text-gray-800 pt-20'>From Our Menu</h1>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center mt-5'>
                        <button
                            className={`mx-2 ${selectedCategory === 'All' ? 'py-2 px-5 font-bold bg-red-50 text-red-500 rounded-lg' : ' py-2 px-5 font-bold hover:text-red-500 hover:bg-red-50 hover:rounded-lg duration-300 '}`}
                            onClick={() => handleCategoryChange('All')}
                        >
                            All
                        </button>
                        <button
                            className={`mx-2 ${selectedCategory === 'Salad' ? 'py-2 px-5 font-bold bg-red-50 text-red-500 rounded-lg' : 'py-2 px-5 font-bold hover:text-red-500 hover:bg-red-50 hover:rounded-lg duration-300 '}`}
                            onClick={() => handleCategoryChange('Salad')}
                        ><i className="fa-solid fa-carrot mr-4"></i>
                            Salad
                        </button>
                        <button
                            className={`mx-2 ${selectedCategory === 'Soup' ? 'py-2 px-5 font-bold bg-red-50 text-red-500 rounded-lg' : 'py-2 px-5 font-bold hover:text-red-500 hover:bg-red-50 hover:rounded-lg duration-300 '}`}
                            onClick={() => handleCategoryChange('Soup')}
                        ><i className="fa-solid fa-bowl-food mr-4"></i>
                            Soup
                        </button>
                        <button
                            className={`mx-2 ${selectedCategory === 'Pizza' ? 'py-2 px-5 font-bold bg-red-50 text-red-500 rounded-lg' : 'py-2 px-5 font-bold hover:text-red-500 hover:bg-red-50 hover:rounded-lg duration-300 '}`}
                            onClick={() => handleCategoryChange('Pizza')}
                        ><i className="fa-solid fa-pizza-slice mr-4"></i>
                            Pizza
                        </button>
                        <button
                            className={`mx-2 ${selectedCategory === 'Dessert' ? 'py-2 px-5 font-bold bg-red-50 text-red-500 rounded-lg' : 'py-2 px-5 font-bold hover:text-red-500 hover:bg-red-50 hover:rounded-lg duration-300 '}`}
                            onClick={() => handleCategoryChange('Dessert')}
                        ><i className="fa-solid fa-ice-cream mr-4"></i>
                            Dessert
                        </button>
                        <button
                            className={`mx-2 ${selectedCategory === 'Popular' ? 'py-2 px-5 font-bold bg-red-50 text-red-500 rounded-lg' : 'py-2 px-5 font-bold hover:text-red-500 hover:bg-red-50 hover:rounded-lg duration-300 '}`}
                            onClick={() => handleCategoryChange('Popular')}
                        ><i className="fa-solid fa-users mr-4"></i>
                            Popular
                        </button>
                    </div>
                    <div> 
                        <Link to="/menu"
                            className='text-red-500 font-semibold py-2 px-5 -mb-5  border border-red-600 rounded-lg hover:bg-red-600 hover:text-white hover:shadow-red-500 duration-300 ease-linear '
                        >View All</Link>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5 mt-10'>
                    {
                        displayedItems.map(item => (
                            <HomeMenuCard
                                key={item._id}
                                item={item}
                            ></HomeMenuCard>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default OurMenu;
