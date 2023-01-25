import React from 'react';
import banner21 from '../../../img/banner/banner2/banner (1).jpg';
import banner22 from '../../../img/banner/banner2/banner (2).jpg';
import banner23 from '../../../img/banner/banner2/banner (3).jpg';
import './Banner.css';

const Slides = () => {
    return (
        <div className='banner2'>
            <img src={banner21} alt='' />
            <img src={banner21} alt='' />
           {/*  <img src={banner22} alt='' /> */}
        </div>
    );
};

export default Slides;