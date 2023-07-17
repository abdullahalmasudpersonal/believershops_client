import React from 'react';
import UseAttars from '../../../../Hooks/UseAttars/UseAttars';
import '../../Home/HomeProducts.css';
import HomeProduct from '../../HomeProduct/HomeProduct';

const HomeFeaturedProducts = () => {
    const [attars, setAttars] = UseAttars([]);

    return (
        <div className=''>
            <h5 className="homefeaturedCategore-title">FEATURED PRODUCTS</h5>
            <hr style={{ marginTop: '10px' }}></hr>
            <div className='homeProducts'>
                {
                    attars/* .filter(categore => categore.category === 'attar') */.slice(0, 24).map(product => <HomeProduct key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default HomeFeaturedProducts;