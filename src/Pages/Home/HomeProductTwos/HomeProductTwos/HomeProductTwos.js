import React from 'react';
import Attar from '../../../Categories/Islamic/Attars/Attar/Attar';
import UseProducts from '../../../../Hooks/UseProducts/UseProducts';

const HomeProductTwos = () => {
    const [products, setProducts] = UseProducts([]);

    return (
        <div>
            <h5 className="homefeaturedCategore-title">BESTSELLING PRODUCTS</h5>
            <hr style={{ marginTop: '10px' }}></hr>
            <div className='homeProducts'>
                {
                    products/* .filter(categore => categore.category === 'attar') */.slice(0, 12).map(attar => <Attar key={attar._id} attar={attar} />)
                }
            </div>
        </div>
    );
};

export default HomeProductTwos;