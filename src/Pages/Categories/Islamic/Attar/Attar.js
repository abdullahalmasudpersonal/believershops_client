import React from 'react';
import './Attar.css';

const Attar = ({ attar }) => {
    const { _id, brand, name, img, availability, ragularPrice, offerPrice, weight1 } = attar;

    return (
        <div>
            <div className=''>
                <img src={img} alt=''className='w-25' />
                <p>{name}</p>
                <p>{brand}</p>
            </div>
        </div>
    );
};

export default Attar;