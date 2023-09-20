import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import ScrollToTopButton from '../../../Components/ScrollToTop/ScrollToTopButton';
import FeaturedFood from '../../../Components/FeaturedFood/FeaturedFood';
import BookTable from '../../../Components/BookTable/BookTable';
import Promotion from '../../../Components/Promotion/Promotion';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFood></FeaturedFood>
            <Promotion></Promotion>
            <BookTable></BookTable>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default Home;