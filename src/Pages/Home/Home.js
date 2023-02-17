import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import FeaturedCatagories from './FeaturedCatagories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faCaretDown, faHeart, faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import HeaderCatagore from '../Shared/Header/HomeHeader/HomeHeader';
import useAttar from '../../Hooks/UseAttars';

const Home = () => {
    const [attars, setAttars] = useAttar([]);
    return (
        <>
            <div className='container-xxl px-3 d-flex '>
                <HeaderCatagore />
                <Banner />
            </div>
            
            <div className='container mb-5 mt-4 px-3'>
                <div className='featured-catagories mb-4'>
                    <h5>FEATURED CATEGORIES</h5>
                </div>

                <div>
                    <FeaturedCatagories />
                </div>           
            </div>

            <div className='d-flex'>
             
            </div>
        </>
    );
};

export default Home;