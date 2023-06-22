import React from 'react';
import './NewArrivals.css';
import UseProducts from '../../../Hooks/UseProducts/UseProducts';
import Attar from '../../Categories/Islamic/Attars/Attar/Attar';

const NewArrivals = () => {
    const [products, setProducts] = UseProducts([]);

    return (
        <div className='mb-2'>
            <h5 className="homefeaturedCategore-title">NEW ARRIVALS</h5>
            <hr style={{ marginTop: '10px' }}></hr>
            <div className='homeProducts newArrival-dev'>
                {
                    products.filter(categore => categore.category === 'attar').map(attar => <Attar key={attar._id} attar={attar} />)
                }
            </div>
        </div>
    );
};

export default NewArrivals;