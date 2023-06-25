import React from 'react';
import './HomeFCategore.css'

const HomeFCategore = ({ homeFCategore }) => {
    const { categoryName, image } = homeFCategore;

    return (
        <div className='homeFCategore' rules="all">
            <div>
                <img className='text-center homeFCategore-img' src={image} />
                <h6 className='text-center categore-title'><small>{categoryName}</small></h6>
            </div>
        </div>
    );
};

export default HomeFCategore;