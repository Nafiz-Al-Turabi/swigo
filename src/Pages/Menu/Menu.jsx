import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuCard from '../../Cards/MenuCard/MenuCard';
import ScrollToTopButton from '../../Components/ScrollToTop/ScrollToTopButton';

const Menu = () => {
    const [menus, setMenus] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    useEffect(() => {
        fetch('menu3.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, []);
    const filteredMenuItems = selectedCategory === "All"
        ? menus
        : menus.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());


    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };
    return (
        <div className='py-32  '>
            <div className='50'>
                <div className='flex items-center justify-between'>
                    <hr className='w-[40%] border-[2px] border-red-500' />
                    <h1 style={{ fontFamily: 'Lobster' }} className='text-7xl text-gray-800 text-center'>Our Menu</h1>
                    <hr className='w-[40%] border-[2px] border-red-500' />
                </div>
                <div className='my-8'>
                    <h3 className='flex justify-center items-center space-x-3 bg-red-500 w-56 mx-auto py-3 px-5 rounded-xl text-white'>
                        <Link to="/" className='text-lg'>Home</Link>
                        <i className="fa-solid fa-greater-than text-sm -mb-[2px]"></i>
                        <p className='text-lg'>Our Menu</p>
                    </h3>
                </div>
            </div>
            <hr className='mb-10' />

            <div className='flex justify-between items-center max-w-6xl mx-auto mb-16'>
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
                    <p
                        className='text-red-500 font-semibold py-2 px-5 -mb-5  border border-red-600 rounded-lg hover:bg-red-600 hover:text-white hover:shadow-red-500 duration-300 ease-linear '
                    >View All</p>
                </div>
            </div>

            <div className=' max-w-6xl mx-auto'>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        filteredMenuItems.map(menu => <MenuCard
                            menu={menu}
                            key={menu.id}
                        ></MenuCard>)
                    }
                </div>
            </div>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default Menu;