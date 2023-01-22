import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import FeaturedCatagories from './FeaturedCatagories';

const Home = () => {
    return (
        <div className='container p-0 mb-5 mt-4'>
            <div className='featured-catagories mb-4'>
                <h5>FEATURED CATEGORIES</h5>
            </div>
            <div>
                <FeaturedCatagories/>
            </div>
        </div>
    );
};

export default Home;