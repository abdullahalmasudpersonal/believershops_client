import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import FeaturedCatagories from './FeaturedCatagories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faCaretDown, faHeart, faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import HeaderCatagore from '../Shared/Header/HeaderCatagore';
import Slides from './Banner/Banner2';

const Home = () => {
    return (
        <>




            <div className='container-lg px-0  catagore-banner-flex '>

                <div>
                    <HeaderCatagore />
                </div>

                <div>
                    <Banner />
                </div>
                {/*  <Slides />  */}

            </div>



            <div className='container p-0 mb-5 mt-4'>

                <div className='featured-catagories mb-4'>
                    <h5>FEATURED CATEGORIES</h5>
                </div>
                <div>
                    <FeaturedCatagories />
                </div>
            </div>
        </>
    );
};

export default Home;