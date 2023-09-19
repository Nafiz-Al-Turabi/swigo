import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import ScrollToTopButton from '../../../Components/ScrollToTop/ScrollToTopButton';
import FeaturedFood from '../../../Components/FeaturedFood/FeaturedFood';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFood></FeaturedFood>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default Home;