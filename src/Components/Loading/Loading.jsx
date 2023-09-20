import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className="loading-overlay flex items-center">
            <img className='h-32 mr-10' src="https://i.ibb.co/hB44rNz/line.gif" alt="" />

            <div style={{ fontFamily: 'Lobster' }} className="loading-text ">
                SWIGO
            </div>
            <img className='h-32' src="https://i.ibb.co/4ZJLt0Y/good-food.gif" alt="" />
        </div>
    );
};

export default Loading;