import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import HeaderCatagore from '../../Shared/Header/HomeHeader/HomeHeader';
import Banner2 from '../Banner/Banner2';
import Brands from '../Brands/Brands';
import HomeIslamic from '../HomeIslamic/HomeIslamic';
import './HomeProduct.css'
import './home.module.css'
import HomeFeaturedCategory from '../HomeFeaturedCategory/HomeFeaturedCategory';
import HomeBlogs from '../HomeBlogs/HomeBlogs';
const Home = () => {
    const [selected, setSelected] = useState("males");
    const changeHandler = e => {
        setSelected(e.target.value);
    };
    //  console.log(selected)


    return (
        <>
            <div className='container-xxl d-flex p-0'>
                <HeaderCatagore />
                <Banner />
            </div>
            <div className='container-xxl p-0'>
            {/*     <HomeFeaturedCategory /> */}
            </div>
            <div className='container-xxl mb-5 mt-4 p-0'>
                <Banner2 />
                <HomeIslamic />
            </div>
            <div className='container-xxl my-5'>
                <HomeBlogs/>
            </div>






        </>
    );
};

export default Home;