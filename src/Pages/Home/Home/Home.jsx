import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import ScrollToTopButton from '../../../Components/ScrollToTop/ScrollToTopButton';
import FeaturedFood from '../../../Components/FeaturedFood/FeaturedFood';
import BookTable from '../../../Components/BookTable/BookTable';
import Promotion from '../../../Components/Promotion/Promotion';
import { Helmet } from 'react-helmet-async';
import OurMenu from '../../../Components/OurMenu/OurMenu';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SWIGO | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedFood></FeaturedFood>
            <Promotion></Promotion>
            <OurMenu></OurMenu>
            <BookTable></BookTable>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default Home;