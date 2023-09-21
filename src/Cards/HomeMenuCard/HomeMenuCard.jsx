import React from 'react';

const HomeMenuCard = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 mx-auto text-white hover:-translate-y-3 duration-300">
            <img
                src={image}
                alt="Product Title"
                className="mx-auto rounded-lg"
            />
            <h2 className="text-gray-800 text-center text-2xl font-semibold mt-4">{name}</h2>
            <p className="text-center text-gray-600 mt-2">
                {recipe}
            </p>
            <p className="text-center text-red-500 text-2xl font-bold my-4">${price}</p>

        </div>
    );
};

export default HomeMenuCard;