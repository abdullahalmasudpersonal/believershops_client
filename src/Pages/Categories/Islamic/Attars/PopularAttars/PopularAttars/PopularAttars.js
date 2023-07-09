import React from 'react';
import PopularAttar from '../PopularAttar/PopularAttar';
import UseProducts from '../../../../../../Hooks/UseProducts/UseProducts';

const PopularAttars = () => {
    const [popularAttars, setPopularAttars] = UseProducts([]);

    return (
        <div className='nestedProducts'>
            {
                popularAttars.filter(categore => categore.subCategory === 'Popular Attar').slice(0).reverse().map(popularAttar => <PopularAttar key={popularAttar._id} popularAttar={popularAttar} />)
            }
        </div>
    );
};

export default PopularAttars;