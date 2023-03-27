import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import HeaderCatagore from '../../Shared/Header/HomeHeader/HomeHeader';
import HomeIslamic from '../HomeIslamic/HomeIslamic';
import Banner2 from '../Banner/Banner2';
import Brands from '../Brands/Brands';

const Home = () => {
    return (
        <>
            <div className='container-xxl d-flex p-0'>
                <HeaderCatagore />
                <Banner />
            </div>

            <div className='container mb-5 mt-4'>
                <div className='featured-catagories mb-4'>
                    <h5>FEATURED CATEGORIES</h5>
                </div>

                {/* <div>
                    <FeaturedCatagories />
                </div> */}
            </div>


                   <HomeIslamic/>  
                   <Banner2/>
                   <Brands/>
            <div>
            </div>

        </>
    );
};

export default Home;