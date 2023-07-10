import React from 'react';
import UseProducts from '../../../../Hooks/UseProducts/UseProducts';
import Attar from '../../../Categories/Islamic/Attars/Attars/Attar';

const HomeProductOnes = () => {
    const [products, setProducts] = UseProducts();
    return ( 
        <div>
            <h5 className="homefeaturedCategore-title">POPULAR ATTAR</h5>
            <hr style={{ marginTop: '10px' }}></hr>
            <div className='homeProducts'>
                {
                    products.filter(categore => categore.category === 'attar').slice(0, 12).map(attar => <Attar key={attar._id} attar={attar} />)
                }
            </div>
        </div>
    );
};

export default HomeProductOnes;