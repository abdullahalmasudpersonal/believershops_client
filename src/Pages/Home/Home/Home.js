import React from 'react';
import Banner from '../Banner/Banner';
import HeaderCatagore from '../../Shared/Header/HomeHeader/HomeHeader';
import Banner2 from '../Banner/Banner2';
import Brands from '../Brands/Brands';
import HomeIslamic from '../HomeIslamic/HomeIslamic';

const Home = () => {
    return (
        <>
            <div className='container-xxl d-flex p-0'>
                <HeaderCatagore />
                <Banner />
            </div>

            <div className='container-xxl mb-5 mt-4 p-0'>
                <Banner2 />
                <HomeIslamic />
            </div>


        </>
    );
};

export default Home;